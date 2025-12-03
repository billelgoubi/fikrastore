
import React from 'react';

const RegistrationSection: React.FC = () => {
  return (
    <section id="register-section" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">هل أنتِ مستعدة لبدء مشروع أحلامك؟</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          لا تفوتي الفرصة! المقاعد محدودة. تواصلي معنا الآن لحجز مقعدك وبدء رحلتك نحو النجاح.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="https://instagram.com/Selmakechkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5h.01m-1.5-.01h.01M10.5 10.5h.01m7.426 3.011a8.5 8.5 0 10-15.852 0C2.062 16.27 4.197 18 6.5 18c2.066 0 3.96-1.03 5.5-2.001 1.54 1.01 3.434 2.001 5.5 2.001 2.303 0 4.438-1.73 4.426-4.489z" /></svg>
            <span>سجلي عبر انستغرام</span>
          </a>
          <a 
            href="https://t.me/Selmakechkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-sky-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            <span>سجلي عبر تلغرام</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
