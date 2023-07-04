import image from "../../assets/images/banner.jpg";
import { ArrowRight } from "../../assets/Icons";
const Banner = () => {
  return (
    <div className="relative Banner w-full md:h-80 py-16 bg-gradient-to-r from-black to-gray-950 overflow-hidden px-8 md:px-20 flex items-center justify-between">
      <img
        src={image}
        alt=""
        className="w-full h-auto object-cover object-center absolute left-0 z-0 pointer-events-none opacity-10"
      />
      <div className="content flex flex-col gap-8 md:gap-0 md:flex-row justify-between md:items-center w-full z-10">
        <h2
          className="text-5xl font-bold tracking-tighter text-white"
          data-aos="fade-up"
        >
          We Have Over <br />
          <span className="pr-0.5 bg-gradient-to-r from-orange-600 to-rose-600 text-transparent bg-clip-text">
            20 Years
          </span>{" "}
          Of Experience
        </h2>
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter text-white"
          data-aos="fade-up"
        >
          <span className="pr-0.5 bg-gradient-to-r from-orange-600 to-rose-600 text-transparent bg-clip-text text-6xl">
            500+
          </span>
          <br />
          <span className="flex items-center gap-4">
            Projects Completed <ArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
