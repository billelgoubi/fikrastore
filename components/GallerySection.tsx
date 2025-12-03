
import React from 'react';

const GallerySection: React.FC = () => {
  const images = [
    "https://i.imgur.com/X9Oi6DQ.jpeg",
    "https://i.imgur.com/27sb98y.jpeg",
    "https://i.imgur.com/FcRYTPk.jpeg",
    "https://i.imgur.com/c2e35jK.jpeg",
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">من إبداعات طالباتنا</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">أمثلة لما يمكنكِ صناعته بعد إتمام الدورة.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div key={index} className="group aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-yellow-500/30 hover:border-yellow-500/80 transition-all duration-300">
              <img 
                src={src} 
                alt={`عمل إبداعي ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
