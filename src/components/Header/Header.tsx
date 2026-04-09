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
          <Link href="/benefits">회원혜택</Link>
          <Link href="/orders">주문배송</Link>
          <Link href="/customer-center">고객센터</Link>
          <Link href="/cart">장바구니</Link>
          <Link href="/login">로그인</Link>
        </nav>
      </div>
    </header>
  );
}
