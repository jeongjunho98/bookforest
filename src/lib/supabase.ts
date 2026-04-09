import { createClient } from '@supabase/supabase-js';

// 잘못된 키를 모두 삭제하고 표준 환경 변수 방식으로 복구했습니다.
// 실제 연동 시 Vercel 대시보드나 .env.local에 새로운 키를 입력해 주세요.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);
