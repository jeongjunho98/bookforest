"use client";
import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(`🌲 책갈피 숲의 식구가 되신 것을 환영합니다!\n\n회원명: ${formData.name}\n이메일: ${formData.email}\n\n숲의 모든 지혜를 누려보세요.`);
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
          {/* 1. 계정 정보 */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>계정정보</h3>
            
            <div className={styles.inputRow}>
              <label>아이디(이메일) <span className={styles.star}>*</span></label>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="example@bookforest.com" required className={styles.flexInput} />
                <button type="button" className={styles.subBtn}>중복확인</button>
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>비밀번호 <span className={styles.star}>*</span></label>
              <div className={styles.inputStack}>
                <input type="password" placeholder="영문, 숫자, 특수문자 포함 8~16자" required />
                <input type="password" placeholder="비밀번호 확인" required />
              </div>
            </div>
          </section>

          {/* 2. 개인 정보 */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>개인정보</h3>

            <div className={styles.inputRow}>
              <label>이름 <span className={styles.star}>*</span></label>
              <input type="text" placeholder="성함 입력" required className={styles.fullInput} />
            </div>

            <div className={styles.inputRow}>
              <label>생년월일 <span className={styles.star}>*</span></label>
              <div className={styles.birthGroup}>
                <input type="number" placeholder="YYYY" maxLength={4} />
                <input type="number" placeholder="MM" maxLength={2} />
                <input type="number" placeholder="DD" maxLength={2} />
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>성별</label>
              <div className={styles.radioGroup}>
                <label><input type="radio" name="gender" value="M" /> 남성</label>
                <label><input type="radio" name="gender" value="F" /> 여성</label>
                <label><input type="radio" name="gender" value="N" defaultChecked /> 선택안함</label>
              </div>
            </div>

            <div className={styles.inputRow}>
              <label>휴대폰 <span className={styles.star}>*</span></label>
              <div className={styles.phoneGroup}>
                <select className={styles.agencySelect}>
                  <option>SKT</option>
                  <option>KT</option>
                  <option>LG U+</option>
                  <option>알뜰폰</option>
                </select>
                <div className={styles.phoneInputs}>
                  <input type="tel" placeholder="010" />
                  <input type="tel" placeholder="0000" />
                  <input type="tel" placeholder="0000" />
                </div>
                <button type="button" className={styles.subBtn}>인증요청</button>
              </div>
            </div>
          </section>

          {/* 3. 주소 정보 */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>배송 주소</h3>
            <div className={styles.addressGroup}>
              <div className={styles.zipCodeRow}>
                <input type="text" placeholder="우편번호" readOnly />
                <button type="button" className={styles.subBtn}>주소찾기</button>
              </div>
              <input type="text" placeholder="기본 주소" className={styles.fullInput} />
              <input type="text" placeholder="상세 주소" className={styles.fullInput} />
            </div>
          </section>

          {/* 4. 약관 동의 */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>약관동의</h3>
            <div className={styles.agreementBox}>
              <div className={styles.allCheck}>
                <input type="checkbox" id="all" />
                <label htmlFor="all"><strong>전체 동의합니다.</strong></label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t1" required />
                <label htmlFor="t1">[필수] 책갈피 숲 이용약관 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t2" required />
                <label htmlFor="t2">[필수] 개인정보 수집 및 이용 동의</label>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" id="t3" />
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
