import { useGSAP } from "@gsap/react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".title", { opacity: 0, x: -400, duration: 1 })
      .from(".subtitle", { opacity: 0, x: -400, duration: 1 }, "-=0.5")
      .from(
        ".moreinfo",
        { opacity: 0, x: -400, duration: 1, stagger: 0.2 },
        "-=0.5"
      );
    gsap.utils.toArray(".img-about").forEach((cls, i) => {
      gsap.from(cls, {
        x: 400,
        opacity: 0,
        duration: 1,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <section id="about" className="w-full flex-center relative">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="w-full  relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="About Me"
            number="01"
            text="Passionate Creator, Lifelong Learner"
          />
        </div>
        <div className="md:mt-20 mt-10 md:grid flex grid-cols-4">
          <div
            className="md:col-span-2 col-span-4 text-start md:p-20 p-10 flex-center flex-col md:tex"
          >
            <h1 className="text-white md:text-2xl text-xl font-medium leading-relaxed">
              I'm Pham Quang Binh, a Frontend Developer with a passion for
              breathing life into code to create highly interactive websites and
              web applications.
            </h1>

            <p className="mt-4 text-white text-sm md:text-xl text font-light leading-relaxed">
              My academic journey has equipped me with a solid foundation, and I
              am now eager to apply my skills to real-world projects.
            </p>

            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              I enjoy solving UI challenges, optimizing user experience, and
              always strive to write code that is not only functional but also
              clean and maintainable.
            </p>
          </div>
          <div className="col-span-2 justify-center sm:scale-3d md:flex items-center hidden">
            <img
              alt="book"
              className="inline-block md:w-2xl w-xl absolute img-about z-10"
              src="./images/ab-book.svg"
            />
            <img
              alt="flower"
              className="inline-block md:w-2xl w-xl absolute img-about z-12"
              src="./images/ab-flower.svg"
            />
            <img
              alt="laptop"
              className="inline-block md:w-2xl w-xl absolute img-about z-10"
              src="./images/ab-laptop.svg"
            />
            <img
              alt="people"
              className="inline-block md:w-2xl w-xl absolute img-about z-10"
              src="./images/ab-people.svg"
            />
            <img
              alt="slide1"
              className="inline-block md:w-2xl w-xl absolute img-about z-10"
              src="./images/ab-slide1.svg"
            />
            <img
              alt="slide3"
              className="inline-block md:w-2xl w-xl absolute img-about z-10"
              src="./images/ab-slide3.svg"
            />
            <img
              alt="table"
              className="inline-block md:w-2xl w-xl absolute img-about z-10"
              src="./images/ab-table.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
