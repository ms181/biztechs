import { useParams } from "react-router-dom";
import image from "../assets/images/banner.jpg";
import { useEffect, useState } from "react";
import { createSlug } from "../App";

const Page = ({ pages }) => {
  const [data, setdata] = useState({});
  const params = useParams();
  const { page } = params;
  useEffect(() => {
    setdata(pages.find((i) => (page === createSlug(i.title) ? i : null)));
  }, [page, data]);

  return (
    <>
      {data !== null && data !== {} && data !== undefined ? (
        <div>
          <div className="relative Banner w-full sm:h-60 bg-gradient-to-r from-black to-gray-950 overflow-hidden px-20 py-12 sm:py-0 flex flex-col sm:flex-row items-center justify-between">
            <img
              src={image}
              alt=""
              className="w-full h-auto object-cover object-center absolute top-0 left-0 z-0 pointer-events-none opacity-10"
            />
            <div className="content w-full z-10">
              <h2
                data-aos="fade-up"
                className="text-6xl font-bold tracking-tighter pr-0.5 py-4 bg-gradient-to-r from-orange-600 to-rose-600 text-transparent bg-clip-text"
              >
                {data.title}
              </h2>
            </div>
            {window.innerWidth > 640 && (
              <img src={data?.image} className="z-10 w-52 rounded-lg" />
            )}
          </div>
          <div className="w-full content p-8 sm:p-20 space-y-12">
            {window.innerWidth < 640 && (
              <img src={data?.image} className="z-10 w-full rounded-lg" />
            )}
            {data.content?.length !== 0
              ? data.content?.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className="flex flex-col md:flex-row items-center w-full gap-16"
                    >
                      {item?.image !== undefined &&
                      (item?.imagepos == "left" ||
                        item?.imagepos == undefined) ? (
                        <img
                          src={item?.image}
                          className="w-full md:w-1/3 rounded-lg"
                        />
                      ) : null}
                      <div className="space-y-4 md:w-2/3">
                        <h2 className="text-3xl font-bold text-gray-800">
                          {item?.title}
                        </h2>
                        <h2 className="text-2xl font-medium text-gray-800">
                          {item?.subtitle}
                        </h2>
                        <p className="text-gray-600">{item?.paragraph}</p>
                        <ul className="flex flex-wrap gap-2">
                          {item?.list !== undefined
                            ? item?.list.map((i, key) => {
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
                        </ul>
                      </div>
                      {item?.image !== undefined &&
                      item?.imagepos == "right" ? (
                        <img
                          src={item?.image}
                          className="w-full md:w-1/3 rounded-lg"
                        />
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        <>404</>
      )}
    </>
  );
};

export default Page;
