import React, { useEffect } from 'react';

const Company: React.FC = () => {
  const companyLogos: { name: string; src: string }[] = [
    {
      name: 'Google',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      name: 'Microsoft',
      src: './c5.png',
    },
    {
      name: 'ISRO',
      src: './c1.png',
    },
    {
      name: 'Amazon',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Intel',
      src: './c9.png',
    },
    {
      name: 'TCS',
      src: './tcs.png',
    },
    {
      name: 'Airtel',
      src: './c3.png',
    },
    {
      name: 'NVIDIA',
      src: './c4.png',
    },
    {
      name: 'Fiserv',
      src: './c8.png',
    },
    {
      name: 'IIT Roorkee',
      src: './c7.png',
  },
  {
    name: 'Reliance',
    src: 'https://up.yimg.com/ib/th/id/OIP.EYU40cLJ2Df91CDHdeWcGwHaEp?pid=Api&rs=1&c=1&qlt=95&w=186&h=116'
  }
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .marquee-inner {
        animation: marqueeScroll 10s linear infinite;
      }

      @keyframes marqueeScroll {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none py-8">
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

      {/* Marquee */}
      <div className="marquee-inner flex will-change-transform min-w-[200%]">
        <div className="flex items-center">
          {[...companyLogos, ...companyLogos].map((company, index) => (
            <img
              key={index}
              src={company.src}
              alt={company.name}
              className="h-12 w-auto mx-6"
              draggable={false}
              title={company.name}
            />
          ))}
        </div>
      </div>

      {/* Right Gradient */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default Company;
