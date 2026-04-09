import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.infoSection}>
          <h2 className={styles.logo}>🌲 책갈피 숲</h2>
          <div className={styles.businessInfo}>
            <p><strong>대표이사</strong>: 정준호</p>
            <p><strong>주소</strong>: 전라남도 나주시 중야1길 37 대방엘리움1차아파트 106동 1401호</p>
            <p><strong>고객센터</strong>: 010-4851-7984 (평일 09:00 ~ 18:00)</p>
          </div>
        </div>
        
        <div className={styles.paymentSection}>
          <h3>무통장 입금 안내</h3>
          <p className={styles.bankInfo}>
            기업은행 <strong>971-018442-02-019</strong> (예금주: 정준호)
          </p>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 책갈피 숲 (Bookforest). All rights reserved.</p>
          <div className={styles.links}>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
