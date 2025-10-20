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
    <section
      id="about"
      className="w-full flex-center relative"
    >
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="w-full container relative z-10 md:mt-20 mt-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-screen ">
          <div className="lg:col-span-2 md:col-span-2 col-span-1 flex flex-col  place-content-center items-center md:items-start md:text-left max-w-[600px]"
          >
            <h1 className="title md:text-2xl text-xl">
              I'm Pham Quang Binh, a Frontend Developer with a passion for
              breathing life into code to create highly interactive websites and
              web applications. My academic journey has equipped me with a solid
              foundation, and I am now eager to apply my skills to real-world
              projects.
            </h1>
            <p className="subtitle mt-5 md:text-xl text-sm">
              I enjoy solving UI challenges, optimizing user experience, and
              always strive to write code that is not only functional but also
              clean and maintainable.
            </p>
            <div className="mt-10 moreinfo flex items-center">
              <img src="./images/link.svg" alt="" className="w-4 h-4 " />
              <a
                href="https://drive.google.com/file/d/1zKsC_PfP_r05nJUuKkKg2TtfWx0WamKK/view?usp=drive_link"
                target="_blank"
                className="mx-1 md:text-white"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2  hidden lg:flex flex-col  place-content-center items-center md:items-start md:text-left side-image ">
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
