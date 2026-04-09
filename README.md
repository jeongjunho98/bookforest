# 🌲 책갈피 숲 (Bookforest)

> **숲속을 거니는 듯한 평온한 탐색과 만남, 당신만의 감성 온라인 서점**

![Bookforest Banner](https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&h=400&auto=format&fit=crop)

## 🚀 서비스 바로가기
**[https://bookforest.vercel.app](https://bookforest.vercel.app)**

---

## ✨ 핵심 기능 (Core Features)

### 📚 도서 탐색 및 관리
- **105권의 실물 도서 데이터**: 한강, 최진영 등 대한민국 베스트셀러 작가들의 실제 도서 정보 구축.
- **고도화된 상세 페이지**: 도서 소개, 목차, 별점 리뷰 시스템 완비.
- **전 제품 목록 (/all-products)**: 105권의 모든 제품을 한눈에 확인 가능.
- **실시간 검색**: 제목, 저자 기반의 스마트 검색 로직.

### 🛒 쇼핑 및 결제
- **장바구니 시스템**: 상품 담기, 수량 조절 및 즉시 이동 기능.
- **교보문고 스타일 주문/결제**: 상세 배송 정보 입력 및 네이버페이/카카오페이 등 다양한 결제 수단 연동.
- **무료 배송 정책**: 모든 도서에 대해 숲의 마음을 담은 무료 배송 적용.

### 🔐 계정 및 보안
- **아이디 기반 로그인**: 관리자 및 회원 전용 아이디 로그인 시스템.
- **상세 회원가입**: 휴대폰 본인인증(시뮬레이션) 및 카카오 주소 API 연동.
- **관리자 시스템 (/admin)**: 도서 수정/삭제, 주문 관리, 미답변 문의 관리 대시보드 제공.
- **접근 권한 제어**: 관리자 계정 탈퇴 방지 및 소비자 페이지 접근 제한 로직 적용.

---

## 🛠 기술 스택 (Tech Stack)

- **Frontend**: Next.js 15 (App Router), TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Backend/DB**: Supabase (PostgreSQL), Next.js Middleware
- **Deployment**: Vercel CLI, GitHub Actions
- **API**: Kakao Postcode API, Unsplash Image API

---

## 👨‍💼 사업자 정보
- **대표이사**: 정준호
- **주소**: 전라남도 나주시 중야1길 37 대방엘리움1차아파트 106동 1401호
- **고객센터**: 010-4851-7984
- **무통장 입금**: 기업은행 971-018442-02-019 (예금주: 정준호)

---

## 🛠 관리자 계정 (Admin)
- **아이디**: `bookforestadmin`
- **비밀번호**: `bookforest2026`
- **이메일**: `jeongjunho9804@gmail.com`

---

## 📦 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/jeongjunho98/bookforest.git

# 의존성 설치
npm install

# 로컬 서버 실행
npm run dev
```

© 2026 책갈피 숲 (Bookforest). All rights reserved.
