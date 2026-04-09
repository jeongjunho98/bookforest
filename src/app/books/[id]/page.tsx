"use client";
import { MOCK_BOOKS } from "@/data/mockBooks";
import styles from "./page.module.css";
import { notFound, useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import BookImage from "@/components/Common/BookImage";

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const id = params.id as string;
  const book = MOCK_BOOKS.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  const handleBuyNow = () => {
    // 바로구매 시 체크아웃 페이지로 도서 ID를 전달하며 이동
    router.push(`/checkout?bookId=${book.id}`);
  };

  return (
    <div className="container">
      <div className={styles.detailContainer}>
        <div className={styles.topSection}>
          <div className={styles.coverWrapper}>
            <div className={styles.bookCover}>
              <BookImage src={book.coverImage} alt={book.title} className={styles.detailImage} />
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
              <button className={styles.buyBtn} onClick={handleBuyNow}>
                바로 구매
              </button>
            </div>
            <div className={styles.tagList}>
              {book.tags.map(tag => (
                <span key={tag} className={styles.tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>

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
