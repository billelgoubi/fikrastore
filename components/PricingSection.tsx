
import React from 'react';

const PricingSection: React.FC = () => {
  const scrollToRegister = () => {
    document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl shadow-2xl shadow-yellow-500/20 p-8 md:p-12 w-full max-w-2xl text-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl font-extrabold">عرض خاص لا يعوّض!</h2>
          <p className="mt-4 text-2xl font-bold bg-rose-500 text-white py-2 px-4 rounded-md inline-block">
            خصم 25% لفترة محدودة
          </p>
          <div className="my-8">
            <p className="text-2xl text-rose-900/70 line-through decoration-2">السعر الأصلي: 12300 دج</p>
            <p className="text-5xl md:text-6xl font-black mt-2">فقط بـ 9200 دج</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">طرق الدفع المتاحة:</h3>
            <div className="flex justify-center items-center space-x-4 space-x-reverse text-lg font-semibold">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg">بريدي موب</span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg">CCP</span>
            </div>
             <p className="mt-4 text-yellow-900/80">للحصول على معلومات الدفع، يرجى التواصل معنا عبر انستغرام أو تلغرام.</p>
          </div>
           <button 
            onClick={scrollToRegister}
            className="mt-10 bg-white text-yellow-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            أريد التسجيل الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
