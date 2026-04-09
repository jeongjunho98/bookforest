"use client";
import styles from "./order.module.css";
import Link from "next/link";

export default function NonMemberOrderPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('비회원 주문 내역을 찾을 수 없습니다. (초기 개발 상태이므로 실제 데이터는 조회되지 않습니다.)');
  };

  return (
    <div className="container">
      <div className={styles.orderContainer}>
        <div className={styles.orderBox}>
          <div className={styles.logoArea}>
            <Link href="/">🌲 책갈피 숲</Link>
          </div>
          <h1>비회원 주문조회</h1>
          <p className={styles.subtitle}>주문번호와 휴대폰 번호를 입력하여 주문을 확인하세요.</p>

          <form className={styles.orderForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>주문자명</label>
              <input type="text" placeholder="주문 시 입력한 성함" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label>주문번호</label>
              <input type="text" placeholder="주문 완료 시 부여된 번호" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label>휴대폰 번호</label>
              <input type="tel" placeholder="'-' 없이 입력" className={styles.input} required />
            </div>
            <button type="submit" className={styles.submitBtn}>주문내역 조회하기</button>
          </form>

          <div className={styles.footerLinks}>
            <Link href="/login">로그인으로 돌아가기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
