import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from './CartContext';

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

const Layout = ({ children }) => {
  const [lang, setLang] = useState("en");

  const changeLang = (lang) => {
    setLang(lang);
  };

  return (
      <LangContext.Provider value={{ lang, changeLang }}>
        <CartProvider>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </CartProvider>
      </LangContext.Provider>
  );
};

export default Layout;
