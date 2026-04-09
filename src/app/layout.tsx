import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "책갈피 숲 (Bookforest) - 평온한 도서 탐색",
  description: "숲속을 거니는 듯한 감성 온라인 서점, 책갈피 숲입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
