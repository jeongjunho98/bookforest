"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./admin.module.css";
import { MOCK_BOOKS as INITIAL_BOOKS, Book } from "@/data/mockBooks";

// 임시 주문 데이터 인터페이스
interface AdminOrder {
  id: string;
  user: string;
  bookTitle: string;
  price: number;
  status: '입금대기' | '결제완료' | '배송중' | '배송완료';
  date: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('summary');
  const [bookSearch, setBookSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  
  // 주문 데이터 상태 관리
  const [orders, setOrders] = useState<AdminOrder[]>([
    { id: 'ORD-20260410-001', user: '김독자', bookTitle: '채식주의자', price: 15000, status: '결제완료', date: '2026-04-10' },
    { id: 'ORD-20260410-002', user: '이회원', bookTitle: '소년이 온다', price: 14000, status: '입금대기', date: '2026-04-10' },
    { id: 'ORD-20260409-045', user: '박서점', bookTitle: '아몬드', price: 13000, status: '배송중', date: '2026-04-09' },
  ]);

  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [editForm, setEditForm] = useState({ title: '', author: '', price: 0 });

  useEffect(() => {
    setBooks(INITIAL_BOOKS);
  }, []);

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

  // 주문 상태 업데이트 로직 (발송 처리 등)
  const updateOrderStatus = (id: string, newStatus: AdminOrder['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
    alert(`주문 [${id}] 상태가 [${newStatus}]로 변경되었습니다.`);
  };

  const handleDeleteBook = (id: string) => {
    if (confirm('정말로 이 도서를 삭제하시겠습니까?')) {
      setBooks(prev => prev.filter(book => book.id !== id));
      alert('도서가 삭제되었습니다.');
    }
  };

  const openEditModal = (book: Book) => {
    setEditingBook(book);
    setEditForm({ title: book.title, author: book.author, price: book.price });
  };

  const handleSaveEdit = () => {
    if (!editingBook) return;
    setBooks(prev => prev.map(book => 
      book.id === editingBook.id ? { ...book, ...editForm } : book
    ));
    setEditingBook(null);
    alert('도서 정보가 성공적으로 수정되었습니다.');
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(bookSearch.toLowerCase()) ||
    book.author.toLowerCase().includes(bookSearch.toLowerCase())
  );

  return (
    <div className={styles.adminContainer}>
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

      <main className={styles.mainContent}>
        {activeMenu === 'summary' && (
          <section>
            <h1>운영 요약</h1>
            <div className={styles.statGrid}>
              <div className={styles.statCard}><h3>오늘의 주문</h3><p>{orders.filter(o => o.date === '2026-04-10').length}건</p></div>
              <div className={styles.statCard}><h3>전체 도서</h3><p>{books.length}권</p></div>
              <div className={styles.statCard}><h3>미결제 주문</h3><p>{orders.filter(o => o.status === '입금대기').length}건</p></div>
              <div className={styles.statCard}><h3>미답변 문의</h3><p>2건</p></div>
            </div>
          </section>
        )}

        {activeMenu === 'books' && (
          <section>
            <div className={styles.sectionHeaderFlex}>
              <h1>도서 관리 ({books.length})</h1>
              <button className={styles.addBtn} onClick={() => alert('신규 도서 등록 기능은 준비 중입니다.')}>+ 신규 도서 등록</button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.adminTable}>
                <thead>
                  <tr>
                    <th>ID</th><th>제목</th><th>저자</th><th>가격</th><th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.slice(0, 10).map(book => (
                    <tr key={book.id}>
                      <td>{book.id}</td><td>{book.title}</td><td>{book.author}</td><td>{book.price.toLocaleString()}원</td>
                      <td>
                        <button className={styles.editBtn} onClick={() => openEditModal(book)}>수정</button> 
                        <button className={styles.delBtn} onClick={() => handleDeleteBook(book.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 주문/배송 관리 구현 완료 */}
        {activeMenu === 'orders' && (
          <section>
            <h1>주문/배송 관리 ({orders.length})</h1>
            <div className={styles.tableWrapper}>
              <table className={styles.adminTable}>
                <thead>
                  <tr>
                    <th>주문번호</th><th>주문자</th><th>상품명</th><th>결제금액</th><th>상태</th><th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.user}</td>
                      <td>{order.bookTitle}</td>
                      <td>{order.price.toLocaleString()}원</td>
                      <td><span className={`${styles.statusBadge} ${styles[order.status]}`}>{order.status}</span></td>
                      <td>
                        {order.status === '결제완료' && <button className={styles.editBtn} onClick={() => updateOrderStatus(order.id, '배송중')}>발송하기</button>}
                        {order.status === '입금대기' && <button className={styles.editBtn} onClick={() => updateOrderStatus(order.id, '결제완료')}>입금확인</button>}
                        {order.status === '배송중' && <button className={styles.editBtn} onClick={() => updateOrderStatus(order.id, '배송완료')}>완료처리</button>}
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
          </section>
        )}
      </main>

      {/* 도서 수정 모달 UI */}
      {editingBook && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>도서 정보 수정</h2>
            <div className={styles.modalForm}>
              <div className={styles.modalField}><label>도서 제목</label><input type="text" value={editForm.title} onChange={(e) => setEditForm({...editForm, title: e.target.value})} /></div>
              <div className={styles.modalField}><label>저자명</label><input type="text" value={editForm.author} onChange={(e) => setEditForm({...editForm, author: e.target.value})} /></div>
              <div className={styles.modalField}><label>판매 가격</label><input type="number" value={editForm.price} onChange={(e) => setEditForm({...editForm, price: Number(e.target.value)})} /></div>
              <div className={styles.modalButtons}><button onClick={handleSaveEdit} className={styles.saveBtn}>저장하기</button><button onClick={() => setEditingBook(null)} className={styles.cancelBtn}>취소</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
