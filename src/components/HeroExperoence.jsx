import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroExperoence = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(".box");

        gsap.fromTo(
            boxes,
            {
                opacity: 0,
                scale: 0.8,
                x: 200,
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                rotation: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.15, // hiệu ứng từng ảnh một
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="relative flex justify-center">
            <img alt="Monitor" className="inline-block md:w-2xl w-xl absolute box box3 z-10" src="./images/monitor.svg" />
            <img alt="Laptop" className="inline-block md:w-2xl w-xl absolute box box2 z-12" src="./images/laptop.svg" />
            <img alt="Phone" className="inline-block md:w-2xl w-xl absolute box box7 z-10" src="./images/phone.svg" />
            <img alt="Background" className="inline-block md:w-2xl w-xl absolute box box1 z-10" src="./images/bg.svg" />
            <img alt="Car" className="inline-block md:w-2xl w-xl absolute box box1 z-10" src="./images/car.svg" />
            <img alt="Music1" className="inline-block md:w-2xl w-xl absolute box box4 z-13" src="./images/music1.svg" />
            <img alt="Music2" className="inline-block md:w-2xl w-xl absolute box box5 z-10" src="./images/music2.svg" />
            <img alt="Music3" className="inline-block md:w-2xl w-xl absolute box box6 z-10" src="./images/music3.svg" />
            <img alt="Robot" className="inline-block md:w-2xl w-xl absolute box box8 z-10" src="./images/robot.svg" />
        </section>
    );
};

export default HeroExperoence;
