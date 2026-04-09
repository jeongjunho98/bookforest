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

  const [paymentMethod, setPaymentMethod] = useState('kakaopay');

  if (!book) {
    return <div className="container">잘못된 접근입니다.</div>;
  }

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const methodNames: { [key: string]: string } = {
      kakaopay: '카카오페이',
      naverpay: '네이버페이',
      toss: '토스페이',
      card: '신용/체크카드',
      bank: '무통장 입금'
    };
    
    alert(`[${methodNames[paymentMethod]}] 결제가 요청되었습니다.\n\n주문 도서: ${book.title}\n최종 결제 금액: ${book.price.toLocaleString()}원\n\n책갈피 숲을 이용해 주셔서 감사합니다!`);
    router.push('/');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <h1 className={styles.mainTitle}>주문/결제</h1>
      
      <div className={styles.checkoutContainer}>
        <div className={styles.leftCol}>
          {/* 1. 배송 정보 */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>배송정보</h3>
              <span className={styles.requiredInfo}>* 필수입력</span>
            </div>
            <form id="orderForm" className={styles.orderForm} onSubmit={handleOrder}>
              <div className={styles.inputRow}>
                <label>이름 <span className={styles.star}>*</span></label>
                <input type="text" placeholder="수령인 성함" required className={styles.fullInput} />
              </div>
              
              <div className={styles.inputRow}>
                <label>휴대폰 <span className={styles.star}>*</span></label>
                <div className={styles.phoneInputGroup}>
                  <input type="tel" placeholder="010" maxLength={3} required />
                  <span>-</span>
                  <input type="tel" placeholder="0000" maxLength={4} required />
                  <span>-</span>
                  <input type="tel" placeholder="0000" maxLength={4} required />
                </div>
              </div>

              <div className={styles.inputRow}>
                <label>배송주소 <span className={styles.star}>*</span></label>
                <div className={styles.addressGroup}>
                  <div className={styles.zipCodeRow}>
                    <input type="text" placeholder="우편번호" readOnly />
                    <button type="button" className={styles.subBtn}>주소찾기</button>
                  </div>
                  <input type="text" placeholder="기본주소" className={styles.fullInput} required />
                  <input type="text" placeholder="상세주소 입력" className={styles.fullInput} required />
                </div>
              </div>

              <div className={styles.inputRow}>
                <label>배송메시지</label>
                <select className={styles.fullInput}>
                  <option>배송 메시지를 선택해 주세요.</option>
                  <option>부재 시 문 앞에 놓아주세요.</option>
                  <option>배송 전 미리 연락바랍니다.</option>
                  <option>택배함에 보관해 주세요.</option>
                  <option>직접 입력</option>
                </select>
              </div>
            </form>
          </section>

          {/* 2. 결제 수단 (연동 UI 강화) */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>결제수단</h3>
            </div>
            <div className={styles.paymentGrid}>
              <button 
                type="button" 
                className={`${styles.payMethodBtn} ${paymentMethod === 'kakaopay' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('kakaopay')}
              >
                <span className={styles.payIcon}>🟡</span> 카카오페이
              </button>
              <button 
                type="button" 
                className={`${styles.payMethodBtn} ${paymentMethod === 'naverpay' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('naverpay')}
              >
                <span className={styles.payIcon}>🟢</span> 네이버페이
              </button>
              <button 
                type="button" 
                className={`${styles.payMethodBtn} ${paymentMethod === 'toss' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('toss')}
              >
                <span className={styles.payIcon}>🔵</span> 토스페이
              </button>
              <button 
                type="button" 
                className={`${styles.payMethodBtn} ${paymentMethod === 'card' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <span className={styles.payIcon}>💳</span> 신용카드
              </button>
              <button 
                type="button" 
                className={`${styles.payMethodBtn} ${paymentMethod === 'bank' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('bank')}
              >
                <span className={styles.payIcon}>🏦</span> 무통장입금
              </button>
            </div>

            {/* 결제 수단별 상세 안내 연동 UI */}
            <div className={styles.methodDetailArea}>
              {paymentMethod === 'kakaopay' && (
                <div className={`${styles.detailBox} ${styles.kakaoBorder}`}>
                  <p>카카오페이 결제창에서 결제를 진행합니다.</p>
                  <span>* 카카오톡 앱을 통해 간편하게 결제할 수 있습니다.</span>
                </div>
              )}
              {paymentMethod === 'naverpay' && (
                <div className={`${styles.detailBox} ${styles.naverBorder}`}>
                  <p>네이버페이 포인트/머니 및 등록된 카드로 결제합니다.</p>
                  <span>* 네이버 아이디로 간편하게 결제하세요.</span>
                </div>
              )}
              {paymentMethod === 'toss' && (
                <div className={`${styles.detailBox} ${styles.tossBorder}`}>
                  <p>토스 앱을 통해 빠르고 안전하게 결제합니다.</p>
                </div>
              )}
              {paymentMethod === 'card' && (
                <div className={styles.detailBox}>
                  <p>모든 신용/체크카드 결제가 가능합니다.</p>
                  <select className={styles.cardSelect}>
                    <option>카드를 선택해주세요</option>
                    <option>현대카드</option>
                    <option>삼성카드</option>
                    <option>KB국민카드</option>
                    <option>신한카드</option>
                  </select>
                </div>
              )}
              {paymentMethod === 'bank' && (
                <div className={styles.detailBox}>
                  <p>계좌번호: 기업은행 <strong>971-018442-02-019</strong></p>
                  <p>예금주: 정준호</p>
                  <span>* 주문 후 24시간 이내에 입금되지 않으면 자동 취소됩니다.</span>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* 3. 우측 최종 결제 요약 */}
        <div className={styles.rightCol}>
          <div className={styles.summaryCard}>
            <h3>최종 결제 금액</h3>
            <div className={styles.summaryContent}>
              <div className={styles.priceRow}>
                <span>상품금액</span>
                <span>{book.price.toLocaleString()}원</span>
              </div>
              <div className={styles.priceRow}>
                <span>배송비</span>
                <span className={styles.freeText}>무료배송</span>
              </div>
              <div className={styles.priceRow}>
                <span>할인금액</span>
                <span>0원</span>
              </div>
              <div className={styles.totalRow}>
                <span>합계</span>
                <span className={styles.totalPrice}>{book.price.toLocaleString()}원</span>
              </div>
            </div>
            
            <button type="submit" form="orderForm" className={styles.finalPayBtn}>
              {book.price.toLocaleString()}원 결제하기
            </button>
            
            <p className={styles.agreeText}>
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="container">결제 정보를 불러오는 중...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
