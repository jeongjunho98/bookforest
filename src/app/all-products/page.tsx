"use client";
import { useState, useEffect } from 'react';
import { bookService, Book } from "@/services/bookService";
import { MOCK_BOOKS } from "@/data/mockBooks"; // Fallback 데이터
import styles from "../page.module.css";
import Link from "next/link";
import BookImage from "@/components/Common/BookImage";
import SearchBar from "@/components/Search/SearchBar";

export default function AllProductsPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        // DB에서 최대한 많이 가져오기 시도 (150권까지)
        const { books: dbBooks } = await bookService.getBooks(1, 150);
        
        if (dbBooks && dbBooks.length > 0) {
          setBooks(dbBooks);
        } else {
          // DB 데이터가 비어있으면 MOCK_BOOKS 강제 로드
          setBooks(MOCK_BOOKS);
        }
      } catch (error) {
        console.error("DB Fetch Error, falling back to mock data:", error);
        setBooks(MOCK_BOOKS);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', color: 'var(--primary-forest)', marginBottom: '20px' }}>
          🌿 책갈피 숲 전 제품 목록 ({books.length})
        </h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          책갈피 숲에 등록된 모든 실제 도서 상품들을 한눈에 확인하세요.
        </p>
        <SearchBar />
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '100px 0' }}>숲의 지혜를 불러오는 중...</div>
      ) : (
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
      )}
    </div>
  );
}
