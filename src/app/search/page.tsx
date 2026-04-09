"use client";
import { useSearchParams } from "next/navigation";
import { MOCK_BOOKS } from "@/data/mockBooks";
import styles from "../page.module.css";
import Link from "next/link";
import SearchBar from "@/components/Search/SearchBar";
import { Suspense } from "react";
import BookImage from "@/components/Common/BookImage";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredBooks = MOCK_BOOKS.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase()) ||
    book.publisher.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
          &quot;{query}&quot;에 대한 검색 결과 ({filteredBooks.length}건)
        </h1>
        <SearchBar />
      </div>

      {filteredBooks.length > 0 ? (
        <div className={styles.bookGrid}>
          {filteredBooks.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <Link href={`/books/${book.id}`}>
                <div className={styles.imageWrapper}>
                  <BookImage src={book.coverImage} alt={book.title} className={styles.realCover} />
                </div>
                <div className={styles.bookInfo}>
                  <div className={styles.categoryBadge}>{book.category}</div>
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.author}>{book.author} | {book.publisher}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{book.price.toLocaleString()}원</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '100px 0', color: '#888' }}>
          찾으시는 도서가 숲속 어디에도 보이지 않네요. 다른 검색어를 입력해 보세요.
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>숲을 탐색 중입니다...</div>}>
      <SearchResults />
    </Suspense>
  );
}
