"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./admin.module.css";
import { MOCK_BOOKS as INITIAL_BOOKS, Book } from "@/data/mockBooks";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('summary');
  const [bookSearch, setBookSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  // 초기 도서 데이터 로드
  useEffect(() => {
    setBooks(INITIAL_BOOKS);
  }, []);

  // 관리자 권한 체크
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== '관리자') {
      alert('관리자 권한이 없습니다.');
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    router.push('/login');
  };

  // 도서 삭제 로직
  const handleDeleteBook = (id: string) => {
    if (confirm('정말로 이 도서를 삭제하시겠습니까?')) {
      setBooks(prev => prev.filter(book => book.id !== id));
      alert('도서가 삭제되었습니다.');
    }
  };

  // 도서 수정 로직 (시뮬레이션)
  const handleEditBook = (id: string) => {
    const newTitle = prompt('새로운 도서 제목을 입력하세요:');
    if (newTitle) {
      setBooks(prev => prev.map(book => 
        book.id === id ? { ...book, title: newTitle } : book
      ));
      alert('도서 정보가 수정되었습니다.');
    }
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(bookSearch.toLowerCase()) ||
    book.author.toLowerCase().includes(bookSearch.toLowerCase())
  );

  return (
    <div className={styles.adminContainer}>
      {/* 사이드바 */}
      <aside className={styles.sidebar}>
        <div className={styles.adminInfo}>
          <h2>🌲 관리자 센터</h2>
          <div className={styles.adminDetail}>
            <p>ID: <strong>bookforestadmin</strong></p>
            <p className={styles.subInfo}>📧 jeongjunho9804@gmail.com</p>
            <p className={styles.subInfo}>📞 010-4851-7984</p>
          </div>
          <span className={styles.roleBadge}>관리자</span>
        </div>
        <nav className={styles.adminNav}>
          <button onClick={() => setActiveMenu('summary')} className={activeMenu === 'summary' ? styles.active : ''}>📊 운영 요약</button>
          <button onClick={() => setActiveMenu('books')} className={activeMenu === 'books' ? styles.active : ''}>📚 도서 관리</button>
          <button onClick={() => setActiveMenu('orders')} className={activeMenu === 'orders' ? styles.active : ''}>🚚 주문/배송 관리</button>
          <button onClick={() => setActiveMenu('users')} className={activeMenu === 'users' ? styles.active : ''}>👥 회원 관리</button>
        </nav>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className={styles.mainContent}>
        {activeMenu === 'summary' && (
          <section>
            <h1>운영 요약</h1>
            <div className={styles.statGrid}>
              <div className={styles.statCard}><h3>오늘의 주문</h3><p>12건</p></div>
              <div className={styles.statCard}><h3>전체 도서</h3><p>{books.length}권</p></div>
              <div className={styles.statCard}><h3>신규 회원</h3><p>5명</p></div>
              <div className={styles.statCard}><h3>미답변 문의</h3><p>2건</p></div>
            </div>
          </section>
        )}

        {activeMenu === 'books' && (
          <section>
            <div className={styles.sectionHeaderFlex}>
              <h1>도서 관리 ({books.length})</h1>
              <button className={styles.addBtn} onClick={() => alert('신규 도서 등록 팝업이 열립니다.')}>+ 신규 도서 등록</button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                placeholder="도서명 또는 저자명 검색..." 
                value={bookSearch}
                onChange={(e) => setBookSearch(e.target.value)}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  padding: '12px 15px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.adminTable}>
                <thead>
                  <tr>
                    <th>ID</th><th>제목</th><th>저자</th><th>가격</th><th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map(book => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.price.toLocaleString()}원</td>
                      <td>
                        <button className={styles.editBtn} onClick={() => handleEditBook(book.id)}>수정</button> 
                        <button className={styles.delBtn} onClick={() => handleDeleteBook(book.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeMenu === 'users' && (
          <section>
            <h1>회원 관리</h1>
            <table className={styles.adminTable}>
              <thead>
                <tr>
                  <th>이름</th><th>아이디</th><th>역할</th><th>상태</th><th>가입일</th>
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
              </tbody>
            </table>
            <p className={styles.notice}>* 회원 보호 정책에 따라 관리자에 의한 임의 회원 탈퇴 기능은 제한됩니다.</p>
          </section>
        )}
      </main>
    </div>
  );
}
