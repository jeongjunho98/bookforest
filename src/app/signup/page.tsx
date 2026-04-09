"use client";
import { useState } from 'react';
import styles from "./signup.module.css";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(`${formData.name}님, 회원가입을 축하드립니다! (초기 개발 상태이므로 실제 데이터는 저장되지 않습니다.)`);
  };

  return (
    <div className="container">
      <div className={styles.signupContainer}>
        <div className={styles.signupBox}>
          <div className={styles.logoArea}>
            <Link href="/">🌲 책갈피 숲</Link>
          </div>
          <h1>새로운 식구가 되어주세요</h1>
          <p className={styles.subtitle}>책갈피 숲의 일원이 되어 당신만의 독서 여정을 시작하세요.</p>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>이름</label>
              <input 
                type="text" 
                name="name"
                placeholder="성함을 입력해주세요" 
                className={styles.input} 
                required 
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>이메일 주소</label>
              <input 
                type="email" 
                name="email"
                placeholder="example@bookforest.com" 
                className={styles.input} 
                required 
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>비밀번호</label>
              <input 
                type="password" 
                name="password"
                placeholder="8자 이상의 비밀번호" 
                className={styles.input} 
                required 
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>비밀번호 확인</label>
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="비밀번호를 다시 입력해주세요" 
                className={styles.input} 
                required 
                onChange={handleChange}
              />
            </div>

            <div className={styles.agreement}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">이용약관 및 개인정보 처리방침에 동의합니다.</label>
            </div>

            <button type="submit" className={styles.submitBtn}>회원가입 하기</button>
          </form>

          <div className={styles.footerLinks}>
            <span>이미 계정이 있으신가요?</span>
            <Link href="/login" className={styles.loginLink}>로그인하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
