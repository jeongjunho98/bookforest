"use client";
import { useState } from 'react';
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 관리자 계정 체크
    if (email === 'bookforestadmin' && password === 'bookforest2026') {
      localStorage.setItem('userRole', '관리자');
      localStorage.setItem('userName', '정준호');
      alert('관리자 계정으로 로그인되었습니다. 관리자 센터로 이동합니다.');
      router.push('/admin');
      return;
    }

    // 일반 로그인 (Mock)
    alert('일반 회원으로 로그인되었습니다.');
    localStorage.setItem('userRole', '회원');
    router.push('/');
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} 로그인을 시작합니다. (실제 연동을 위해선 Supabase 설정이 필요합니다.)`);
  };

  return (
    <div className="container">
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.logoArea}>
            <Link href="/">🌲 책갈피 숲</Link>
          </div>
          <h1>반가워요! 숲의 독자님</h1>
          <p className={styles.subtitle}>간편하게 로그인하고 당신만의 책갈피를 찾아보세요.</p>

          <form className={styles.emailForm} onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="아이디 또는 이메일" 
              className={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <input 
              type="password" 
              placeholder="비밀번호" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button type="submit" className={styles.submitBtn}>로그인</button>
          </form>

          <div className={styles.socialGroup}>
            <button className={`${styles.socialBtn} ${styles.kakao}`} onClick={() => handleSocialLogin('kakao')}>
              <span className={styles.icon}>🟡</span> 카카오로 시작하기
            </button>
            <button className={`${styles.socialBtn} ${styles.naver}`} onClick={() => handleSocialLogin('naver')}>
              <span className={styles.icon}>🟢</span> 네이버로 시작하기
            </button>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/signup">회원가입</Link>
            <span className={styles.dot}>·</span>
            <Link href="/account-recovery">아이디/비밀번호 찾기</Link>
          </div>

          <div className={styles.nonMemberArea}>
            <Link href="/non-member-order">비회원 주문조회</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
