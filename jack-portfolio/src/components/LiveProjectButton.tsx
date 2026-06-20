import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href, onClick, label = "Live Project" }) => {
  const className = "inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 text-center";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};
