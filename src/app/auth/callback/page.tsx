"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession();
      if (!error) {
        router.push('/');
      } else {
        alert('인증 중 오류가 발생했습니다.');
        router.push('/login');
      }
    };
    handleAuth();
  }, [router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>숲으로 들어가는 중입니다... 🌲</h1>
    </div>
  );
}
