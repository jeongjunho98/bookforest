"use client";
import { useState } from 'react';
import styles from "./signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    daum: any;
  }
}

export default function SignupPage() {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false); // 본인인증 상태 관리
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    emailUser: '',
    emailDomain: 'naver.com',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    gender: 'M',
    phoneAgency: 'SKT',
    phone1: '010',
    phone2: '',
    phone3: '',
    zipCode: '',
    baseAddress: '',
    detailAddress: ''
  });

  const [agreements, setAgreements] = useState({ terms: false, privacy: false, marketing: false });
  const isAllChecked = agreements.terms && agreements.privacy && agreements.marketing;

  const handleIdCheck = () => {
    if (!formData.userId) return alert('아이디를 입력해주세요.');
    alert(`[${formData.userId}]는 사용 가능한 아이디입니다.`);
  };

  const handlePhoneAuth = () => {
    if (!formData.phone2 || !formData.phone3) return alert('휴대폰 번호를 모두 입력해주세요.');
    alert('인증번호 1234가 발송되었습니다.');
    const code = prompt('인증번호를 입력하세요.');
    if (code === '1234') {
      setIsVerified(true);
      alert('본인인증이 완료되었습니다.');
    } else {
      alert('인증번호가 틀렸습니다.');
    }
  };

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        setFormData(prev => ({ ...prev, zipCode: data.zonecode, baseAddress: data.address }));
      }
    }).open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 본인인증 여부 체크 (핵심 보완 사항)
    if (!isVerified) {
      alert('휴대폰 본인인증을 완료하셔야 회원가입이 가능합니다.');
      return;
    }

    if (!agreements.terms || !agreements.privacy) return alert('필수 약관에 동의해주세요.');
    if (formData.password !== formData.confirmPassword) return alert('비밀번호가 일치하지 않습니다.');

    alert(`🌲 회원가입 완료! 반가워요, ${formData.name}님.`);
    router.push('/login');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className={styles.signupWrapper}>
        <div className={styles.signupHeader}>
          <h1>회원가입</h1>
          <p>안전한 이용을 위해 본인인증이 완료된 분들만 식구가 되실 수 있습니다.</p>
        </div>

        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>계정정보</h3>
            <div className={styles.inputRow}>
              <label>아이디 <span className={styles.star}>*</span></label>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="6~20자 영문, 숫자 조합" required className={styles.flexInput} value={formData.userId} onChange={(e) => setFormData({...formData, userId: e.target.value})} />
                <button type="button" className={styles.subBtn} onClick={handleIdCheck}>중복확인</button>
              </div>
            </div>
            <div className={styles.inputRow}>
              <label>비밀번호 <span className={styles.star}>*</span></label>
              <div className={styles.inputStack}>
                <input type="password" placeholder="8~16자 조합" required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <input type="password" placeholder="확인" required value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>본인확인 및 개인정보</h3>
            <div className={styles.inputRow}>
              <label>이름 <span className={styles.star}>*</span></label>
              <input type="text" placeholder="성함 입력" required className={styles.fullInput} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            
            <div className={styles.inputRow}>
              <label>본인인증 <span className={styles.star}>*</span></label>
              <div className={styles.phoneGroup}>
                <select className={styles.agencySelect} value={formData.phoneAgency} onChange={(e) => setFormData({...formData, phoneAgency: e.target.value})}>
                  <option>SKT</option><option>KT</option><option>LG U+</option><option>알뜰폰</option>
                </select>
                <div className={styles.phoneInputs}>
                  <input type="tel" value={formData.phone1} readOnly />
                  <input type="tel" placeholder="0000" value={formData.phone2} onChange={(e) => setFormData({...formData, phone2: e.target.value})} />
                  <input type="tel" placeholder="0000" value={formData.phone3} onChange={(e) => setFormData({...formData, phone3: e.target.value})} />
                </div>
                <button 
                  type="button" 
                  className={isVerified ? styles.verifiedBtn : styles.subBtn} 
                  onClick={handlePhoneAuth}
                  disabled={isVerified}
                >
                  {isVerified ? '인증완료' : '인증요청'}
                </button>
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>이메일 <span className={styles.star}>*</span></label>
              <div className={styles.emailGroup}>
                <input type="text" required value={formData.emailUser} onChange={(e) => setFormData({...formData, emailUser: e.target.value})} />
                <span className={styles.at}>@</span>
                <select value={formData.emailDomain} onChange={(e) => setFormData({...formData, emailDomain: e.target.value})}>
                  <option value="naver.com">naver.com</option><option value="gmail.com">gmail.com</option>
                </select>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>배송 주소</h3>
            <div className={styles.addressGroup}>
              <div className={styles.zipCodeRow}>
                <input type="text" placeholder="우편번호" readOnly value={formData.zipCode} />
                <button type="button" className={styles.subBtn} onClick={handleAddressSearch}>주소찾기</button>
              </div>
              <input type="text" placeholder="기본 주소" className={styles.fullInput} value={formData.baseAddress} readOnly />
              <input type="text" placeholder="상세 주소" className={styles.fullInput} onChange={(e) => setFormData({...formData, detailAddress: e.target.value})} />
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>약관동의</h3>
            <div className={styles.agreementBox}>
              <div className={styles.allCheck}>
                <input type="checkbox" id="all" checked={isAllChecked} onChange={(e) => handleAllCheck(e.target.checked)} />
                <label htmlFor="all"><strong>전체 동의합니다.</strong></label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t1" checked={agreements.terms} onChange={(e) => setAgreements(p => ({...p, terms: e.target.checked}))} />
                <label htmlFor="t1">[필수] 책갈피 숲 이용약관 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t2" checked={agreements.privacy} onChange={(e) => setAgreements(p => ({...p, privacy: e.target.checked}))} />
                <label htmlFor="t2">[필수] 개인정보 수집 및 이용 동의</label>
              </div>
            </div>
          </section>

          <button type="submit" className={styles.submitBtn}>가입완료</button>
        </form>
      </div>
    </div>
  );
}
