import React from "react";

function Header() {
  return (
    <header className="bg-[#313131] flex justify-between items-end  px-14 text-white shadow-md">
      <img src="LOGOBRANCA.png" alt="" className="w-24 my-2" />

      <nav className="flex gap-4 h-full items-top">
        <a href="" className="border-b-[12px] pb-2 border-white h-full">
          Home
        </a>
        <a href="">Programação</a>
        <a href="">Palestrantes</a>
        <a
          href=""
          className="bg-blue-600 rounded-md h-min py-1 relative bottom-1 px-3"
        >
          Inscreva-se
        </a>
      </nav>
    </header>
  );
}

export default Header;
