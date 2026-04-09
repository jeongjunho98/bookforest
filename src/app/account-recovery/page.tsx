"use client";
import { useState } from 'react';
import styles from "./recovery.module.css";
import Link from "next/link";

export default function AccountRecoveryPage() {
  const [activeTab, setActiveTab] = useState<'id' | 'password'>('id');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const type = activeTab === 'id' ? '아이디' : '비밀번호';
    alert(`입력하신 정보로 ${type} 찾기를 요청했습니다. (초기 개발 상태이므로 실제 메일은 발송되지 않습니다.)`);
  };

  return (
    <div className="container">
      <div className={styles.recoveryContainer}>
        <div className={styles.recoveryBox}>
          <div className={styles.logoArea}>
            <Link href="/">🌲 책갈피 숲</Link>
          </div>
          
          <div className={styles.tabNav}>
            <button 
              className={activeTab === 'id' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('id')}
            >
              아이디 찾기
            </button>
            <button 
              className={activeTab === 'password' ? styles.activeTab : ''} 
              onClick={() => setActiveTab('password')}
            >
              비밀번호 찾기
            </button>
          </div>

          <p className={styles.subtitle}>
            {activeTab === 'id' 
              ? '가입 시 등록한 이름과 휴대폰 번호를 입력해주세요.' 
              : '가입 시 등록한 아이디(이메일)를 입력해주세요.'}
          </p>

          <form className={styles.recoveryForm} onSubmit={handleSubmit}>
            {activeTab === 'id' ? (
              <>
                <div className={styles.inputGroup}>
                  <label>이름</label>
                  <input type="text" placeholder="이름 입력" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label>휴대폰 번호</label>
                  <input type="tel" placeholder="'-' 없이 입력" className={styles.input} required />
                </div>
              </>
            ) : (
              <div className={styles.inputGroup}>
                <label>아이디 (이메일)</label>
                <input type="email" placeholder="example@bookforest.com" className={styles.input} required />
              </div>
            )}
            <button type="submit" className={styles.submitBtn}>
              {activeTab === 'id' ? '아이디 찾기' : '임시 비밀번호 발송'}
            </button>
          </form>

          <div className={styles.footerLinks}>
            <Link href="/login">로그인으로 돌아가기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
