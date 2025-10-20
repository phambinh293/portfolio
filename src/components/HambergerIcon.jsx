import { useEffect, useRef } from "react";
import gsap from "gsap";

const POS = {
  1: { cx: 12, cy: 12 },
  2: { cx: 24, cy: 12 },
  3: { cx: 36, cy: 12 },
  4: { cx: 12, cy: 24 },
  5: { cx: 24, cy: 24 },
  6: { cx: 36, cy: 24 },
  7: { cx: 12, cy: 36 },
  8: { cx: 24, cy: 36 },
  9: { cx: 36, cy: 36 },
};

const HambergerIcon = ({ active }) => {
  const svgRef = useRef(null);
  const middleCross =
    'circle[data-i="1"], circle[data-i="3"], circle[data-i="5"], circle[data-i="7"], circle[data-i="9"]';
  const others =
    'circle[data-i="2"], circle[data-i="4"], circle[data-i="6"], circle[data-i="8"]';

  useEffect(() => {
    if (active) {
      // Khi mở sidebar
      gsap.to(others, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(middleCross, {
        stroke: "#ffffff",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(svgRef.current, {
        rotate: 90,
        transformOrigin: "center center",
        duration: 0.45,
        ease: "expo.inOut",
      });
    } else {
      gsap.to("circle", {
        opacity: 1,
        stroke: "#ffffff",
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(svgRef.current, {
        rotate: 0,
        duration: 0.45,
        ease: "expo.inOut",
      });
    }
  }, [active]);

  return (
    <div className="inline-block  select-none">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48"
        height="48"
        className="transition-all duration-300"
      >
        {Object.entries(POS).map(([i, { cx, cy }]) => (
          <circle
            key={i}
            data-i={i}
            cx={cx}
            cy={cy}
            r={i === "5" ? "3.5" : "3"}
            stroke="#ffffff"
            fill="none"
            strokeWidth="1.6"
          />
        ))}
      </svg>
    </div>
  );
};

export default HambergerIcon;
