import { MOCK_BOOKS } from "@/data/mockBooks";
import styles from "../page.module.css";
import Link from "next/link";
import SearchBar from "@/components/Search/SearchBar";

export default function BooksPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-forest)', marginBottom: '20px' }}>
          🌲 전체 도서 탐색
        </h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          책갈피 숲의 모든 도서들을 한눈에 살펴보세요.
        </p>
        <SearchBar />
      </div>

      <div className={styles.bookGrid}>
        {MOCK_BOOKS.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <Link href={`/books/${book.id}`}>
              <div className={styles.imageWrapper}>
                <img src={book.coverImage} alt={book.title} className={styles.realCover} />
              </div>
              <div className={styles.bookInfo}>
                <div className={styles.categoryBadge}>{book.category}</div>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.author}>{book.author} | {book.publisher}</p>
                <div className={styles.ratingRow}>
                  <span className={styles.stars}>★ {book.rating}</span>
                  <span className={styles.reviewCount}>({book.reviewCount})</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{book.price.toLocaleString()}원</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
