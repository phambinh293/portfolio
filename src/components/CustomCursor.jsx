import { useEffect, useRef, createContext, useContext, useState } from 'react';
import gsap from 'gsap';

const CursorContext = createContext(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    console.warn('⚠️ useCursor must be used inside <CustomCursorProvider>');
  }
  return context;
};

export default function CustomCursorProvider({ children }) {
  const cursorRef = useRef(null);
  const innerDotRef = useRef(null);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const setCursorActive = (isActive) => {
    if (!innerDotRef.current) return;
    innerDotRef.current.classList.toggle('active', isActive);
  };

  return (
    <CursorContext.Provider value={{ setCursorActive, setCursorText }}>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <div
          ref={innerDotRef}
          className=" cursor-inner w-4 h-4 rounded-full flex items-center justify-center bg-white/10 text-white text-xs font-medium transition-all duration-300"
        ></div>

        {cursorText && (
          <span className="text-white md:text-xl mt-1 font-medium pointer-events-none">
            {cursorText}
          </span>
        )}
      </div>

      {children}
    </CursorContext.Provider>
  );
}
