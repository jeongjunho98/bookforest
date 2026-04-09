import { bookService } from "@/services/bookService";
import styles from "../page.module.css";
import Link from "next/link";
import SearchBar from "@/components/Search/SearchBar";
import BookImage from "@/components/Common/BookImage";

export default async function BooksPage() {
  // 서버 사이드에서 초기 20권만 가져오기
  const { books, total } = await bookService.getBooks(1, 20);

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-forest)', marginBottom: '20px' }}>
          🌲 전체 도서 탐색 ({total})
        </h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          책갈피 숲의 모든 도서들을 한눈에 살펴보세요. (성능 최적화 버전)
        </p>
        <SearchBar />
      </div>

      <div className={styles.bookGrid}>
        {books.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <Link href={`/books/${book.id}`}>
              <div className={styles.imageWrapper}>
                {/* next/image가 적용된 최적화 컴포넌트 */}
                <BookImage src={book.coverImage} alt={book.title} className={styles.realCover} />
              </div>
              <div className={styles.bookInfo}>
                <div className={styles.categoryBadge}>{book.category}</div>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{book.price.toLocaleString()}원</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <button style={{ padding: '15px 40px', border: '1px solid #ddd', borderRadius: '30px' }}>
          더 많은 도서 불러오기 (Pagination)
        </button>
      </div>
    </div>
  );
}
