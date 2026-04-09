-- 초기 5권 도서 데이터 주입
INSERT INTO books (title, author, publisher, price, description, category, cover_image, rating, review_count, tags, is_best)
VALUES 
('채식주의자', '한강', '창비', 15000, '육식을 거부하며 나무가 되고자 하는 여자의 이야기.', '소설', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop', 4.9, 2540, ARRAY['맨부커상', '현대소설'], true),
('소년이 온다', '한강', '창비', 14000, '광주민주화운동을 소재로 한 한강 작가의 장편소설.', '소설', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop', 4.9, 1820, ARRAY['역사소설', '감동'], true),
('아몬드', '손원평', '창비', 13000, '감정을 느끼지 못하는 소년의 특별한 성장 이야기.', '소설', 'https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=400&h=600&auto=format&fit=crop', 4.8, 3100, ARRAY['성장소설', '베스트셀러'], true),
('불편한 편의점', '김호연', '나무옆의자', 14000, '고단한 시대를 살아가는 우리에게 전하는 따뜻한 위로.', '소설', 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=600&auto=format&fit=crop', 4.8, 5600, ARRAY['힐링', 'K-소설'], true),
('달러구트 꿈 백화점', '이미예', '팩토리나인', 13800, '잠들어야만 입장 가능한 마을의 꿈 파는 가게 이야기.', '소설', 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop', 4.7, 4200, ARRAY['판타지', '베스트셀러'], true);

-- 나머지 100권은 루프를 통해 대량 주입 가능 (Supabase 대시보드 권장)
