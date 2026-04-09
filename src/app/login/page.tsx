"use client";
import { useState } from 'react';
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 관리자 계정 체크
    if (userId === 'bookforestadmin' && password === 'bookforest2026') {
      localStorage.setItem('userRole', '관리자');
      localStorage.setItem('userName', '최고관리자');
      alert('관리자 센터에 접속합니다.');
      router.push('/admin');
    } else if (userId && password) {
      // 일반 회원 로그인 (Mock)
      localStorage.setItem('userRole', '회원');
      localStorage.setItem('userName', userId);
      alert(`${userId}님, 반갑습니다! 책갈피 숲에 오신 것을 환영합니다.`);
      router.push('/');
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} 간편 로그인을 시작합니다.`);
  };

  return (
    <div className="container">
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.logoArea}>
            <Link href="/">🌲 책갈피 숲</Link>
          </div>
          <h1>로그인</h1>
          <p className={styles.subtitle}>아이디와 비밀번호를 입력해 주세요.</p>

          {/* 1. 아이디/비밀번호 로그인 */}
          <form className={styles.emailForm} onSubmit={handleLogin}>
            <div className={styles.inputWrapper}>
              <input 
                type="text" 
                placeholder="아이디 입력" 
                className={styles.input} 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required 
                autoComplete="username"
              />
            </div>
            <div className={styles.inputWrapper}>
              <input 
                type="password" 
                placeholder="비밀번호 입력" 
                className={styles.input} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className={styles.submitBtn}>로그인</button>
          </form>

          <div className={styles.footerLinks}>
            <Link href="/signup">회원가입</Link>
            <span className={styles.dot}>·</span>
            <Link href="/account-recovery">아이디/비밀번호 찾기</Link>
          </div>

          <div className={styles.divider}>
            <span>간편 로그인</span>
          </div>

          {/* 2. 간편 로그인 (소셜) */}
          <div className={styles.socialGroup}>
            <button className={`${styles.socialBtn} ${styles.kakao}`} onClick={() => handleSocialLogin('카카오')}>
              <span className={styles.icon}>🟡</span> 카카오 로그인
            </button>
            <button className={`${styles.socialBtn} ${styles.naver}`} onClick={() => handleSocialLogin('네이버')}>
              <span className={styles.icon}>🟢</span> 네이버 로그인
            </button>
          </div>

          <div className={styles.nonMemberArea}>
            <Link href="/non-member-order">비회원 주문조회</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
