const Footer = () => {
  return (
    <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">
      <div>
        <img
          src="/images/logo-nobg.png"
          alt="logo"
          className="w-9 h-9 object-cover object-center"
        />
      </div>
      <div className="flex items-center md:gap-16 gap-8">
        <div className=" hover:-translate-y-5 transition-all duration-700">
          <a 
          href="https://www.facebook.com/PhamBinh293/" 
          target="_blank" 
           className="cursor-none" 
          >
            <img src="../images/fb.svg" className="md:size-10 size-8" />
          </a>
        </div>
        <div className=" hover:-translate-y-5 transition-all duration-700">
          <a
            href="https://www.linkedin.com/in/binh-pham-quang-027675388"
            target="_blank"
             className="cursor-none"           
          >
            <img src="../images/linkedin.svg" className="md:size-10 size-8" />
          </a>
        </div>
      </div>
      <p className="font-regular md:text-lg text-sm">
        2025 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
