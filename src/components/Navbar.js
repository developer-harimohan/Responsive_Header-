import React from "react";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);
  return (
    <>
      <header className="relative h-[100vh]">
        <nav className="navigation bg-white z-10 w-full md:px-3 lg:h-[13%] lg:px-[42px] h-[8%]  flex justify-between fixed shadow items-center px-[5px]">
          <div
            className="menu-icon text-[18px] lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className={`open-icon ${openMenu ? "hidden" : "block"} flex flex-col gap-[7px] w-[18px] h-[14px]`}>
              <div className="w-[18px]  border border-1 h-0 border-solid inline-block border-black bg-black"></div>
              <div className="w-[18px]  border border-1 h-0 border-solid inline-block border-black bg-black"></div>
              <div className="w-[18px]  border border-1 h-0 border-solid inline-block border-black bg-black"></div>
            </div>
            <div className={`close-icon ${openMenu ? "block" : "hidden"}`}>
              <IoMdClose />
            </div>
          </div>
          <div className={`logo left lg:w-[180px] lg:h-[55px] md:h-[38px] w-[128px] cursor-pointer h-[38px] ${openMenu ? "mr-auto ml-2" : ""}`}>
            <img src="/images/paytm_logo 1.png" alt="" className="w-full" />
          </div>
          <ul className="menu lg:flex gap-5  hidden cursor-pointer middle">
            <li className="menu-items font-semibold hover:text-blue-700 ">
              <Link to="/">Paytm for Consumer</Link>
            </li>
            <li className="menu-items font-semibold hover:text-blue-700 ">
              <Link to="/">Paytm for Business</Link>
            </li>
            <li className="menu-items font-semibold hover:text-blue-700 ">
              <Link to="/">Investors Relations</Link>
            </li>
            <li className="menu-items font-semibold hover:text-blue-700 ">
              <Link to="/"> Company</Link>
            </li>
            <li className="menu-items font-semibold hover:text-blue-700 ">
              <Link to="/"> Career</Link>
            </li>
          </ul>
          <div className={`right flex ${openMenu ? "hidden" : ""}`}>
            <a href="#" className="flex md:gap-2 justify-between items-center bg-[#00BAF2] rounded-[25px] md:w-[107px] md:h-[38px] md:py-[2px] md:px-[9px]
          w-[84px] h-[34px] gap-[5px] px-[6px]
          ">
              <span className="md:text-[15px] text-white font-semibold text-[10px]"> Sign in</span>
              <img src="/images/signup 1.png" alt="" className="w-[34px] h-[34px]" />
            </a>
          </div>
        </nav>
        {/* ---------mobile-navigation---- */}
        <ul
          className={`mobile-menu lg:hidden md:h-auto ${openMenu ? "flex" : "hidden"
            } cursor-pointer  absolute left-0 top-[8%] w-full h-[92%] bg-white text-black md:gap-[15px]   flex-col gap-[25px]  py-5 transition-3`}
        >
          <li className="menu-items font-semibold text-[17px] pl-[10px] md:pl-3 hover:text-blue-700">
            <Link to="/">Investors Relations</Link>
          </li>
          <li className="menu-items font-semibold text-[17px] pl-[10px] md:pl-3 hover:text-blue-700">
            <Link to="/">Company</Link>
          </li>
          <li className="menu-items font-semibold text-[17px] pl-[10px] md:pl-3 hover:text-blue-700">
            <Link to="/">Career</Link>
          </li>
        </ul>

      </header>
    </>
  );
};

export default Navbar;
