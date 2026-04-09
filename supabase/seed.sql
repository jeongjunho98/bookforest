-- 최신 버전 도서 데이터 주입 (105권 실제 도서 기반, 개정판 태그 제거됨)

TRUNCATE TABLE books CASCADE;

INSERT INTO books (id, title, author, publisher, publish_date, price, description, category, cover_image, rating, review_count, tags, is_best)
VALUES 
('00000000-0000-0000-0000-000000000001', '채식주의자', '한강', '창비', '2007-10-30', 15000, '육식을 거부하며 나무가 되고자 하는 여자의 이야기.', '소설', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop', 4.9, 2540, ARRAY['맨부커상', '현대소설'], true),
('00000000-0000-0000-0000-000000000002', '소년이 온다', '한강', '창비', '2014-05-19', 14000, '광주민주화운동을 소재로 한 한강 작가의 장편소설.', '소설', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop', 4.9, 1820, ARRAY['역사소설', '감동'], true),
('00000000-0000-0000-0000-000000000003', '아몬드', '손원평', '창비', '2017-03-31', 13000, '감정을 느끼지 못하는 소년의 특별한 성장 이야기.', '소설', 'https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=400&h=600&auto=format&fit=crop', 4.8, 3100, ARRAY['성장소설', '베스트셀러'], true),
('00000000-0000-0000-0000-000000000004', '불편한 편의점', '김호연', '나무옆의자', '2021-04-20', 14000, '고단한 시대를 살아가는 우리에게 전하는 따뜻한 위로.', '소설', 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=600&auto=format&fit=crop', 4.8, 5600, ARRAY['힐링', 'K-소설'], true),
('00000000-0000-0000-0000-000000000005', '달러구트 꿈 백화점', '이미예', '팩토리나인', '2020-07-08', 13800, '잠들어야만 입장 가능한 마을의 꿈 파는 가게 이야기.', '소설', 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop', 4.7, 4200, ARRAY['판타지', '베스트셀러'], true);

DO $$
DECLARE
    titles TEXT[] := ARRAY['구의 증명', '모순', '역행자', '세이노의 가르침', '돈의 속성', '사피엔스', '미움받을 용기', '도시와 그 불확실한 벽', '노르웨이의 숲', '파친코 1', '작별인사', '살인자의 기억법', '연금술사', '데미안', '개미', '인간 실격', '총 균 쇠', '코스모스', '부자 아빠 가난한 아빠', '트렌드 코리아 2024', '원씽', '아주 작은 습관의 힘', '타이탄의 도구들', '그릿', '이기적 유전자'];
    authors TEXT[] := ARRAY['최진영', '양귀자', '자청', '세이노', '김승호', '유발 하라리', '기시미 이치로', '무라카미 하루키', '무라카미 하루키', '이민진', '김영하', '김영하', '파울로 코엘료', '헤르만 헤세', '베르나르 베르베르', '다자이 오사무', '재레드 다이아몬드', '칼 세이건', '로버트 기요사키', '김난도', '게리 켈러', '제임스 클리어', '팀 페리스', '앤절라 더크워스', '리처드 도킨스'];
    prices INT[] := ARRAY[12000, 13000, 17500, 7200, 17800, 22000, 14900, 19500, 15000, 15800, 14000, 12000, 12000, 12000, 14800, 9000, 28000, 19900, 15800, 19000, 14000, 16000, 18000, 16000, 20000];
    images TEXT[] := ARRAY[
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
        'https://images.unsplash.com/photo-1512820790803-83ca734da794',
        'https://images.unsplash.com/photo-1543004218-ee141104638e',
        'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
        'https://images.unsplash.com/photo-1589998059171-988d887df646',
        'https://images.unsplash.com/photo-1532012197267-da84d127e765',
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
        'https://images.unsplash.com/photo-1511108690759-009324a90311',
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353'
    ];
BEGIN
   FOR i IN 6..105 LOOP
      INSERT INTO books (title, author, publisher, publish_date, price, description, category, cover_image, rating, review_count, tags, is_best)
      VALUES (
         titles[(i-6)%25 + 1], -- 개정판 태그 완전 제거
         authors[(i-6)%25 + 1],
         '북포레스트 출판',
         '2023-01-01',
         prices[(i-6)%25 + 1],
         titles[(i-6)%25 + 1] || '의 정식 출판본입니다. 많은 독자들에게 사랑받는 베스트셀러입니다.',
         '소설',
         images[(i-6)%10 + 1] || '?q=80&w=400&h=600&auto=format&fit=crop',
         4.5,
         100 + i,
         ARRAY['베스트셀러', '추천도서'],
         false
      );
   END LOOP;
END $$;

-- 관리자 프로필 정보 업데이트
INSERT INTO profiles (id, user_login_id, email, name, role, phone, created_at)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'bookforestadmin',
  'jeongjunho9804@gmail.com',
  '정준호',
  '관리자',
  '010-4851-7984',
  timezone('utc'::text, now())
) ON CONFLICT (user_login_id) DO UPDATE SET 
  phone = '010-4851-7984',
  email = 'jeongjunho9804@gmail.com';
