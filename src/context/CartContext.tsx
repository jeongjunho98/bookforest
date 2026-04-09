"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '@/data/mockBooks';

interface CartItem extends Book {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('bookforest-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookforest-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book: Book) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === book.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prev => 
      prev.map(item => item.id === bookId ? { ...item, quantity } : item)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
