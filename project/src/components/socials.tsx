import React, { useEffect, useRef, useState } from 'react';

const Example: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    "./Linkedin.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png",
  ];

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      const slideWidth = (slider.children[0] as HTMLElement).clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const resetAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    slideIntervalRef.current = setInterval(nextSlide, 3000);
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    resetAutoSlide();
    window.addEventListener("resize", () => goToSlide(currentSlide));

    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
      window.removeEventListener("resize", () => goToSlide(currentSlide));
    };
  }, []);

  return (
    <section id='socials' className='flex items-center justify-center text-white relative'>
    <div className="flex items-center">
      <button
        onClick={() => {
          prevSlide();
          resetAutoSlide();
        }}
        className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="w-full max-w-3xl overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out" ref={sliderRef}>
          {images.map((src, index) => (
            <img key={index} src={src} className="w-full flex-shrink-0" alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          nextSlide();
          resetAutoSlide();
        }}
        className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </section>
  );
};

export default Example;
