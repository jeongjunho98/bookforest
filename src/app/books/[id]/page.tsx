"use client";
import { MOCK_BOOKS } from "@/data/mockBooks";
import styles from "./page.module.css";
import { notFound, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function BookDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  
  const id = params.id as string;
  const book = MOCK_BOOKS.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  return (
    <div className="container">
      <div className={styles.detailContainer}>
        {/* 상단: 도서 기본 정보 섹션 */}
        <div className={styles.topSection}>
          <div className={styles.coverWrapper}>
            <div className={styles.bookCover}>
              {book.title} 표지
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.categoryPath}>
              홈 {'>'} {book.category}
            </div>
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
              <button className={styles.cartBtn} onClick={() => addToCart(book)}>
                장바구니 담기
              </button>
              <button className={styles.buyBtn}>바로 구매</button>
            </div>
            <div className={styles.tagList}>
              {book.tags.map(tag => (
                <span key={tag} className={styles.tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 하단: 상세 설명 및 리뷰 섹션 */}
        <div className={styles.bottomSection}>
          <nav className={styles.tabNav}>
            <button className={styles.activeTab}>도서 소개</button>
            <button>목차</button>
            <button>리뷰 ({book.reviewCount})</button>
          </nav>
          <div className={styles.contentArea}>
            <h2>도서 소개</h2>
            <p className={styles.description}>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
