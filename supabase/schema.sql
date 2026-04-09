-- 1. 도서 테이블 (Books)
CREATE TABLE books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  publisher TEXT NOT NULL,
  publish_date DATE,
  price INTEGER NOT NULL,
  description TEXT,
  category TEXT,
  cover_image TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  tags TEXT[],
  is_best BOOLEAN DEFAULT false,
  stock_count INTEGER DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. 사용자 프로필 (Profiles)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT,
  role TEXT DEFAULT '회원', -- '관리자' 또는 '회원'
  phone TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. 주문 테이블 (Orders)
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  total_price INTEGER NOT NULL,
  status TEXT DEFAULT '입금대기', -- '입금대기', '결제완료', '배송중', '배송완료'
  payment_method TEXT,
  shipping_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. 주문 상세 (Order Items)
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders ON DELETE CASCADE,
  book_id UUID REFERENCES books,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL
);

-- RLS (Row Level Security) 설정
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
CREATE POLICY "누구나 도서를 조회할 수 있습니다." ON books FOR SELECT USING (true);
CREATE POLICY "관리자만 도서를 수정할 수 있습니다." ON books FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = '관리자'
);
