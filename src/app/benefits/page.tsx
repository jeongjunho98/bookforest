import styles from './benefits.module.css';

export default function BenefitsPage() {
  const benefits = [
    { title: "숲의 환영 선물", desc: "신규 가입 시 첫 주문 10% 숲속 할인 쿠폰 제공" },
    { title: "도서 무료 배송", desc: "전국 어디든 숲의 마음을 담아 무료로 배송해 드립니다." },
    { title: "포인트 적립", desc: "구매 금액의 5%를 다음 숲 산책을 위해 적립해 드립니다." },
    { title: "월간 큐레이션", desc: "매달 숲의 지혜를 담은 이달의 도서 가이드를 발송합니다." }
  ];

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div className={styles.headerArea}>
        <h1>🌲 숲의 식구를 위한 특별한 혜택</h1>
        <p>책갈피 숲과 함께하는 당신에게 감사의 마음을 전합니다.</p>
      </div>

      <div className={styles.benefitGrid}>
        {benefits.map((b, i) => (
          <div key={i} className={styles.benefitCard}>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
