"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyPage() {
  const { isLoggedIn, userName, userRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 style={{ fontSize: '32px', color: 'var(--primary-forest)', marginBottom: '40px' }}>마이페이지</h1>
      
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', border: '1px solid #eee' }}>
        <h3 style={{ marginBottom: '25px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>기본 정보</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '20px', fontSize: '16px' }}>
          <span style={{ color: '#888' }}>이름</span>
          <span style={{ fontWeight: '700' }}>{userName}</span>
          
          <span style={{ color: '#888' }}>역할</span>
          <span style={{ fontWeight: '700', color: 'var(--primary-forest)' }}>{userRole}</span>
          
          <span style={{ color: '#888' }}>회원 등급</span>
          <span style={{ fontWeight: '700' }}>🌲 숲의 친구 (일반)</span>
        </div>
      </div>

      <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '30px', backgroundColor: '#f9fbf9', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#888' }}>포인트</p>
          <p style={{ fontSize: '24px', fontWeight: '800', marginTop: '10px' }}>500P</p>
        </div>
        <div style={{ padding: '30px', backgroundColor: '#f9fbf9', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#888' }}>쿠폰</p>
          <p style={{ fontSize: '24px', fontWeight: '800', marginTop: '10px' }}>1장</p>
        </div>
        <div style={{ padding: '30px', backgroundColor: '#f9fbf9', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#888' }}>진행 중인 주문</p>
          <p style={{ fontSize: '24px', fontWeight: '800', marginTop: '10px' }}>0건</p>
        </div>
      </div>
    </div>
  );
}
