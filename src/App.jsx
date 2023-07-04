import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import sanityClient from "./Client";
import { useEffect, useState } from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Page from "./Pages/Page";
import Home from "./Home/Home.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    sanityClient
      .fetch(
        `[
          *[_type == "page"]{
            _id,
            title,
            "image": *[_id == ^.image.asset._ref][0].url,
            content[][]{
              title,
              subtitle,
              paragraph,
              list,
              "image": *[_id == ^.image.asset._ref][0].url,
              imagepos
            }
          },
          *[_type == "menu"] | order(_createdAt asc){
            _id,
            title,
            block{
              title,
              "image": *[_id == ^.image.asset._ref][0].url,
              paragraph,
              url,
            },
            submenus[]{
              title,
             "page": page._ref,
              submenus[]{
                title,
                "page": page._ref,
              }
            },
          },
          *[_type == "portfolio"] | order(_createdAt asc){
            _id,
            title,
            "image": *[_id == ^.image.asset._ref][0].url,
            grid[]{
              title,
              "image": *[_id == ^.image.asset._ref][0].url,
              url,
            },
             rows[]{
              "image": *[_id == ^.image.asset._ref][0].url,
              list,
            }
          },
        ]`
      )
      .then((data) => {
        setdata(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  AOS.init({
    offset: 20,
    delay: 100,
    duration: 400,
  });

  return (
    <div className="overflow-x-hidden w-screen h-auto relative">
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <div class="newtons-cradle">
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar
            menu={data[1]}
            pages={data[0].map((i) => {
              return { _id: i._id, title: i.title };
            })}
          />
          {/* Spacer for navbar */}
          <div className="main w-full h-36 md:h-24" />
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Home} path="/home" />
            <Route Component={() => <Page pages={data[0]} />} path="/:page" />
            <Route
              Component={() => <Portfolio data={data[2]} />}
              path="/portfolio"
            />
            <Route Component={Contact} path="/contact" />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

const createSlug = (string) => {
  return string
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, " ") // Replace multiple whitespaces with a single whitespace
    .trim() // Remove leading and trailing whitespaces
    .replace(/\s+/g, "-"); // Replace whitespaces with dashes
};

export default App;
export { createSlug };
