-- 관리자 프로필 정보 업데이트 (DB 시드)
INSERT INTO profiles (id, user_login_id, email, name, role, phone, created_at)
VALUES (
  '00000000-0000-0000-0000-000000000000', -- 임시 관리자 UUID
  'bookforestadmin',
  'jeongjunho9804@gmail.com',
  '정준호',
  '관리자',
  '010-4851-7984',
  timezone('utc'::text, now())
) ON CONFLICT (user_login_id) DO UPDATE SET 
  phone = '010-4851-7984',
  email = 'jeongjunho9804@gmail.com';
