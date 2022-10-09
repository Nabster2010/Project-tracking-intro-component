import "./App.css";
import logo from "/images/logo.svg";
import hero from "/images/illustration-devices.svg";
import menu from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" relative w-screen overflow-hidden min-h-screen px-4 md:px-32 pt-8 pb-16  text-VeryDarkBlue bg-white  dark:bg-gray-600 dark:text-white">
      <div className="w-[50vw] h-[50vh] bg-LightGrayishBlue absolute top-0 right-0 rounded-bl-[30%] "></div>
      <header className="relative z-10">
        <nav className=" flex font-BarlowCondensed  tracking-wider text-[18px] justify-between items-center ">
          <img src={logo} alt="logo" />
          <ul className="hidden md:flex justify-center items-end gap-8 uppercase">
            <li className="hover:underline transition">
              <a href="#">Product</a>
            </li>
            <li className="hover:underline transition">
              <a href="#">Features</a>
            </li>
            <li className="hover:underline transition">
              <a href="#">Pricing</a>
            </li>
            <span className="w-1.5 h-1.5  bg-GrayishBlue rounded-full self-center  "></span>
            <li className="text-GrayishBlue hover:underline transition">
              <a href="#">Login</a>
            </li>
          </ul>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <img src={close} alt="" /> : <img src={menu} alt="" />}
          </button>
        </nav>
      </header>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } animate-slide-down md:hidden z-20 font-BarlowCondensed tracking-widest absolute top-24 left-4 right-4 shadow-2xl rounded-sm uppercase bg-white`}
      >
        <ul className="flex flex-col px-4 justify-center items-center gap-8 py-8 font-bold">
          <li className=" hover:underline transition">
            <a href="#">Product</a>
          </li>
          <li className="hover:underline transition">
            <a href="#">Features</a>
          </li>
          <li className="hover:underline transition">
            <a href="#">Pricing</a>
          </li>
          <li className="border-b block w-full hover:underline transition "></li>
          <li className="text-GrayishBlue hover:underline transition ">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>

      <main className="md:mt-24 mt-16 relative z-10 flex flex-col-reverse gap-24 md:gap-0 md:flex-row justify-center md:items-center  font-BarlowCondensed">
        <article className="md:min-w-[50%] animate-slide-tr">
          <div className="flex gap-3">
            <span className=" text-white bg-black py-0.3 px-2.5 rounded-lg font-bold text-sm">
              NEW
            </span>
            <p className="tracking-[4px] text-GrayishBlue text-sm uppercase">
              Monograph Dashboard
            </p>
          </div>
          <h1 className="text-6xl  font-bold uppercase max-w-[20ch] mt-4">
            Powerful insights into your team
          </h1>
          <p className="mt-6 text-DarkGrayishBlue tracking-wide font-Barlow max-w-[30ch]">
            Project planning and time tracking for agile teams
          </p>
          <div className="flex mt-12 justify-between md:gap-6 ">
            <button className="bg-Red whitespace-nowrap hover:bg-Red/70  text-white font-BarlowCondensed font-bold uppercase tracking-wider md:py-3 py-2 px-8 md:px-12 rounded-md transition ">
              Schedule a demo
            </button>
            <button className=" whitespace-nowrap  text-GrayishBlue font-BarlowCondensed  uppercase tracking-widest md:tracking-[4px]  px-8 py-3 md:flex-1  transition ">
              to see a live preview
            </button>
          </div>
        </article>
        <div className="md:-mr-96 w-full md:w-auto animate-slide-tl ">
          <img src={hero} className="md:object-contain w-full  " alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
