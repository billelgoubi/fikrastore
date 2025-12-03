
import React from 'react';

const VideoPlaceholder: React.FC = () => {
  const videoUrl = "https://www.instagram.com/reel/DRpycWEjLxi/?igsh=Y2phMXd6dDh6N3M3";

  return (
    <div className="relative aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-yellow-500/20 group cursor-pointer border-2 border-yellow-400">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img 
          src="https://picsum.photos/seed/books/800/450" 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-20 rounded-full p-4 group-hover:bg-opacity-30 transition-all">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white mt-4 text-sm font-semibold">انقر للتشغيل على انستغرام</p>
        </div>
      </a>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const scrollToRegister = () => {
    document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-amber-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 leading-tight drop-shadow-lg">
          دورة إطلاق مشروع الكتب التفاعلية والوسائل التعليمية المغلفة حرارياً
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          حوّلي شغفك بالإبداع إلى مشروع مربح من منزلك. تعلمي كل أسرار الصناعة والتسويق في دورة واحدة متكاملة.
        </p>
        <div className="mt-12">
          <VideoPlaceholder />
        </div>
        <div className="mt-12">
          <button 
            onClick={scrollToRegister}
            className="bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/40"
          >
            سجّل الآن واستفد من الخصم
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
