import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
      style={{
        background: 'linear-gradient(135deg, #7E22CE 0%, #4C1D95 100%)',
        boxShadow: '0 4px 20px rgba(126, 34, 206, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
      }}
    >
      Contact Me
    </button>



  );
};
