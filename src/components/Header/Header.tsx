"use client";
import Link from 'next/link';
import styles from './Header.module.css';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { isLoggedIn, userRole, userName, logout } = useAuth();

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
          
          {isLoggedIn ? (
            <>
              {userRole === '관리자' ? (
                <Link href="/admin" className={styles.adminLink}>관리자센터</Link>
              ) : (
                <Link href="/mypage" className={styles.userLink}>내 정보</Link>
              )}
              <span className={styles.welcomeMsg}><strong>{userName}</strong>님</span>
              <button onClick={logout} className={styles.logoutBtn}>로그아웃</button>
            </>
          ) : (
            <Link href="/login" className={styles.loginLink}>로그인</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
