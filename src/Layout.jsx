import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        <main className='md:pt-[153px]'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;