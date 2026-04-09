"use client";
import { useState, useEffect } from 'react';
import styles from "./signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    gender: 'none',
    phoneAgency: 'SKT',
    phone1: '010',
    phone2: '',
    phone3: '',
    zipCode: '',
    baseAddress: '',
    detailAddress: ''
  });

  // 약관 동의 상태 관리
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false
  });

  // 전체 동의 체크박스 상태
  const isAllChecked = agreements.terms && agreements.privacy && agreements.marketing;

  const handleAllCheck = (checked: boolean) => {
    setAgreements({
      terms: checked,
      privacy: checked,
      marketing: checked
    });
  };

  const handleSingleCheck = (name: keyof typeof agreements, checked: boolean) => {
    setAgreements(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!agreements.terms || !agreements.privacy) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
    alert(`🌲 책갈피 숲의 식구가 되신 것을 환영합니다!\n\n회원명: ${formData.name}\n이메일: ${formData.email}`);
    router.push('/login');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className={styles.signupWrapper}>
        <div className={styles.signupHeader}>
          <h1>회원가입</h1>
          <p>책갈피 숲 회원가입을 위해 정보를 입력해주세요.</p>
        </div>

        <form className={styles.signupForm} onSubmit={handleSubmit}>
          {/* 계정/개인정보 섹션 생략 (기존과 동일하되 formData 연동 유지) */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>계정정보</h3>
            <div className={styles.inputRow}>
              <label>아이디(이메일) <span className={styles.star}>*</span></label>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="example@bookforest.com" required className={styles.flexInput} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <button type="button" className={styles.subBtn}>중복확인</button>
              </div>
            </div>
            <div className={styles.inputRow}>
              <label>비밀번호 <span className={styles.star}>*</span></label>
              <div className={styles.inputStack}>
                <input type="password" placeholder="영문, 숫자, 특수문자 포함 8~16자" required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <input type="password" placeholder="비밀번호 확인" required value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
              </div>
            </div>
          </section>

          {/* 약관 동의 (버그 수정 포인트) */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>약관동의</h3>
            <div className={styles.agreementBox}>
              <div className={styles.allCheck}>
                <input 
                  type="checkbox" 
                  id="all" 
                  checked={isAllChecked}
                  onChange={(e) => handleAllCheck(e.target.checked)}
                />
                <label htmlFor="all" style={{ cursor: 'pointer' }}><strong>전체 동의합니다.</strong></label>
              </div>
              <div className={styles.checkItem}>
                <input 
                  type="checkbox" 
                  id="t1" 
                  required 
                  checked={agreements.terms}
                  onChange={(e) => handleSingleCheck('terms', e.target.checked)}
                />
                <label htmlFor="t1" style={{ cursor: 'pointer' }}>[필수] 책갈피 숲 이용약관 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input 
                  type="checkbox" 
                  id="t2" 
                  required 
                  checked={agreements.privacy}
                  onChange={(e) => handleSingleCheck('privacy', e.target.checked)}
                />
                <label htmlFor="t2" style={{ cursor: 'pointer' }}>[필수] 개인정보 수집 및 이용 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input 
                  type="checkbox" 
                  id="t3" 
                  checked={agreements.marketing}
                  onChange={(e) => handleSingleCheck('marketing', e.target.checked)}
                />
                <label htmlFor="t3" style={{ cursor: 'pointer' }}>[선택] 마케팅 정보 수신 동의</label>
              </div>
            </div>
          </section>

          <button type="submit" className={styles.submitBtn}>가입완료</button>
        </form>
      </div>
    </div>
  );
}
