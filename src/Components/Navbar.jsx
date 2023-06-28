import logo from "../assets/logo.png";
import {
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Twitter,
} from "../assets/Icons";
import { useState } from "react";

const Navbar = () => {
  const [productsSubmenu, setHoverProducts] = useState(false);
  const [servicesSubmenu, setHoverServices] = useState(false);
  const [hoverProductsSubMenu, setHoverProductsSubMenu] = useState(false);
  const [hoverServicesSubMenu, setHoverServicesSubMenu] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <div className="Topbar w-full h-8 bg-gray-800 flex px-20 items-center justify-between">
        <div className="left flex text-white text-xs gap-4">
          <a href="#" className="group flex items-center gap-2">
            <Phone className="stroke-white w-4 h-4" />
            +91 9391369506
          </a>
          <a href="#" className="group flex items-center gap-2">
            <Mail className="stroke-white w-4 h-4" />
            info@arasmotech.com
          </a>
        </div>
        <div className="right flex items-center gap-2">
          <a href="#">
            <Instagram className="stroke-white w-4 h-4" />
          </a>
          <a href="#">
            <Twitter className="stroke-white w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="Navbar bg-white flex justify-between items-center px-20 h-16 relative border-b">
        <a href="#" className="h-[30%]">
          <img src={logo} alt="biztechs logo" className="h-full" />
        </a>
        <div className="flex gap-2 items-center text-sm">
          <a
            href="#"
            className="px-3 py-1 hover:bg-gray-100 rounded-md text-gray-800 flex gap-1 items-center"
          >
            Home
          </a>
          <a
            href="#"
            className="px-3 py-1 hover:bg-gray-100 rounded-md text-gray-800 flex gap-1 items-center"
          >
            About
          </a>
          <a
            href="#"
            onMouseEnter={() => setHoverServices(true)}
            onMouseLeave={() => setTimeout(() => setHoverServices(false), 200)}
            className="px-3 pr-2 py-1 hover:bg-gray-100 rounded-md text-gray-800 flex gap-1 items-center"
          >
            Services <ChevronDown className="h-4 w-4 mt-0.5" />
            <ul
              className={`${
                (servicesSubmenu || hoverServicesSubMenu) &&
                !(productsSubmenu || hoverProductsSubMenu)
                  ? "flex"
                  : "hidden"
              } z-2 absolute top-20 left-1/2 -translate-x-1/2 rounded-lg shadow-2xl p-8 bg-white w-[64rem] gap-6 border border-gray-200`}
              onMouseEnter={() => setHoverServicesSubMenu(true)}
              onMouseLeave={() => setHoverServicesSubMenu(false)}
            >
              <li className="w-1/3 bg-white py-6 px-4 rounded-md border border-gray-200">
                <a href="#" className="text-lg px-3 font-bold">
                  ERP Consulting
                </a>
                <ul className="py-4">
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Business Analysis</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Quality Analysis</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">MS Dynamics AX</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">MS Dynamics GP</a>
                  </li>
                </ul>
              </li>
              <li className="w-1/3 bg-white py-6 px-4 rounded-md border border-gray-200">
                <a href="#" className="text-lg px-3 font-bold">
                  Application Development
                </a>
                <ul className="py-4">
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Web Applications</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Desktop Applications</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Web Services</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Mobile Applications</a>
                  </li>
                </ul>
              </li>
              <li className="w-1/3 bg-white py-6 px-4 rounded-md border border-gray-200">
                <a href="#" className="text-lg px-3 font-bold">
                  Digital Marketing
                </a>
                <ul className="py-4">
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">SEO &amp; SMM</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Pay Per Click</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Adwords</a>
                  </li>
                </ul>
              </li>
            </ul>
          </a>
          <a
            href="#"
            onMouseEnter={() => setHoverProducts(true)}
            onMouseLeave={() => setTimeout(() => setHoverProducts(false), 200)}
            className="productsSubmenuToggle px-3 pr-2 py-1 hover:bg-gray-100 rounded-md text-gray-800 flex gap-1 items-center group"
          >
            Products <ChevronDown className="h-4 w-4 mt-0.5" />
            <ul
              className={`${
                !(servicesSubmenu || hoverServicesSubMenu) &&
                (productsSubmenu || hoverProductsSubMenu)
                  ? "flex"
                  : "hidden"
              } z-2 absolute top-20 left-1/2 -translate-x-1/2 rounded-lg shadow-2xl p-8 bg-white w-[64rem] gap-6 border border-gray-200`}
              onMouseEnter={() => setHoverProductsSubMenu(true)}
              onMouseLeave={() => setHoverProductsSubMenu(false)}
            >
              <li className="w-1/3 bg-white rounded-md border border-gray-200 py-6 px-4">
                <img src={logo} className="h-6 px-3" />
                <p className="pt-6 px-3">
                  Arasmo EBS and other integrated product of Arasmo has a wide
                  range of industry vertical fitment giving <br />
                  <br />
                  <a
                    href="#"
                    className="bg-rose-600 hover:bg-gray-800 px-3 py-1 text-white rounded"
                  >
                    Read More...
                  </a>
                </p>
              </li>
              <li className="w-1/3 bg-white py-6 px-4 rounded-md border border-gray-200">
                <a href="#" className="text-lg px-3 font-bold">
                  Cloud
                </a>
                <ul className="py-4">
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Arasmo EBS</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Ecommerce with EBS</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Saral Accounting</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Point Of Sales</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Hotel Apartment Management System</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">School &amp; College ERP</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Project Management</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">HR &amp; Payroll</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Taxi &amp; Cabs ERP</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Pharma ERP</a>
                  </li>
                </ul>
              </li>
              <li className="w-1/3 bg-white py-6 px-4 rounded-md border border-gray-200">
                <a href="#" className="text-lg px-3 font-bold">
                  On Premise
                </a>
                <ul className="py-4">
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Xerts EBS</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Cafe &amp; Restaurant System</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Laundry Management System</a>
                  </li>
                  <li className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-md">
                    <a href="#">Point Of Sales</a>
                  </li>
                </ul>
              </li>
            </ul>
          </a>
          <a
            href="#"
            className="px-3 py-1 hover:bg-gray-100 rounded-md text-gray-800 flex gap-1 items-center"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="ml-3 px-4 py-1.5 bg-rose-600 hover:bg-gray-800 rounded-md text-white flex gap-1 items-center"
          >
            Contact <ArrowRight className="h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
