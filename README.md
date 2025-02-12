# kiosk-max

## Members

| <img src="https://avatars.githubusercontent.com/u/75569293?v=4" width=100 height=100 alt="June"/> | <img src="https://avatars.githubusercontent.com/u/87856793?v=4" width=100 height=100 alt="길사"/> | <img src="https://avatars.githubusercontent.com/u/97204689?v=4" width=100 height=100 alt="지안"/> | <img src="https://avatars.githubusercontent.com/u/54755633?v=4" width=100 height=100 alt="Geppetto"/> | <img src="https://avatars.githubusercontent.com/u/104147789?s=64&v=4" width=100 height=100 alt="파이"/> | <img src="https://avatars.githubusercontent.com/u/79886384?v=4" width=100 height=100 alt="Kakamotobi"/> |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
|                              [June(BE)](https://github.com/JJONSOO)                               |                           [길사(BE)](https://github.com/Sumin-Kim-dev)                            |                               [Jian(BE)](https://github.com/sudago)                               |                             [Geppetto(FE)](https://github.com/saejinpark)                             |                                 [파이(BE)](https://github.com/pie2457)                                  |                             [Kakamotobi(FE)](https://github.com/Kakamotobi)                             |

---

## 🧾 기술 스택

### 공통

![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=GitHub&logoColor=white)

### Back-End

<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white"/> <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"/> <img src="https://img.shields.io/badge/AWS-FA7343?style=flat&logo=AmazonAWS&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/> ![IntelliJ IDEA](https://img.shields.io/badge/-IntelliJ%20IDEA-FF3850?style=flat&logo=IntelliJ%20IDEA&logoColor=white)


### Front-End
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="react"/> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="typescript"/> <img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=Webpack&logoColor=black" alt="webpack"/> <img src="https://img.shields.io/badge/CSS%20Modules-000000.svg?style=for-the-badge&logo=CSS-Modules&logoColor=white" alt="css Modules"/>

## ⚒️ Project Infra 구조
![image](https://user-images.githubusercontent.com/75569293/249665263-cb91e160-0591-41dd-9fb6-36e1390cbb13.png)

## Ground Rules

우리끼리 지켜야하는 약속 + 공감대

### Scrum

`시간`: 10:00 - 10:30

> **내용**  
> 어제 했던 일  
> 오늘 할 일  
> 컨디션(10점 만점)  
> 스크럼 마스터

<details>
  <summary><b style="color: gray">Details</b></summary>
  <h2>Process</h2>
  <dl>
    <dt>어제 무엇을 했는지 간단하게 공유.</dt>
    <dd>
      <blockquote>
        <b>ex</b></br>
        어제 계획했던대로, 검색창과 서버를 연결해서 자동완성 기능을 구현했다.<br> 
        어제 계획했던 사이드바의 메인메뉴와 서브메뉴간의 이동을 ㅇㅇ문제 때문에 아직 구현하지 못했다.
      </blockquote>
    </dd>
  </dl>
  <dl>
    <dt>작고 구체적인 오늘의 목표/계획 공유.</dt>
    <dd>
      점심시간 전까지 Promise에 대해서 공부하고 내용을 기록하기.
      코어타임 마무리 전까지 사이드바의 메인메뉴와 서브메뉴간의 이동을 구현하고 커밋 올리기.
      1시간 동안 딤처리 로직을 리팩토링 하기.
    </dd>
  </dl>

  <dl>
    <dt>기타 공유</dt>
    <dd>
      <blockquote>
        <b>ex</b></br>
        이부분이 도무지 이해가 안가고 해결이 안되고 있는데 도와주실 분 있나요?
      </blockquote>
    </dd>
  </dl>
  
  <dl>
    <dt>Rules</dt>
    <dd>
      공유자의 공유에 따른 가벼운 멘트 가능.<br/>
      <blockquote>
        <b>ex</b></br>
        저도 같은 고민이 있었어요. 조금 이따가 같이 의논해 볼까요?<br>
      </blockquote>
      공유자의 고민, 문제점에 대한 깊은 대화는 위 과정이 끝나고 잡담 시간 혹은 개인학습/미션해결 시간에 하기.
    </dd>
  </dl>

  <dl>
    <dt>Scrum Master</dt>
    <dd>
      위 과정과 규칙이 원활하게 따르게 되도록 스크럼 진행하기.<br/>
      스크럼 마무리할 때 내일의 스크럼마스터 지정.
    </dd>
  </dl>
</details>

## 🤝🏼 Collaboration

### Branch Convention

Postfix feature branch with issue #.

`main`
`develop`
`feature#1`
`feature#2`

### Commit Convention

Prefix with Issue #
Ex: `#1 feat: add new feature`

> `feat` : 새로운 기능 추가  
> `design`: css 등 사용자 UI 디자인 변경  
> `fix` : 버그 수정  
> `docs` : 문서 수정  
> `test` : 테스트 코드 추가  
> `refactor` : 코드 리팩토링  
> `style` : 코드 의미에 영향을 주지 않는 변경사항  
> `chore` : 빌드 부분 혹은 패키지 매니저 수정사항

#### GitHub Projects

- Project 단위:

#### Issue Labels

`be`, `fe`, `bug`, `docs`, `help`, `question`, `feature`

### 주간회고

`시간`: (금) 15:00 ~ 15:30
