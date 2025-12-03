
import React from 'react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-amber-50 py-4 border-b border-amber-200">
      <div className="container mx-auto px-6 flex justify-center items-center">
        <img src={LOGO_URL} alt="Fikra Store Logo" className="h-24 w-auto" />
      </div>
    </header>
  );
};

export default Header;
