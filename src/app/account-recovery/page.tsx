"use client";
import { useState } from 'react';
import styles from "./recovery.module.css";
import Link from "next/link";

export default function AccountRecoveryPage() {
  const [activeTab, setActiveTab] = useState<'id' | 'password'>('id');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'id') {
      alert('입력하신 정보로 아이디 찾기를 요청했습니다.');
    } else {
      // 관리자 계정 시뮬레이션
      if (userId === 'bookforestadmin') {
        alert('아이디 [bookforestadmin]에 등록된 이메일(jeongjunho9804@gmail.com)로 임시 비밀번호가 발송되었습니다.');
      } else {
        alert('입력하신 아이디에 등록된 이메일 주소로 임시 비밀번호가 발송되었습니다.');
      }
    }
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
              : '가입 시 등록한 아이디를 입력해주세요. 등록된 이메일로 임시 비밀번호를 보내드립니다.'}
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
                <label>아이디</label>
                <input 
                  type="text" 
                  placeholder="아이디 입력" 
                  className={styles.input} 
                  required 
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
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
