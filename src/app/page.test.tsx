import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '@/app/page'
import { MOCK_BOOKS } from '@/data/mockBooks'

describe('홈 페이지 (메인 UI) QA 테스트', () => {
  it('히어로 섹션의 환영 문구가 정상적으로 표시되는지 확인', () => {
    render(<Home />)
    const title = screen.getByText(/당신만의 평온한 책갈피/i)
    expect(title).toBeInTheDocument()
  })

  it('MOCK_BOOKS의 도서 제목들이 모두 렌더링되는지 확인', () => {
    render(<Home />)
    MOCK_BOOKS.forEach(book => {
      const bookTitle = screen.getByText(book.title)
      expect(bookTitle).toBeInTheDocument()
    })
  })

  it('도서 가격 정보가 통화 포맷(원)으로 정확히 표시되는지 확인', () => {
    render(<Home />)
    MOCK_BOOKS.forEach(book => {
      const priceString = `${book.price.toLocaleString()}원`
      const priceElement = screen.getByText(priceString)
      expect(priceElement).toBeInTheDocument()
    })
  })

  it('각 도서 카드에 카테고리 배지가 표시되는지 확인', () => {
    render(<Home />)
    MOCK_BOOKS.forEach(book => {
      const categoryBadge = screen.getAllByText(book.category)
      expect(categoryBadge.length).toBeGreaterThan(0)
    })
  })
})
