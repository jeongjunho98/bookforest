"use client";
import { useState } from 'react';
import styles from './benefits.module.css';

export default function BenefitsPage() {
  const [coupons, setCoupon] = useState<string[]>([]);

  const handleBenefitAction = (type: string) => {
    switch (type) {
      case "welcome":
        if (coupons.includes("WELCOME10")) {
          alert("이미 환영 쿠폰을 발급받으셨습니다.");
        } else {
          setCoupon([...coupons, "WELCOME10"]);
          alert("숲의 환영 선물: 10% 할인 쿠폰이 발급되었습니다! [마이페이지 > 쿠폰함]에서 확인하세요.");
        }
        break;
      case "shipping":
        alert("책갈피 숲의 모든 도서는 조건 없이 '무료 배송'됩니다. 결제 시 자동으로 적용됩니다.");
        break;
      case "points":
        alert("현재 회원님의 예상 적립 포인트는 500P입니다. 구매 확정 시 현금처럼 사용 가능합니다.");
        break;
      case "curation":
        alert("월간 숲 큐레이션 구독이 신청되었습니다. 매달 1일, 등록하신 이메일로 숲의 소식을 보내드립니다.");
        break;
      default:
        break;
    }
  };

  const benefits = [
    { 
      id: "welcome",
      title: "숲의 환영 선물", 
      desc: "신규 가입 시 첫 주문 10% 숲속 할인 쿠폰 제공",
      buttonText: "쿠폰 발급받기"
    },
    { 
      id: "shipping",
      title: "도서 무료 배송", 
      desc: "전국 어디든 숲의 마음을 담아 무료로 배송해 드립니다.",
      buttonText: "배송 정책 확인"
    },
    { 
      id: "points",
      title: "포인트 적립", 
      desc: "구매 금액의 5%를 다음 숲 산책을 위해 적립해 드립니다.",
      buttonText: "내 포인트 확인"
    },
    { 
      id: "curation",
      title: "월간 큐레이션", 
      desc: "매달 숲의 지혜를 담은 이달의 도서 가이드를 발송합니다.",
      buttonText: "구독 신청하기"
    }
  ];

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div className={styles.headerArea}>
        <h1>🌲 숲의 식구를 위한 특별한 혜택</h1>
        <p>책갈피 숲과 함께하는 당신에게 감사의 마음을 전합니다.</p>
      </div>

      <div className={styles.benefitGrid}>
        {benefits.map((b) => (
          <div key={b.id} className={styles.benefitCard}>
            <div className={styles.iconArea}>
              {b.id === 'welcome' && '🎁'}
              {b.id === 'shipping' && '🚚'}
              {b.id === 'points' && '💰'}
              {b.id === 'curation' && '✉️'}
            </div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <button 
              className={styles.actionBtn} 
              onClick={() => handleBenefitAction(b.id)}
            >
              {b.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
