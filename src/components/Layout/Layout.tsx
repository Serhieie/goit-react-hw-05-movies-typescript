import React from 'react';
import { Header } from './Header.tsx';
import { Main } from './Main.tsx';
import { Footer } from './Footer.tsx';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
