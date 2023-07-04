import About from "./Components/About";
import Banner from "./Components/Banner";
import Competencies from "./Components/Competencies";
import Hero from "./Components/Hero";
import Introduction from "./Components/Introduction";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="px-20">
        <Introduction />
        <About />
      </div>
      <Banner />
      <div className="px-20">
        <Competencies />
      </div>
    </div>
  );
};

export default Home;
