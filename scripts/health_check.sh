# health_check.sh

#!/bin/bash

# service_url.inc 에서 현재 서비스를 하고 있는 WAS의 포트 번호 가져오기
PROJECT_ROOT="/home/ubuntu/app"

CURRENT_PORT=$(cat /home/ubuntu/service_url.inc | grep -Po '[0-9]+' | tail -1)
TARGET_PORT=0
DEPLOY_LOG="/home/ubuntu/app/deploy.log"

if [ ${CURRENT_PORT} -eq 8081 ]; then
    TARGET_PORT=8082
elif [ ${CURRENT_PORT} -eq 8082 ]; then
    TARGET_PORT=8081
else
    echo "> No WAS is connected to nginx"
    exit 1
fi

# 위 커맨드들을 통해 현재 타겟포트 가져오기

echo "> Start health check of WAS at 'http://127.0.0.1:${TARGET_PORT}' ..." >> $DEPLOY_LOG

# 아래 커맨드들을 새로 열린 서버가 정상적으로 작동하는지 확인

# 해당 커맨드들을 10번씩 반복
for RETRY_COUNT in 1 2 3 4 5 6 7 8 9 10
do
    echo "> #${RETRY_COUNT} trying..." >> $DEPLOY_LOG
    # 테스트할 API 주소를 통해 http 상태 코드 가져오기
    RESPONSE_CODE=$(curl -s -o /dev/null -w "%{http_code}"  http://127.0.0.1:${TARGET_PORT}/)

	# RESPONSE_CODE의 http 상태가 200번인 경우
    if [ ${RESPONSE_CODE} -eq 200 ]; then
        echo "> New WAS successfully running" >> $DEPLOY_LOG
        exit 0
    elif [ ${RETRY_COUNT} -eq 10 ]; then >> $DEPLOY_LOG
        echo "> Health check failed."
        exit 1
    fi
    # 아직 열려있지 않았다면 sleep
    sleep 15
done