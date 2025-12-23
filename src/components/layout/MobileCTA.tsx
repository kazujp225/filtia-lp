import { useState, useEffect } from 'react';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t shadow-lg"
      style={{ borderColor: 'var(--color-line)' }}
    >
      <div className="flex gap-2 p-3">
        <a
          href="#contact"
          className="flex-1 btn-secondary text-center text-sm py-3"
        >
          資料請求
        </a>
        <a
          href="#contact"
          className="flex-1 btn-primary text-center text-sm py-3"
        >
          導入相談
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
