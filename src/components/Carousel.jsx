import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { slides } from "../contants";
import { useCursor } from "./CustomCursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const { setCursorActive, setCursorText } = useCursor();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useGSAP(() => {
    if (!sliderRef.current) return;

    gsap.from(sliderRef.current, {
      x: "100vw",
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true, // chỉ trigger 1 lần
      },
      onComplete: () => setHasAnimatedIn(true), // đánh dấu đã animate xong
    });
  }, []);
  useEffect(() => {
    if (!sliderRef.current || !hasAnimatedIn) return;

    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 63}vw`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide, hasAnimatedIn]);

  return (
    <div className="relative w-full">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh] overflow-hidden">
        {/* Gradient overlay */}
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20 pointer-events-none"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20 pointer-events-none"></div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="carousel flex w-max lg:h-[60vh] md:h-[40vh] h-[60vh] items-start  gap-[3vw] relative"
        >
          {slides.map((slide, index) => (
            <div
              className="slider-item w-[60vw] h-full flex-none relative md:translate-x-40 translate-x-10 "
              key={index}
            >
              <a
                href={slide.src}
                target="_blank"
                className="relative block h-[80%]"
                onMouseEnter={() => {
                  setCursorActive(true);
                  setCursorText("View Source");
                }}
                onMouseLeave={() => {
                  setCursorActive(false);
                  setCursorText("");
                }}
              >
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-full object-cover object-center"
                />

                {/* Overlay chỉ hiển thị trên màn nhỏ */}

                <div className="absolute top-2 right-2 bg-white/80 text-xl text-black px-2 py-1 rounded md:hidden">
                  🔗 Source
                </div>
              </a>

              <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
                <div className="w-full h-full flex justify-between items-center">
                  <div className="flex-center gap-2">
                    <p className="md:text-2xl text-white-50 opacity-80">
                      {index + 1}.
                    </p>
                    <p className="md:text-2xl text-white-50 opacity-80">
                      {slide.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-none group inline-flex items-center gap-2 px-4 py-2  rounded-2xl border-2 border-b-white-50 hover:text-white transition-all duration-300 shadow-md"
                      onMouseEnter={() => {
                        setCursorActive(true);
                        setCursorText("View Demo");
                      }}
                      onMouseLeave={() => {
                        setCursorActive(false);
                        setCursorText("");
                      }}
                    >
                      <p className="md:text-lg text-sm hidden md:block">Demo</p>
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow"
                        className="md:w-6 md:h-6 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5 relative z-30">
        <button
          onClick={prevSlide}
          className="rounded-full cursor-none bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center z-30"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full cursor-none bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center z-30"
        >
          <img src="/images/CaretRight.svg" alt="Right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
