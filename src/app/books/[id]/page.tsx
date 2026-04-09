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
  
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState<'info' | 'toc' | 'review'>('info');
  
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

  return (
    <div className="container">
      <div className={styles.detailContainer}>
        {/* 상단 기본 정보 섹션 */}
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

        {/* 하단 탭 섹션 (버그 수정: 클릭 기능 활성화) */}
        <div className={styles.bottomSection}>
          <nav className={styles.tabNav}>
            <button 
              className={activeTab === 'info' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('info')}
            >
              도서 소개
            </button>
            <button 
              className={activeTab === 'toc' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('toc')}
            >
              목차
            </button>
            <button 
              className={activeTab === 'review' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('review')}
            >
              리뷰 ({book.reviewCount})
            </button>
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
                  <li>제 1장. 시작하며</li>
                  <li>제 2장. 본론으로의 진입</li>
                  <li>제 3장. 심화 학습과 이해</li>
                  <li>제 4장. 결론 및 요약</li>
                </ul>
              </div>
            )}

            {activeTab === 'review' && (
              <div className={styles.tabContent}>
                <h2>독자 리뷰</h2>
                <div className={styles.reviewPlaceholder}>
                  <p>이 책에 대한 소중한 한 줄 평을 남겨주세요.</p>
                  <button className={styles.reviewBtn}>리뷰 작성하기</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
