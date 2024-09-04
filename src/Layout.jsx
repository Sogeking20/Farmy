import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

const Layout = ({ children }) => {
  const [lang, setLang] = useState("en");

  const changeLang = (lang) => {
    setLang(lang);
  };

  return (
    <div>
      <LangContext.Provider value={{ lang, changeLang }}>
        <Header />
        <main className="pt-[103px]">{children}</main>
        <Footer />
      </LangContext.Provider>
    </div>
  );
};

export default Layout;
