import React from 'react';

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`w-full inline-flex h-12 animate-shimmer items-center gap-2 justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 px-10 py-7 ${otherClasses}`}
    >
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </button>
  );
};

export default ShimmerButton;
