"use client";
import { useState } from 'react';
import styles from "./signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
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
    gender: 'none',
    phoneAgency: 'SKT',
    phone1: '010',
    phone2: '',
    phone3: '',
    zipCode: '',
    baseAddress: '',
    detailAddress: ''
  });

  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false
  });

  const isAllChecked = agreements.terms && agreements.privacy && agreements.marketing;

  const handleAllCheck = (checked: boolean) => {
    setAgreements({ terms: checked, privacy: checked, marketing: checked });
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
    alert(`🌲 책갈피 숲 회원가입 완료!\n\n아이디: ${formData.userId}\n이름: ${formData.name}\n이메일: ${formData.emailUser}@${formData.emailDomain}`);
    router.push('/login');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className={styles.signupWrapper}>
        <div className={styles.signupHeader}>
          <h1>회원가입</h1>
          <p>교보문고 수준의 상세 정보를 입력하여 책갈피 숲의 식구가 되어보세요.</p>
        </div>

        <form className={styles.signupForm} onSubmit={handleSubmit}>
          {/* 1. 계정정보 (아이디/비밀번호) */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>계정정보</h3>
            
            <div className={styles.inputRow}>
              <label>아이디 <span className={styles.star}>*</span></label>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="6~20자 영문, 숫자 조합" 
                  required 
                  className={styles.flexInput} 
                  value={formData.userId}
                  onChange={(e) => setFormData({...formData, userId: e.target.value})}
                />
                <button type="button" className={styles.subBtn}>중복확인</button>
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>비밀번호 <span className={styles.star}>*</span></label>
              <div className={styles.inputStack}>
                <input 
                  type="password" 
                  placeholder="영문, 숫자, 특수문자 포함 8~16자" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <input 
                  type="password" 
                  placeholder="비밀번호 확인" 
                  required 
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
              </div>
            </div>
          </section>

          {/* 2. 개인정보 (이름/이메일/생년월일/연락처) */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>개인정보</h3>

            <div className={styles.inputRow}>
              <label>이름 <span className={styles.star}>*</span></label>
              <input 
                type="text" 
                placeholder="성함 입력" 
                required 
                className={styles.fullInput} 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className={styles.inputRow}>
              <label>이메일 <span className={styles.star}>*</span></label>
              <div className={styles.emailGroup}>
                <input 
                  type="text" 
                  placeholder="이메일 아이디" 
                  required 
                  value={formData.emailUser}
                  onChange={(e) => setFormData({...formData, emailUser: e.target.value})}
                />
                <span className={styles.at}>@</span>
                <select 
                  value={formData.emailDomain}
                  onChange={(e) => setFormData({...formData, emailDomain: e.target.value})}
                >
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="kakao.com">kakao.com</option>
                  <option value="direct">직접입력</option>
                </select>
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>생년월일 <span className={styles.star}>*</span></label>
              <div className={styles.birthGroup}>
                <input type="number" placeholder="년(4자)" value={formData.birthYear} onChange={(e) => setFormData({...formData, birthYear: e.target.value})} />
                <select value={formData.birthMonth} onChange={(e) => setFormData({...formData, birthMonth: e.target.value})}>
                  <option value="">월</option>
                  {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{i+1}월</option>)}
                </select>
                <input type="number" placeholder="일" value={formData.birthDay} onChange={(e) => setFormData({...formData, birthDay: e.target.value})} />
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>성별</label>
              <div className={styles.radioGroup}>
                <label><input type="radio" name="gender" value="M" onChange={() => setFormData({...formData, gender: 'M'})} /> 남성</label>
                <label><input type="radio" name="gender" value="F" onChange={() => setFormData({...formData, gender: 'F'})} /> 여성</label>
                <label><input type="radio" name="gender" value="none" defaultChecked onChange={() => setFormData({...formData, gender: 'none'})} /> 선택안함</label>
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>휴대폰 <span className={styles.star}>*</span></label>
              <div className={styles.phoneGroup}>
                <select className={styles.agencySelect} value={formData.phoneAgency} onChange={(e) => setFormData({...formData, phoneAgency: e.target.value})}>
                  <option>SKT</option><option>KT</option><option>LG U+</option><option>알뜰폰</option>
                </select>
                <div className={styles.phoneInputs}>
                  <input type="tel" value={formData.phone1} readOnly />
                  <input type="tel" placeholder="0000" value={formData.phone2} onChange={(e) => setFormData({...formData, phone2: e.target.value})} />
                  <input type="tel" placeholder="0000" value={formData.phone3} onChange={(e) => setFormData({...formData, phone3: e.target.value})} />
                </div>
                <button type="button" className={styles.subBtn}>인증요청</button>
              </div>
            </div>
          </section>

          {/* 3. 배송 주소 */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>배송 주소</h3>
            <div className={styles.addressGroup}>
              <div className={styles.zipCodeRow}>
                <input type="text" placeholder="우편번호" readOnly value={formData.zipCode} />
                <button type="button" className={styles.subBtn}>주소찾기</button>
              </div>
              <input type="text" placeholder="기본 주소" className={styles.fullInput} value={formData.baseAddress} readOnly />
              <input type="text" placeholder="상세 주소 입력" className={styles.fullInput} value={formData.detailAddress} onChange={(e) => setFormData({...formData, detailAddress: e.target.value})} />
            </div>
          </section>

          {/* 4. 약관동의 */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>약관동의</h3>
            <div className={styles.agreementBox}>
              <div className={styles.allCheck}>
                <input type="checkbox" id="all" checked={isAllChecked} onChange={(e) => handleAllCheck(e.target.checked)} />
                <label htmlFor="all"><strong>전체 동의합니다.</strong></label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t1" required checked={agreements.terms} onChange={(e) => handleSingleCheck('terms', e.target.checked)} />
                <label htmlFor="t1">[필수] 책갈피 숲 이용약관 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t2" required checked={agreements.privacy} onChange={(e) => handleSingleCheck('privacy', e.target.checked)} />
                <label htmlFor="t2">[필수] 개인정보 수집 및 이용 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t3" checked={agreements.marketing} onChange={(e) => handleSingleCheck('marketing', e.target.checked)} />
                <label htmlFor="t3">[선택] 마케팅 정보 수신 동의</label>
              </div>
            </div>
          </section>

          <button type="submit" className={styles.submitBtn}>가입완료</button>
        </form>
      </div>
    </div>
  );
}
