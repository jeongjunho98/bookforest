import styles from "./page.module.css";
import Link from "next/link";
import SearchBar from "@/components/Search/SearchBar";
import { MOCK_BOOKS } from "@/data/mockBooks";
import BookImage from "@/components/Common/BookImage";

export default function Home() {
  const bestSellers = MOCK_BOOKS.filter(b => b.isBest).slice(0, 10);
  const newBooks = MOCK_BOOKS.slice(10, 20);

  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1>당신만의 평온한 책갈피, 책갈피 숲</h1>
          <p>숲속을 거니는 듯한 차분한 탐색과 만남</p>
          <Link href="/books">
            <button className={styles.ctaButton}>도서 탐색하기</button>
          </Link>
          <SearchBar />
        </div>
      </section>

      {/* 베스트셀러 섹션 */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <h2>🌲 숲의 베스트셀러</h2>
            <p>지금 가장 많은 독자들이 숲에서 찾은 책들입니다.</p>
          </div>
          {/* 전 제품 목록 페이지(/all-products)로 연결 */}
          <Link href="/all-products" className={styles.moreLink}>전체보기 →</Link>
        </div>
        
        <div className={styles.bookGrid}>
          {bestSellers.map((book, index) => (
            <div key={book.id} className={styles.bookCard}>
              <Link href={`/books/${book.id}`}>
                <div className={styles.imageWrapper}>
                  <BookImage src={book.coverImage} alt={book.title} className={styles.realCover} />
                  <div className={styles.rankBadge}>{index + 1}</div>
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
      </section>

      {/* 이달의 작가 섹션 */}
      <section className={styles.authorSection}>
        <div className="container">
          <div className={styles.authorFlex}>
            <div className={styles.authorImage}>
              <img src="https://images.unsplash.com/photo-1476067848293-997808595ca7?q=80&w=400&h=400&auto=format&fit=crop" alt="한강 작가" />
            </div>
            <div className={styles.authorText}>
              <span className={styles.sectionTag}>EDITOR&apos;S PICK</span>
              <h2>이달의 작가: 한강</h2>
              <p>&quot;어떤 어둠 속에서도 우리는 빛을 찾아낼 수 있습니다.&quot;</p>
              <p className={styles.authorDesc}>2024년 노벨문학상 수상, 현대 한국 문학의 거장 한강 작가의 전 작품을 책갈피 숲에서 만나보세요.</p>
              <Link href="/search?q=한강"><button className={styles.authorBtn}>한강 작가 도서 보기</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 신간 섹션 */}
      <section className={styles.newBooksSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.titleArea}>
              <h2>🍃 숲에 막 도착한 책</h2>
              <p>숲의 신선함을 담은 새로운 도서들을 만나보세요.</p>
            </div>
            {/* 전 제품 목록 페이지(/all-products)로 연결 */}
            <Link href="/all-products" className={styles.moreLink}>전체보기 →</Link>
          </div>
          <div className={styles.bookGrid}>
            {newBooks.map((book) => (
              <div key={book.id} className={styles.bookCard}>
                <Link href={`/books/${book.id}`}>
                  <div className={styles.imageWrapper}>
                    <BookImage src={book.coverImage} alt={book.title} className={styles.realCover} />
                  </div>
                  <div className={styles.bookInfo}>
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
        </div>
      </section>
    </div>
  );
}
