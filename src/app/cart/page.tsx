"use client";
import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '150px 0' }}>
        <h1 style={{ marginBottom: '20px' }}>장바구니가 비어 있습니다. 🍂</h1>
        <p style={{ marginBottom: '40px' }}>숲속을 거닐며 마음에 드는 책을 찾아보세요.</p>
        <Link href="/" style={{ 
          backgroundColor: 'var(--primary-forest)', 
          color: '#fff', 
          padding: '15px 30px', 
          borderRadius: '8px' 
        }}>
          도서 탐색하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '40px', color: 'var(--primary-forest)' }}>장바구니</h1>
      
      <div className={styles.cartContainer}>
        <div className={styles.itemList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemCover}>{item.title}</div>
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className={styles.itemPrice}>
                {(item.price * item.quantity).toLocaleString()}원
              </div>
              <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>×</button>
            </div>
          ))}
        </div>

        <div className={styles.summaryCard}>
          <h2>결제 예정 금액</h2>
          <div className={styles.summaryRow}>
            <span>총 상품 금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <div className={styles.summaryRow}>
            <span>배송비</span>
            <span>0원 (숲속 무료 배송)</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>총 결제 금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <button className={styles.checkoutBtn}>주문하기</button>
          <button className={styles.clearBtn} onClick={clearCart}>장바구니 비우기</button>
        </div>
      </div>
    </div>
  );
}
