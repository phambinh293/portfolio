import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import Carousel from "../components/Carousel";

const Projects = () => {
  return (
    <section className="w-full flex-center relative" id="projects">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="w-full  relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="My PROJECTS"
            number="03"
            text="Check my recent project below for your Goal"
          />
        </div>
        <div className="md:mt-20 mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
