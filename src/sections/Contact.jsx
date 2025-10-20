import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="flex-center md:p-0 px-5 relative">
      <div className="w-full h-full container mt-10">
        <TitleHeader
          title="Contact Me"
          number="04"
          text="Let's collaborate on tailored, sustainable solutions"
        />
        <div className="">
          <div className="w-full flex justify-center">
            <div className="lg-w[50%] md:w-[70%] w-full md:order-none order-1 relative md:p-10 p-0 z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
``