
import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-amber-50 p-6 rounded-xl border border-yellow-500/20 shadow-lg hover:border-yellow-500/50 transition-all duration-300 text-center">
    <div className="flex justify-center items-center h-16 w-16 mx-auto mb-4 rounded-full bg-yellow-400 text-gray-900">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-yellow-500 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>,
      title: 'تصميم إبداعي',
      description: 'تعلمي أسرار تصميم الكتب التفاعلية الجذابة التي تخطف أنظار الأطفال وأولياء الأمور.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3a2 2 0 00-2 2v1m16 0V5a2 2 0 00-2-2h-1m-4 16l2 2 4-4" /></svg>,
      title: 'جودة واحترافية',
      description: 'إتقان تقنيات التغليف الحراري لإنتاج وسائل تعليمية متينة وعالية الجودة تدوم طويلاً.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
      title: 'استراتيجيات التسويق',
      description: 'اكتساب المهارات اللازمة لتسويق منتجاتك بفعالية عبر وسائل التواصل الاجتماعي والوصول لآلاف العملاء.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'مشروع مربح',
      description: 'تحويل هوايتك وشغفك إلى مصدر دخل حقيقي ومستدام يساعدك على تحقيق استقلاليتك المالية.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ماذا ستتعلمين في هذه الدورة؟</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">كل ما تحتاجينه لبدء مشروعك من الصفر والوصول إلى الاحترافية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
