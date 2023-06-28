import image1 from "../../assets/images/hero/1.jpg";
import image2 from "../../assets/images/hero/2.jpg";
import image3 from "../../assets/images/hero/3.jpg";
import image4 from "../../assets/images/hero/4.jpg";

const Hero = () => {
  return (
    <div className="Hero relative flex flex-col">
      <div className="relative content text-center pt-16 pb-2 px-56 flex-1 before:content-[''] before:absolute before:top-10 before:right-40 before:w-40 before:h-40 before:bg-gradient-to-tr before:from-pink-600 before:to-indigo-600 before:rounded-full before:blur-2xl before:opacity-50 before:-z-10 after:content-[''] after:absolute after:bottom-16 after:left-40 after:w-40 after:h-40 after:bg-gradient-to-tr after:from-blue-600 after:to-cyan-600 after:rounded-full after:blur-2xl after:opacity-50 after:-z-10">
        <h1 className="text-6xl font-extrabold tracking-tighter">
          Unlock and Unleash Your Business Potential with{" "}
          <span className="pr-0.5 bg-gradient-to-l from-pink-600 to-blue-600 text-transparent bg-clip-text">
            BizTechs
          </span>
        </h1>
        <p className="text-gray-600 mt-4 mb-6">
          Experience seamless efficiency and profitability with our
          comprehensive suite of services, including cutting-edge ERP systems,
          customized business solutions, mobile and web application development,
          and expert business consulting.
        </p>
        <a
          href="#"
          className="px-6 py-2 bg-rose-600 hover:bg-gray-800 rounded-md text-white"
        >
          Contact Now
        </a>
      </div>
      {/* Images */}
      <div className="images">
        <svg
          className="w-full h-20 absolute z-10 fill-white"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" />
        </svg>
        <div className="flex w-screen h-full">
          <div className="group w-1/4 m-8 bg-black">
            <img
              src={image1}
              alt=""
              className="aspect-square w-full object-cover group-hover:opacity-20 duration-150"
            />
          </div>
          <img
            src={image2}
            alt=""
            className="w-1/4 aspect-square object-cover p-8"
          />
          <img
            src={image3}
            alt=""
            className="w-1/4 aspect-square object-cover p-8"
          />
          <img
            src={image4}
            alt=""
            className="w-1/4 aspect-square object-cover p-8"
          />
        </div>
        <svg
          className="w-full h-20 absolute bottom-0 z-10 fill-white transform rotate-180"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
