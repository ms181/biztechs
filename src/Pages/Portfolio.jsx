import { Link } from "react-router-dom";
import image from "../assets/images/banner.jpg";
import { ArrowRight } from "../assets/Icons";

const Portfolio = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="relative Banner w-full h-60 bg-gradient-to-r from-black to-gray-950 overflow-hidden px-20 flex items-center justify-between">
        <img
          src={image}
          alt=""
          className="w-full h-auto object-cover object-center absolute left-0 z-0 pointer-events-none opacity-10"
        />
        <div className="content flex justify-between items-center w-full z-10">
          <h2
            className="text-5xl font-bold tracking-tighter text-white"
            data-aos="fade-up"
          >
            Our{" "}
            <span className="pr-0.5 bg-gradient-to-r from-orange-600 to-rose-600 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>
        </div>
      </div>
      <div className="w-full content p-20 space-y-12">
        {data.map((item) => {
          return (
            <div key={item._id}>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              {item.grid ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-8 py-8 w-full">
                  {item.grid.map((block) => {
                    return (
                      <div className="group w-full hover:shadow-2xl p-4 border border-gray-300 rounded-lg hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 cursor-pointer">
                        <img
                          src={block.image}
                          className="shadow-lg group-hover:shadow-2xl w-full rounded-md border border-gray-300 mb-4"
                          alt=""
                        />
                        <Link
                          to={block.url}
                          target="_blank"
                          className="text-lg font-bold text-gray-800 group-hover:text-white flex justify-between items-center"
                        >
                          {block.title}
                          <ArrowRight className="shadow-lg stroke-white w-10 h-10 p-2.5 rounded-full bg-gradient-to-br from-orange-600 to-red-600 group-hover:from-white group-hover:to-white group-hover:stroke-gray-800 hover:stroke-white  hover:from-gray-900 hover:to-gray-900" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {item.rows ? (
                <div className="flex flex-col gap-8 py-8 w-full">
                  {item.rows.map((row, i) => {
                    return (
                      <div
                        className={`group w-full hover:shadow-2xl p-4 border border-gray-300 rounded-lg cursor-pointer flex px-20 py-10 gap-20 ${
                          i % 2 && window.innerWidth > 768
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                        } flex-col`}
                      >
                        <img
                          src={row.image}
                          className="w-full md:w-1/3 object-contain"
                          alt=""
                        />
                        <div className="w-full md:w-2/3 flex flex-wrap gap-2">
                          {row?.list !== undefined
                            ? row?.list.map((i, key) => {
                                return (
                                  <div
                                    key={key}
                                    className="text-gray-600 inline-flex h-auto py-2 rounded-lg pl-2 pr-8 border border-gray-300 bg-gray items-center gap-2"
                                  >
                                    <span className="rounded-md w-8 h-8 bg-gradient-to-br from-orange-600 to-rose-600 flex items-center justify-center text-white font-bold">
                                      {key + 1}
                                    </span>
                                    <div className="">
                                      <span>{i}</span>
                                    </div>
                                  </div>
                                );
                              })
                            : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
