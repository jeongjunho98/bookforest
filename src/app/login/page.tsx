"use client";
import { useState } from 'react';
import styles from "./login.module.css";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSocialLogin = async (provider: 'kakao' | 'naver' | 'google') => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) throw error;
    } catch (error: any) {
      alert(`로그인 중 오류가 발생했습니다: ${error.message}`);
    } finally {
      setLoading(false);
    }
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

          <div className={styles.socialGroup}>
            <button 
              className={`${styles.socialBtn} ${styles.kakao}`}
              onClick={() => handleSocialLogin('kakao')}
              disabled={loading}
            >
              <span className={styles.icon}>🟡</span> {loading ? '잠시만요...' : '카카오로 시작하기'}
            </button>
            <button 
              className={`${styles.socialBtn} ${styles.naver}`}
              onClick={() => handleSocialLogin('naver')}
              disabled={loading}
            >
              <span className={styles.icon}>🟢</span> {loading ? '잠시만요...' : '네이버로 시작하기'}
            </button>
            <button 
              className={`${styles.socialBtn} ${styles.google}`}
              onClick={() => handleSocialLogin('google')}
              disabled={loading}
            >
              <span className={styles.icon}>⚪</span> {loading ? '잠시만요...' : '구글로 시작하기'}
            </button>
          </div>

          <div className={styles.divider}>
            <span>또는 이메일로 로그인</span>
          </div>

          <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="이메일 주소" className={styles.input} />
            <input type="password" placeholder="비밀번호" className={styles.input} />
            <button type="submit" className={styles.submitBtn}>로그인</button>
          </form>

          <div className={styles.footerLinks}>
            <Link href="/signup">회원가입</Link>
            <span className={styles.dot}>·</span>
            <Link href="/find-password">비밀번호 찾기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
