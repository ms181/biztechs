import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createSlug } from "../App";

import logo from "../assets/logo.png";
import {
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Menu,
  X,
} from "../assets/Icons";

const Navbar = ({ menu, pages }) => {
  const newMenu = [
    {
      title: "Home",
      _id: "Home",
      submenus: [],
    },
    ...menu,
    {
      title: "Portfolio",
      _id: "Portfolio",
      submenus: [],
    },
    {
      title: "Contact",
      _id: "Contact",
      submenus: [],
    },
  ];
  const [menuvisibility, setmenuvisibility] = useState(false);
  useEffect(() => {
    window.innerWidth > 768 ? setmenuvisibility(true) : null;
  }, []);
  const togglmenuvisibility = () => {
    setmenuvisibility((state) => !state);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <li key={item._id}>
        <a href={item.page}>{item.title}</a>
        {item.submenus && (
          <ul className="pl-4 mt-2">{renderMenuItems(item.submenus)}</ul>
        )}
      </li>
    ));
  };

  const gradients = [
    "from-orange-600 to-rose-600",
    "from-sky-600 to-blue-600",
    "from-pink-600 to-purple-600",
    "from-lime-600 to-emerald-600",
  ];
  const bigMenu = menu.filter((item) => {
    return item.submenus.length !== 0;
  });
  const [dropdown, setdropdown] = useState(
    bigMenu.map((item) => {
      return {
        [item.title]: false,
        ["hover" + item.title]: false,
      };
    })
  );

  return (
    <>
      <div className="fixed top-0 z-40 w-full left-0">
        <div className="Topbar w-full md:h-8 h-20 bg-gray-800 flex px-8 sm:px-20 items-center justify-between">
          <div className="left flex text-white text-xs gap-4 flex-col md:flex-row">
            <Link to="#" className="group flex items-center gap-2">
              <Phone className="stroke-white w-4 h-4" />
              +91 9391613386 | +91 7799039601
            </Link>
            <Link to="#" className="group flex items-center gap-2">
              <Mail className="stroke-white w-4 h-4" />
              asad@biztechs.in | abdullah@biztechs.in
            </Link>
          </div>
          <div className="right flex items-center gap-2">
            <Link to="#">
              <Instagram className="stroke-white w-4 h-4" />
            </Link>
            <Link to="#">
              <Twitter className="stroke-white w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="Navbar bg-white flex justify-between items-center px-20 h-16 relative border-b">
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to="/"
            className="h-[30%]"
          >
            <img src={logo} alt="biztechs logo" className="h-full" />
          </Link>
          <button className="md:hidden" onClick={togglmenuvisibility}>
            <Menu />
          </button>
          {menuvisibility && (
            <div className="flex md:flex-row flex-col md:w-auto w-screen md:bg-transparent fixed md:static md:justify-start top-0 left-0 h-screen overflow-scroll md:overflow-visible py-20 md:h-auto bg-white gap-2 items-center text-sm">
              <button
                className="md:hidden absolute right-8 top-8"
                onClick={togglmenuvisibility}
              >
                <X className="w-10 h-10" />
              </button>
              {newMenu.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="flex justify-center items-center flex-col w-full"
                  >
                    <Link
                      to={
                        item.submenus.length == 0
                          ? item.title.toLowerCase()
                          : "#"
                      }
                      onClick={() => {
                        window.scrollTo(0, 0);
                        window.innerWidth < 768 && item.submenus.length == 0
                          ? togglmenuvisibility()
                          : null;
                      }}
                      onMouseEnter={
                        item.submenus.length !== 0
                          ? () =>
                              setdropdown((prevState) => ({
                                ...prevState,
                                ["hover" + item.title]: true,
                              }))
                          : null
                      }
                      onMouseLeave={
                        item.submenus.length !== 0
                          ? () =>
                              setTimeout(
                                () =>
                                  setdropdown((prevState) => ({
                                    ...prevState,
                                    ["hover" + item.title]: false,
                                  })),
                                200
                              )
                          : null
                      }
                      className="px-3 py-1 inline-block hover:bg-gray-100 rounded-md text-gray-800 text-3xl font-bold md:text-sm md:font-normal"
                    >
                      {item.title}
                    </Link>
                    {item.submenus.length !== 0 ? (
                      <ul
                        className={`${
                          dropdown[item.title] ||
                          dropdown["hover" + item.title] ||
                          (Object.keys(dropdown).every(
                            (key) => key === item.title || !dropdown[key]
                          ) &&
                            Object.values(dropdown).every(
                              (value) => value === false
                            ))
                            ? "flex"
                            : "hidden"
                        } relative md:absolute my-4 md:my-0 sm:top-20 left-1/2 -translate-x-1/2 md:rounded-lg md:shadow-2xl p-8 bg-white w-full md:w-4/5 h-auto md:h-[calc(100vh-10rem)] flex-wrap gap-6 md:border border-gray-200 overflow-scroll no-scrollbar`}
                        onMouseEnter={() =>
                          setdropdown((prevState) => ({
                            ...prevState,
                            [item.title]: true,
                          }))
                        }
                        onMouseLeave={() =>
                          setdropdown((prevState) => ({
                            ...prevState,
                            [item.title]: false,
                          }))
                        }
                      >
                        {item.block ? (
                          <li className="w-full lg:w-1/3  bg-white rounded-md border border-gray-200 py-6 px-4">
                            <h3 className="text-lg px-3 font-bold pb-6">
                              {item.block.title}
                            </h3>
                            <div className="px-3">
                              <img
                                src={item.block.image}
                                className="w-full rounded-lg overflow-hidden"
                              />
                            </div>
                            <p className="pt-6 px-3">
                              {item.block.paragraph}
                              <br />
                              <br />
                              <Link
                                to={item.block.url.toLowerCase()}
                                onClick={() => {
                                  window.innerWidth < 768
                                    ? togglmenuvisibility()
                                    : null;
                                  window.scrollTo(0, 0);
                                }}
                                className="bg-rose-600 hover:bg-gray-800 px-3 py-1 text-white rounded"
                              >
                                Know More...
                              </Link>
                            </p>
                          </li>
                        ) : (
                          ""
                        )}
                        {item.submenus.length !== 0
                          ? item.submenus.map((submenu) => {
                              return (
                                <li
                                  key={submenu.title}
                                  className="w-auto flex-1 py-6 px-4 rounded-md border border-gray-300"
                                >
                                  <div className="text-lg px-3 font-bold">
                                    <p>{submenu.title}</p>
                                  </div>
                                  <div className="py-4 space-y-2">
                                    {submenu.submenus.map((j, i) => {
                                      const link =
                                        j.page !== undefined
                                          ? pages
                                              .map((i) =>
                                                j.page === i._id
                                                  ? createSlug(i.title)
                                                  : ""
                                              )
                                              .filter(Boolean)
                                              .join("")
                                          : null;
                                      return (
                                        <Link
                                          to={link}
                                          onClick={() => {
                                            link
                                              ? setdropdown((prevState) => ({
                                                  ...prevState,
                                                  [item.title]: false,
                                                }))
                                              : null;
                                            window.scrollTo(0, 0);
                                            window.innerWidth < 768
                                              ? togglmenuvisibility()
                                              : null;
                                          }}
                                          key={j.title}
                                          className="w-full text-gray-600 inline-flex h-12 rounded-lg px-2 border border-gray-300 bg-gray items-center justify-between gap-2 hover:bg-gray-300"
                                        >
                                          <div className="flex items-center gap-2">
                                            <p
                                              className={`rounded-md w-8 h-8 bg-gradient-to-br flex items-center justify-center text-white font-bold ${
                                                gradients[i % gradients.length]
                                              }`}
                                            >
                                              {i + 1}
                                            </p>
                                            <p className="sm:whitespace-nowrap">
                                              {j.title}
                                            </p>
                                          </div>
                                          {link ? (
                                            <ArrowRight className="ml-4 w-5 h-5" />
                                          ) : (
                                            <span className="w-2 h-full" />
                                          )}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
