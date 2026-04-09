import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          🌲 책갈피 숲
        </Link>
        <nav className={styles.nav}>
          <Link href="/books">도서 탐색</Link>
          <Link href="/cart">장바구니</Link>
          <Link href="/login">로그인</Link>
        </nav>
      </div>
    </header>
  );
}
