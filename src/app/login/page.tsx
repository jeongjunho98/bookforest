"use client";
import { useState } from 'react';
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userId === 'bookforestadmin' && password === 'bookforest2026') {
      login(userId, '관리자', '정준호');
      alert('관리자 센터에 접속합니다.');
      router.push('/admin');
    } else if (userId && password) {
      login(userId, '회원', userId);
      alert(`${userId}님, 환영합니다!`);
      router.push('/');
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
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

          <form className={styles.emailForm} onSubmit={handleLogin}>
            <div className={styles.inputWrapper}>
              <input 
                type="text" 
                placeholder="아이디 입력" 
                className={styles.input} 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required 
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
              />
            </div>
            <button type="submit" className={styles.submitBtn}>로그인하기</button>
          </form>

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
