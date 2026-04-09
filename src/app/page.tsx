import styles from "./page.module.css";
import Link from "next/link";
import SearchBar from "@/components/Search/SearchBar";
import { MOCK_BOOKS } from "@/data/mockBooks";

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1>당신만의 평온한 책갈피, 책갈피 숲</h1>
          <p>숲속을 거니는 듯한 차분한 탐색과 만남</p>
          <SearchBar />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <h2>이달의 숲 선정 도서</h2>
            <p>책갈피 숲이 큐레이션한 이달의 추천 도서들입니다.</p>
          </div>
          <Link href="/books" className={styles.moreLink}>모두 보기 →</Link>
        </div>
        
        <div className={styles.bookGrid}>
          {MOCK_BOOKS.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <Link href={`/books/${book.id}`}>
                <div className={styles.bookCover}>
                  {book.title} 표지
                </div>                <div className={styles.bookInfo}>
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
                  <div className={styles.tagRow}>
                    {book.tags.slice(0, 2).map(tag => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
