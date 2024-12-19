import React from 'react';

const RunningText: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full h-16 bg-gray-900">
      <div className="absolute whitespace-nowrap animate-marquee text-white text-2xl font-bold">
        CYPHIL RAVEN MIDSAPAK &nbsp; CYPHIL RAVEN MIDSAPAK &nbsp;
      </div>
    </div>
  );
};

export default RunningText;
