import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function WelcomeLoader() {
  const [hideLoader, setHideLoader] = useState(false);
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    const tl = gsap.timeline({
      onComplete: () => {
        // Ẩn loader sau animation
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => setHideLoader(true),
        });
      },
    });

    // Vẽ từng path bằng stroke-dasharray
    paths.forEach((path, i) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        i * 0.1 // delay nhẹ giữa từng ký tự
      );
    });
  }, []);

  if (hideLoader) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 800 200"
        className="w-[100%] md:w-[600px] h-auto ml-20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path
          class="cls-1"
          d="M30.32,104.25L0,5.23H8.75c7.34,23.76,23.91,78.5,26.41,90.1h.16c2.03-9.19,20-63.94,27.66-90.1h9.38c7.19,24.19,24.69,82.32,26.41,89.96h.16c3.44-14,21.72-66.34,29.22-89.96h8.59l-33.44,99.01h-9.69c-7.19-23.34-24.22-80.63-26.1-89.11h-.16c-2.81,12.87-19.69,64.5-27.5,89.11h-9.53Z"
        />
        <path
          class="cls-1"
          d="M148.29,69.73c.16,18.25,10.31,29.56,25.31,29.56s19.69-7.5,22.5-13.3h7.97c-3.28,9.34-11.56,19.94-30.78,19.94-23.75,0-32.97-18.53-32.97-36.49,0-20.23,11.1-37.62,33.91-37.62,24.06,0,31.72,18.81,31.72,32.11,0,1.98,0,3.96-.16,5.8h-57.51Zm49.54-6.22c-.16-14-8.59-25.04-23.91-25.04-16.1,0-23.44,10.18-25.16,25.04h49.07Z"
        />
        <path class="cls-1" d="M225.63,104.25V0h7.81V104.25h-7.81Z" />
        <path
          class="cls-1"
          d="M316.58,83.46c-3.75,12.45-12.81,22.49-30.32,22.49-19.53,0-33.44-13.15-33.44-36.78,0-19.38,11.41-37.34,34.38-37.34,19.85,0,27.97,12.73,29.38,22.63h-7.97c-2.34-8.2-8.28-15.98-21.56-15.98-16.56,0-25.94,12.73-25.94,30.41s8.75,30.41,25.16,30.41c11.41,0,18.28-5.23,22.35-15.84h7.97Z"
        />
        <path
          class="cls-1"
          d="M398.77,68.74c0,19.66-12.03,37.2-35.32,37.2-21.1,0-34.22-15.7-34.22-37.06,0-20.23,12.34-37.06,35-37.06,20.78,0,34.53,14.71,34.53,36.92Zm-61.26,.14c0,16.83,10,30.41,26.57,30.41s26.41-12.59,26.41-30.41c0-16.69-9.38-30.41-26.72-30.41s-26.25,13.44-26.25,30.41Z"
        />
        <path
          class="cls-1"
          d="M418.14,51.77c0-6.08,0-12.73-.16-18.25h7.66c.16,2.4,.47,8.49,.31,12.59,3.28-7.07,10.47-14.29,23.44-14.29,10.94,0,19.53,4.95,22.66,14,3.91-7.36,11.72-14,25.47-14,12.03,0,24.53,6.22,24.53,25.88v46.54h-7.81V58.56c0-9.48-3.75-19.8-18.28-19.8s-22.03,11.03-22.03,24.75v40.74h-7.66V58.7c0-10.33-3.44-19.94-17.81-19.94-15.16,0-22.5,12.16-22.5,26.59v38.9h-7.81V51.77Z"
        />
        <path
          class="cls-1"
          d="M549.39,69.73c.16,18.25,10.31,29.56,25.32,29.56s19.69-7.5,22.5-13.3h7.97c-3.28,9.34-11.56,19.94-30.78,19.94-23.75,0-32.97-18.53-32.97-36.49,0-20.23,11.09-37.62,33.91-37.62,24.06,0,31.72,18.81,31.72,32.11,0,1.98,0,3.96-.16,5.8h-57.51Zm49.54-6.22c-.16-14-8.59-25.04-23.91-25.04-16.1,0-23.44,10.18-25.16,25.04h49.07Z"
        />
      </svg>
    </div>
  );
}
