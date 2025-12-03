
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-yellow-500/20 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Fikra Store. جميع الحقوق محفوظة.</p>
        <div className="mt-4 flex justify-center items-center space-x-4 space-x-reverse">
          <a href="https://www.facebook.com/fikrastore" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">فيسبوك</a>
          <span>|</span>
          <a href="https://www.instagram.com/fikra.store" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">انستغرام</a>
          <span>|</span>
          <a href="https://www.tiktok.com/@fikrastore1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">تيك توك</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
