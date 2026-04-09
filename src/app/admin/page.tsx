"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./admin.module.css";
import { MOCK_BOOKS } from "@/data/mockBooks";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('summary');

  // 관리자 권한 체크 (시뮬레이션)
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== '관리자') {
      alert('관리자 권한이 없습니다.');
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    router.push('/login');
  };

  return (
    <div className={styles.adminContainer}>
      {/* 사이드바 */}
      <aside className={styles.sidebar}>
        <div className={styles.adminInfo}>
          <h2>🌲 관리자 센터</h2>
          <p>ID: bookforestadmin</p>
          <span className={styles.roleBadge}>관리자</span>
        </div>
        <nav className={styles.adminNav}>
          <button onClick={() => setActiveMenu('summary')} className={activeMenu === 'summary' ? styles.active : ''}>📊 운영 요약</button>
          <button onClick={() => setActiveMenu('books')} className={activeMenu === 'books' ? styles.active : ''}>📚 도서 관리</button>
          <button onClick={() => setActiveMenu('orders')} className={activeMenu === 'orders' ? styles.active : ''}>🚚 주문/배송 관리</button>
          <button onClick={() => setActiveMenu('users')} className={activeMenu === 'users' ? styles.active : ''}>👥 회원 관리</button>
        </nav>
        <button onClick={handleLogout} className={styles.logoutBtn}>관리자 로그아웃</button>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className={styles.mainContent}>
        {activeMenu === 'summary' && (
          <section>
            <h1>운영 요약</h1>
            <div className={styles.statGrid}>
              <div className={styles.statCard}><h3>오늘의 주문</h3><p>12건</p></div>
              <div className={styles.statCard}><h3>전체 도서</h3><p>{MOCK_BOOKS.length}권</p></div>
              <div className={styles.statCard}><h3>신규 회원</h3><p>5명</p></div>
              <div className={styles.statCard}><h3>미답변 문의</h3><p>2건</p></div>
            </div>
          </section>
        )}

        {activeMenu === 'books' && (
          <section>
            <h1>도서 관리</h1>
            <table className={styles.adminTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>제목</th>
                  <th>저자</th>
                  <th>가격</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_BOOKS.slice(0, 10).map(book => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price.toLocaleString()}원</td>
                    <td><button className={styles.editBtn}>수정</button> <button className={styles.delBtn}>삭제</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeMenu === 'users' && (
          <section>
            <h1>회원 관리</h1>
            <table className={styles.adminTable}>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>역할</th>
                  <th>상태</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>정준호(관리자)</td>
                  <td>bookforestadmin</td>
                  <td><strong>관리자</strong></td>
                  <td>활동중</td>
                  <td>2026-04-10</td>
                </tr>
                <tr>
                  <td>홍길동</td>
                  <td>user01@naver.com</td>
                  <td>일반회원</td>
                  <td>활동중</td>
                  <td>2026-04-09</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.notice}>* 회원 보호 정책에 따라 관리자에 의한 임의 회원 탈퇴 기능은 제한됩니다.</p>
          </section>
        )}
      </main>
    </div>
  );
}
