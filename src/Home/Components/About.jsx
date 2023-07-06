import { Link } from "react-router-dom";
import image from "../../assets/images/about.png";

const About = () => {
  return (
    <div className="About flex flex-col lg:flex-row items-center mb-20">
      <div className="content w-full lg:w-3/5" data-aos="fade-right">
        <h2 className="text-5xl font-extrabold tracking-tighter">
          About{" "}
          <span className="pr-0.5 bg-gradient-to-r from-orange-600 to-rose-600 text-transparent bg-clip-text underlined">
            Biztechs
          </span>
        </h2>
        <p className="text-gray-600 mt-4 mb-6">
          <strong>Biztechs</strong> has been incorporated with the aim of
          providing reliable I.T services and solutions. The business challenges
          have made the current market scenario very vulnerable. Corporate wants
          to have their extend presence globally using I.T solutions. This
          virtual market place have given the companies to make their presence
          on virtual shops on web. Such application on Personal Computers and
          Mobile Application have brought the Customer closer to the Vendors.
          Now the corporates are closer to the customer than before. We consider
          that more than technology, business needs solutions. <br />
          <br />
          <strong>Biztechs</strong> is an company that provides consulting and
          business solutions to its clients. We work as strategic partner with
          our clients to serve them innovative solutions that help manage
          business process. We focus on business continuity and provide robust,
          scalable, and reliable software solutions that are aimed to increase
          efficiency. Our state-of-the-art technologies help us to present
          productive solutions best suited to client's needs. Our skills on
          desktop and windows app includes Java, .net, Android Apps, to name a
          few.
        </p>
        <Link
          to="/about"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="px-6 py-2 bg-rose-600 hover:bg-gray-800 rounded-md text-white"
        >
          Learn More
        </Link>
      </div>
      <img
        src={image}
        alt=""
        className="w-full lg:w-2/5 h-full p-12"
        data-aos="fade-left"
      />
    </div>
  );
};

export default About;
