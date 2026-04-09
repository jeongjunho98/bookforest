"use client";
import { useState } from 'react';
import { MOCK_BOOKS } from "@/data/mockBooks";
import styles from "./page.module.css";
import { notFound, useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import BookImage from "@/components/Common/BookImage";

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [activeTab, setActiveTab] = useState<'info' | 'toc' | 'review'>('info');
  
  // 리뷰 작성 관련 상태
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  
  const id = params.id as string;
  const book = MOCK_BOOKS.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(book);
    alert('장바구니에 도서가 담겼습니다. 장바구니로 이동합니다.');
    router.push('/cart');
  };

  const handleBuyNow = () => {
    router.push(`/checkout?bookId=${book.id}`);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) return alert('리뷰 내용을 입력해주세요.');
    alert(`리뷰가 등록되었습니다!\n별점: ${'★'.repeat(rating)}\n내용: ${reviewText}`);
    setShowReviewForm(false);
    setReviewText('');
  };

  return (
    <div className="container">
      <div className={styles.detailContainer}>
        {/* 상단 섹션 */}
        <div className={styles.topSection}>
          <div className={styles.coverWrapper}>
            <div className={styles.bookCover}>
              <BookImage src={book.coverImage} alt={book.title} className={styles.detailImage} />
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.categoryPath}>홈 {'>'} {book.category}</div>
            <h1 className={styles.title}>{book.title}</h1>
            <p className={styles.authorPublisher}>
              {book.author} 저 | {book.publisher} | {book.publishDate}
            </p>
            <div className={styles.ratingInfo}>
              <span className={styles.stars}>★ {book.rating}</span>
              <span className={styles.reviewCount}>({book.reviewCount}개의 리뷰)</span>
            </div>
            <div className={styles.priceInfo}>
              <span className={styles.label}>판매가</span>
              <span className={styles.price}>{book.price.toLocaleString()}원</span>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.cartBtn} onClick={handleAddToCart}>장바구니 담기</button>
              <button className={styles.buyBtn} onClick={handleBuyNow}>바로 구매</button>
            </div>
            <div className={styles.tagList}>
              {book.tags.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
            </div>
          </div>
        </div>

        {/* 하단 탭 섹션 */}
        <div className={styles.bottomSection}>
          <nav className={styles.tabNav}>
            <button className={activeTab === 'info' ? styles.activeTab : ''} onClick={() => setActiveTab('info')}>도서 소개</button>
            <button className={activeTab === 'toc' ? styles.activeTab : ''} onClick={() => setActiveTab('toc')}>목차</button>
            <button className={activeTab === 'review' ? styles.activeTab : ''} onClick={() => setActiveTab('review')}>리뷰 ({book.reviewCount})</button>
          </nav>

          <div className={styles.contentArea}>
            {activeTab === 'info' && (
              <div className={styles.tabContent}>
                <h2>도서 소개</h2>
                <p className={styles.description}>{book.description}</p>
              </div>
            )}
            
            {activeTab === 'toc' && (
              <div className={styles.tabContent}>
                <h2>목차</h2>
                <ul className={styles.tocList}>
                  <li>제 1장. 시작하며</li><li>제 2장. 본론으로의 진입</li><li>제 3장. 심화 학습과 이해</li><li>제 4장. 결론 및 요약</li>
                </ul>
              </div>
            )}

            {activeTab === 'review' && (
              <div className={styles.tabContent}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <h2>독자 리뷰</h2>
                  {!showReviewForm && (
                    <button className={styles.reviewBtn} onClick={() => setShowReviewForm(true)}>리뷰 작성하기</button>
                  )}
                </div>

                {showReviewForm ? (
                  <form className={styles.reviewForm} onSubmit={handleSubmitReview}>
                    <div className={styles.starInput}>
                      <label>평점 선택</label>
                      <div className={styles.starsSelect}>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <span 
                            key={num} 
                            onClick={() => setRating(num)}
                            style={{ cursor: 'pointer', fontSize: '30px', color: num <= rating ? '#f1c40f' : '#ddd' }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <textarea 
                      placeholder="이 책에 대한 솔직한 평을 남겨주세요."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className={styles.reviewTextarea}
                    />
                    <div className={styles.formButtons}>
                      <button type="submit" className={styles.submitReviewBtn}>등록하기</button>
                      <button type="button" className={styles.cancelReviewBtn} onClick={() => setShowReviewForm(false)}>취소</button>
                    </div>
                  </form>
                ) : (
                  <div className={styles.reviewPlaceholder}>
                    <p>등록된 리뷰가 없습니다. 첫 번째 리뷰의 주인공이 되어보세요!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
