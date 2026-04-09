"use client";
import { useState, useEffect } from 'react';
import { bookService, Book } from "@/services/bookService";
import styles from "../page.module.css";
import Link from "next/link";
import SearchBar from "@/components/Search/SearchBar";
import BookImage from "@/components/Common/BookImage";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const LIMIT = 20;

  // 초기 데이터 로드
  useEffect(() => {
    const fetchInitialBooks = async () => {
      setLoading(true);
      try {
        const { books: initialBooks, total: totalCount } = await bookService.getBooks(1, LIMIT);
        setBooks(initialBooks);
        setTotal(totalCount);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialBooks();
  }, []);

  // 더 보기 기능 활성화
  const handleLoadMore = async () => {
    if (loading) return;
    
    setLoading(true);
    const nextPage = page + 1;
    try {
      const { books: nextBooks } = await bookService.getBooks(nextPage, LIMIT);
      if (nextBooks.length > 0) {
        setBooks(prev => [...prev, ...nextBooks]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Failed to load more books:", error);
    } finally {
      setLoading(false);
    }
  };

  const hasMore = books.length < total;

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-forest)', marginBottom: '20px' }}>
          🌲 전체 도서 탐색 ({total})
        </h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          책갈피 숲의 모든 도서들을 한눈에 살펴보세요.
        </p>
        <SearchBar />
      </div>

      <div className={styles.bookGrid}>
        {books.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <Link href={`/books/${book.id}`}>
              <div className={styles.imageWrapper}>
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
      
      {/* 긴급 복구: 더 많은 도서 불러오기 버튼 */}
      {hasMore && (
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <button 
            onClick={handleLoadMore}
            disabled={loading}
            className={styles.loadMoreBtn}
          >
            {loading ? '숲을 더 깊이 탐색 중...' : '더 많은 도서 불러오기'}
          </button>
        </div>
      )}

      {!hasMore && books.length > 0 && (
        <p style={{ textAlign: 'center', marginTop: '60px', color: '#ccc' }}>
          숲의 끝에 도달했습니다. 모든 도서를 확인하셨습니다.
        </p>
      )}
    </div>
  );
}
