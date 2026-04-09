-- 최신 버전 도서 데이터 주입 (105권)

INSERT INTO books (title, author, publisher, publish_date, price, description, category, cover_image, rating, review_count, tags, is_best)
VALUES 
('채식주의자', '한강', '창비', '2007-10-30', 15000, '육식을 거부하며 나무가 되고자 하는 여자의 이야기.', '소설', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop', 4.9, 2540, ARRAY['맨부커상', '현대소설'], true),
('소년이 온다', '한강', '창비', '2014-05-19', 14000, '광주민주화운동을 소재로 한 한강 작가의 장편소설.', '소설', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop', 4.9, 1820, ARRAY['역사소설', '감동'], true),
('아몬드', '손원평', '창비', '2017-03-31', 13000, '감정을 느끼지 못하는 소년의 특별한 성장 이야기.', '소설', 'https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=400&h=600&auto=format&fit=crop', 4.8, 3100, ARRAY['성장소설', '베스트셀러'], true),
('불편한 편의점', '김호연', '나무옆의자', '2021-04-20', 14000, '고단한 시대를 살아가는 우리에게 전하는 따뜻한 위로.', '소설', 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=600&auto=format&fit=crop', 4.8, 5600, ARRAY['힐링', 'K-소설'], true),
('달러구트 꿈 백화점', '이미예', '팩토리나인', '2020-07-08', 13800, '잠들어야만 입장 가능한 마을의 꿈 파는 가게 이야기.', '소설', 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop', 4.7, 4200, ARRAY['판타지', '베스트셀러'], true);

-- 나머지 100권 (루프 형식의 시뮬레이션 데이터 주입)
-- 실제 SQL Editor에서는 대량의 INSERT 문을 통해 실행됩니다.
-- 아래는 105권 구성을 위한 가이드 데이터입니다.

DO $$
BEGIN
   FOR i IN 6..105 LOOP
      INSERT INTO books (title, author, publisher, publish_date, price, description, category, cover_image, rating, review_count, tags, is_best)
      VALUES (
         '숲의 지혜 ' || i || '권: 깊은 숲의 목소리',
         '책갈피 숲 편집부',
         '북포레스트',
         '2024-01-01',
         15000 + (i * 10),
         '책갈피 숲에서만 만날 수 있는 평온한 지혜의 정수입니다.',
         CASE (i % 5) 
            WHEN 0 THEN '소설' WHEN 1 THEN '에세이' WHEN 2 THEN '경제경영' WHEN 3 THEN '자기계발' ELSE '인문' 
         END,
         CASE (i % 10)
            WHEN 0 THEN 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 1 THEN 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 2 THEN 'https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 3 THEN 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 4 THEN 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 5 THEN 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 6 THEN 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 7 THEN 'https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=400&h=600&auto=format&fit=crop'
            WHEN 8 THEN 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&h=600&auto=format&fit=crop'
            ELSE 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=600&auto=format&fit=crop'
         END,
         4.5,
         100 + i,
         ARRAY['베스트셀러', '추천도서'],
         false
      );
   END LOOP;
END $$;
