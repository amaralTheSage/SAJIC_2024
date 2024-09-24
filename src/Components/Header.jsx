import { Menu } from "react-feather";
import Hamburguer from "./Hamburguer";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="bg-[#313131]   text-white shadow-md">
      <div className="flex gap-4 justify-between items-center sm:items-end  px-14">
        <img src="LOGOBRANCA.png" alt="" className="w-24 my-2" />

        <div className="flex gap-4 max-md:items-center">
          <nav className="hidden sm:flex gap-4 h-full items-top">
            <a href="" className="border-b-[12px] pb-2 border-white h-full">
              Home
            </a>
            <a href="">Programação</a>
            <a href="">Palestrantes</a>

            <a
              href=""
              className="bg-blue-600 rounded-md h-min py-1 md:relative bottom-1 px-3"
            >
              Inscreva-se
            </a>
          </nav>

          <div
            className="sm:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu size={30} />
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="flex justify-evenly gap-4 h-full font-medium mt-2 items-top">
          <a href="" className="border-b-[12px] pb-1 border-white h-full">
            Home
          </a>
          <a href="">Programação</a>
          <a href="">Palestrantes</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
