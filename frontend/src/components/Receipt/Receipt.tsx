import React, { useState, useEffect } from "react";
import { ReceiptData, PaymentTypes } from "../../App.tsx";
import styles from "./Receipt.module.css";

type ReceiptProps = {
  receipt: ReceiptData;
  setReceipt: (receipt: ReceiptData | null) => void;
};

function Receipt({
  receipt: { orderId, menus, paymentType, paymentAmount, totalAmount, change },
  setReceipt,
}: ReceiptProps) {
  const [remainTime, setRemainTime] = useState<number>(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainTime((remainTime) => remainTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (remainTime < 1) {
        setRemainTime(10);
        setReceipt(null);
      }
    };
  });

  return (
    <div className={styles.receipt}>
      <article>
        <h2 className="blind">영수증</h2>
        <h3 className="blind">주문</h3>
        <dl>
          <dt className="blind">번호</dt>
          <dd data-label="주문번호">{orderId}</dd>

          <dt className="blind">메뉴</dt>
          <dd>
            <ul>
              {menus.map(({ name, count }) => (
                <li key={name}>
                  <dl>
                    <dt className="blind">이름</dt>
                    <dd>{name}</dd>

                    <dt className="blind">수량</dt>
                    <dd>{count}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <h3 className="blind">결제</h3>
        <dl>
          <dt className="blind">방식</dt>
          <dd data-label="결제방식">{PaymentTypes[paymentType]}</dd>

          {paymentType === "cash" && (
            <>
              <dt className="blind">투입금액</dt>
              <dd data-label="투입금액" aria-label={`${paymentAmount}원`}>
                &#8361;{paymentAmount}
              </dd>
            </>
          )}

          <dt className="blind">총 결제금액</dt>
          <dd data-label="총 결제금액" aria-label={`${totalAmount}원`}>
            &#8361;{totalAmount}
          </dd>

          {paymentType === "cash" && (
            <>
              <dt className="blind">잔돈</dt>
              <dd data-label="잔돈" aria-label={`${change}원`}>
                &#8361;{change}
              </dd>
            </>
          )}
          {paymentType === "cash" && change}
        </dl>
        <div>
          <p>
            &#40;<strong>주의</strong>: 이 화면은 10초뒤에 자동으로
            사라집니다.&#41;
          </p>
          <p>
            <time>{remainTime}</time>
            <em>초</em>
          </p>
        </div>
      </article>
    </div>
  );
}

export default Receipt;
