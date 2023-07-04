import logo from "../assets/logo.png";
import { ArrowRight, Map, MapPin, Mail, Phone } from "../assets/Icons";

const Footer = () => {
  return (
    <div className="Footer w-full bg-gray-200">
      <div className="top flex flex-col lg:flex-row gap-12 py-12 px-12 sm:px-20">
        <div className="logo w-full lg:w-1/2">
          <img src={logo} alt="" className="h-8" />
          <p className="text-gray-600 mt-4 mb-6">
            Experience seamless efficiency and profitability with our
            comprehensive suite of services, including cutting-edge ERP systems,
            customized business solutions, mobile and web application
            development, and expert business consulting.
          </p>
          <a
            href="#"
            className="pl-6 pr-4 py-2 bg-rose-600 hover:bg-gray-800 rounded-md text-white inline-flex gap-1 items-center"
          >
            Contact <ArrowRight className="h-4" />
          </a>
        </div>
        <div className="links w-full lg:w-1/2 flex flex-col sm:flex-row lg:justify-center gap-12 sm:gap-20">
          <div className="group">
            <h4 className="text-xl text-gray-800 font-bold">Contact Us</h4>
            <ul className="space-y-4 py-6">
              <li className="text-gray-800 text-sm flex gap-6">
                <MapPin className="w-5 h-5 stroke-gray-800" />
                <span>
                  #10-3-282/2/2, 2nd Floor, <br /> Humayun Nagar,
                  <br /> Mehdipatnam, Hyderabad <br /> 500 028, Telangana,
                  India.
                </span>
              </li>
              <li className="text-gray-800 text-sm flex gap-6">
                <Map className="w-5 h-5 stroke-gray-800" />
                <span>USA UAE KSA</span>
              </li>
              <li className="text-gray-800 text-sm flex gap-6">
                <Mail className="w-5 h-5 stroke-gray-800" />
                <span>
                  asad@biztechs.in <br />
                  abdullah@biztechs.in
                </span>
              </li>
              <li className="text-gray-800 text-sm flex gap-6">
                <Phone className="w-5 h-5 stroke-gray-800" />
                <span>
                  +91 9391613386 <br />
                  +91 7799039601
                </span>
              </li>
            </ul>
          </div>
          <div className="group">
            <h4 className="text-xl text-gray-800 font-bold">Sitemap</h4>
            <ul className="space-y-4 py-6">
              <li className="text-gray-800 text-sm hover:underline">
                <a href="#">Home</a>
              </li>
              <li className="text-gray-800 text-sm hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="text-gray-800 text-sm hover:underline">
                <a href="#">Portfolio</a>
              </li>
              <li className="text-gray-800 text-sm hover:underline">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom grid place-items-center text-gray-800 py-4 border-t border-gray-300">
        Copyright © 2023 Biztechs | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
