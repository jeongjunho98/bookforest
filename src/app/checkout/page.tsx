"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { MOCK_BOOKS } from "@/data/mockBooks";
import styles from "./checkout.module.css";
import { Suspense, useState } from "react";
import BookImage from "@/components/Common/BookImage";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bookId = searchParams.get("bookId");
  const book = MOCK_BOOKS.find(b => b.id === bookId);

  const [orderInfo, setOrderInfo] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'bank'
  });

  if (!book) {
    return <div className="container">잘못된 접근입니다.</div>;
  }

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`주문이 완료되었습니다!\n\n도서: ${book.title}\n입금계좌: 기업은행 971-018442-02-019 (정준호)\n\n입금 확인 후 숲의 마음을 담아 배송해 드립니다.`);
    router.push('/');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <h1 style={{ marginBottom: '40px', color: 'var(--primary-forest)' }}>주문/결제</h1>
      
      <div className={styles.checkoutContainer}>
        <div className={styles.leftCol}>
          <section className={styles.section}>
            <h3>배송 정보</h3>
            <form id="orderForm" className={styles.orderForm} onSubmit={handleOrder}>
              <div className={styles.inputGroup}>
                <label>수령인</label>
                <input type="text" placeholder="이름" required />
              </div>
              <div className={styles.inputGroup}>
                <label>휴대폰</label>
                <input type="tel" placeholder="'-' 없이 입력" required />
              </div>
              <div className={styles.inputGroup}>
                <label>배송지 주소</label>
                <input type="text" placeholder="주소를 입력해주세요" required />
              </div>
            </form>
          </section>

          <section className={styles.section}>
            <h3>결제 수단</h3>
            <div className={styles.paymentBox}>
              <input type="radio" id="bank" name="pay" defaultChecked />
              <label htmlFor="bank">무통장 입금 (기업은행 971-018442-02-019)</label>
            </div>
          </section>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.summaryCard}>
            <h3>주문 상품 정보</h3>
            <div className={styles.bookItem}>
              <div className={styles.smallCover}>
                <BookImage src={book.coverImage} alt={book.title} />
              </div>
              <div className={styles.bookInfo}>
                <p className={styles.title}>{book.title}</p>
                <p className={styles.price}>{book.price.toLocaleString()}원</p>
              </div>
            </div>
            
            <div className={styles.priceRow}>
              <span>총 상품 금액</span>
              <span>{book.price.toLocaleString()}원</span>
            </div>
            <div className={styles.priceRow}>
              <span>배송비</span>
              <span>무료</span>
            </div>
            <div className={`${styles.priceRow} ${styles.total}`}>
              <span>최종 결제 금액</span>
              <span>{book.price.toLocaleString()}원</span>
            </div>
            
            <button type="submit" form="orderForm" className={styles.payBtn}>
              {book.price.toLocaleString()}원 결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>주문 정보를 불러오는 중...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
