import styles from './orders.module.css';
import Link from 'next/link';

export default function OrdersPage() {
  return (
    <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
      <h1>주문/배송 내역</h1>
      <p style={{ margin: '20px 0 40px', color: '#888' }}>현재 숲에서 배송 중인 내역이 없습니다.</p>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <Link href="/login" style={{ backgroundColor: 'var(--primary-forest)', color: '#fff', padding: '15px 30px', borderRadius: '8px' }}>
          회원 주문 조회
        </Link>
        <Link href="/non-member-order" style={{ border: '1px solid #ddd', padding: '15px 30px', borderRadius: '8px' }}>
          비회원 주문 조회
        </Link>
      </div>
    </div>
  );
}
