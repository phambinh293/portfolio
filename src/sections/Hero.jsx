import GradientSpheres from "../components/GradientSpheres";
import HeroExperoence from "../components/HeroExperoence";
import { useCursor } from "../components/CustomCursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const { setCursorActive } = useCursor();
  useGSAP(() => {
    gsap.from(".item1", {
      x: -400,
      duration: 2.2,
    });
    gsap.from(".item2", {
      x: -400,
      duration: 2.2,
    });
    gsap.from(".item3", {
      x: -400,
      duration: 2.2,
    });
  });
  return (
    <section
      id="hero"
      className="md:h-screen w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />
      <div className="w-full h-full md:mt-40 mt-20 grid lg:grid-cols-2 grid-cols-1">
        <div className="container relative w-full h-full col-span-1 ">
          <div className="ml-10 content md:mt-20 mt-0">
            <p className="item1 inline-block md:text-2xl text-base p-3 bg-green-700 rounded-3xl mb-1 md:mb-3">
              <span className="animate-bounce">👋</span>
              <span className="font-bold text-green-400">
                Hi There! I'm Quang Binh
              </span>
            </p>
            <h1 className="item2 font-bold md:text-4xl text-3xl">
              A{" "}
              <span
                className="font-bold text-green-400 "
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                FRONTEND DEVELOPER
              </span>
              . I Help Startups
              <span
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
                className="font-bold text-green-400"
              >
                {" "}
                Launch
              </span>{" "}
              And
              <span
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
                className="font-bold text-green-400"
              >
                {" "}
                Grow
              </span>{" "}
              Thrier Products
            </h1>
            <p className="item3 md:text-xl text-sm mt-3">
              I am a software engineer with more than four years of experience.
              Recognized as a practical and effective developer, experienced in
              leading cross-functional teams in a time-pressured setting to
              complete projects on schedule and within budget.
            </p>
            <div className="mt-10 flex gap-8">
              <div className="flex items-center rounded-2xl border-2 border-b-white-50">
                <img
                  src="./images/arrow-right-line.svg"
                  alt=""
                  className="w-6 h-6"
                />
                <a
                  href="#projects"
                  className="md:text-xl text-sm px-2 cursor-none"
                >
                  Resume
                </a>
              </div>
              <div className="flex items-center rounded-2xl border-2 border-b-white-50">
                <a
                  href="#projects"
                  className="md:text-xl text-sm px-2 cursor-none"
                >
                  Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex-center lg:col-span-1 md:col-span-1">
          <HeroExperoence />
        </div>
      </div>
      <div className="absolute md:gap-5 gap-1 bottom-20 right-[50%] md:block hidden">
        <img
          src="./images/scroll-to-bottom-line.svg"
          alt="scroll-to-bottom-line"
          className="w-10 animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;
