import { toHexFormat } from 'antd/es/color-picker/color';
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

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [endPrice, setEndPrice] = useState(0)

  useEffect(() => {
    setEndPrice(cart.reduce((acc, item) => acc + item.price * item.num, 0));
  }, [cart]);

  // let endPrice  = 8.69

  // Сохраняем изменения в localStorage при каждом изменении состояния корзины
  useEffect(() => {
    localStorage.setItem('cartNotReg', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Функция для добавления товаров в корзину
  const addToCart = (item) => {
    // console.log(item)
    if (cart.find((cartItem) => cartItem.name === item.name)) {
      cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.num += 1
        }
      })
      setCart((prevCart) => [...prevCart])
      console.log(cart)
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const addToFavorites = (item) => {
    // console.log(item)
    if (favorites.find((favoriteItem) => favoriteItem.name === item.name)) {
      const newCart = favorites.filter(items => items.name !== item.name);
      setFavorites(newCart); 
    } else {
      setFavorites((prevCartFavorites) => [...prevCartFavorites, item]);
      console.log(favorites)
    }
  };

  const minus = (item) => {
    if (cart.find((cartItem) => cartItem.name === item.name)) {
      cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.num -= 1

          if (cartItem.num < 1) {
            deleteFromCart(item.name)
          }
        }
      })
      setCart((prevCart) => [...prevCart])
      console.log(cart)
    }
  }

  const clearCart = () => {

    localStorage.removeItem('cartNotReg');
    setCart([]); // Обновляем состояние корзины
    window.location.reload();
  };

  const deleteFromCart= (name) => {

    const newCart = cart.filter(item => item.name !== name);
    setCart(newCart);
    localStorage.setItem('cartNotReg', JSON.stringify(newCart));
    window.location.reload();
  }

  return (
    <CartContext.Provider value={{ cart, favorites, endPrice, addToFavorites, minus, setEndPrice, addToCart, clearCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
