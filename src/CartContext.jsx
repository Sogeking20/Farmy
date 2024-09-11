import React, { createContext, useState, useEffect } from 'react';

// Создание контекста
export const CartContext = createContext();

// Провайдер контекста
export const CartProvider = ({ children }) => {
  // Инициализация состояния корзины
  const [cart, setCart] = useState(() => {
    // Получаем корзину из localStorage или создаём пустую
    const savedCart = localStorage.getItem('cartNotReg');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Сохраняем изменения в localStorage при каждом изменении состояния корзины
  useEffect(() => {
    localStorage.setItem('cartNotReg', JSON.stringify(cart));
  }, [cart]);

  // Функция для добавления товаров в корзину
  const addToCart = (item) => {
    console.log(item)
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {

    localStorage.removeItem('cartNotReg');
    setCart([]); // Обновляем состояние корзины
    window.location.reload();
  };

  const deleteFromCart= (name) => {

    const newCart = cart.filter(item => item.name !== name);
    console.log(newCart);
    setCart(newCart);
    localStorage.setItem('cartNotReg', JSON.stringify(newCart));
    window.location.reload();
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
