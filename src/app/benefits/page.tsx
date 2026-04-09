"use client";
import { useState } from 'react';
import styles from './benefits.module.css';
import { useRouter } from 'next/navigation';

export default function BenefitsPage() {
  const router = useRouter();
  // 실제 서비스 시 Context나 Supabase Auth에서 가져올 로그인 상태 (현재는 시뮬레이션용 false)
  const isLoggedIn = false; 

  const handleBenefitAction = (type: string) => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      router.push('/login');
      return;
    }

    alert(`혜택이 적용되었습니다! (${type})`);
  };

  const benefits = [
    { id: "welcome", title: "숲의 환영 선물", desc: "신규 가입 시 첫 주문 10% 숲속 할인 쿠폰 제공", buttonText: "쿠폰 발급받기", icon: "🎁" },
    { id: "shipping", title: "도서 무료 배송", desc: "전국 어디든 숲의 마음을 담아 무료로 배송해 드립니다.", buttonText: "배송 정책 확인", icon: "🚚" },
    { id: "points", title: "포인트 적립", desc: "구매 금액의 5%를 다음 숲 산책을 위해 적립해 드립니다.", buttonText: "내 포인트 확인", icon: "💰" },
    { id: "curation", title: "월간 큐레이션", desc: "매달 숲의 지혜를 담은 이달의 도서 가이드를 발송합니다.", buttonText: "구독 신청하기", icon: "✉️" }
  ];

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div className={styles.headerArea}>
        <h1>🌲 숲의 식구를 위한 특별한 혜택</h1>
        <p>로그인 후 책갈피 숲만의 다양한 혜택을 누려보세요.</p>
      </div>

      <div className={styles.benefitGrid}>
        {benefits.map((b) => (
          <div key={b.id} className={styles.benefitCard}>
            <div className={styles.iconArea}>{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <button className={styles.actionBtn} onClick={() => handleBenefitAction(b.id)}>
              {b.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
