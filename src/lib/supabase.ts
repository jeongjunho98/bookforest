import { createClient } from '@supabase/supabase-js';

// 요청하신 보안 키를 코드에 직접 반영하여 빌드 실패 방지
const supabaseUrl = 'https://bookforest.supabase.co';
const supabaseAnonKey = '5f52d05224bb8a2637e585c50bd52cfe';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
