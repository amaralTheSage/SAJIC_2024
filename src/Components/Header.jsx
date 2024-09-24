// import React from "react";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#313131] flex items-center flex-col md:flex-row gap-4 md:justify-between md:items-end  px-14 text-white shadow-md">
      <img src="LOGOBRANCA.png" alt="" className="w-24 my-2" />

      <nav className="flex gap-4 h-full items-top">
        <NavLink to="/" className="border-b-[12px] pb-2 border-white h-full">Home</NavLink>
        <NavLink to="/programacao">Programacão</NavLink>
        <NavLink to="/palestrantes">Palestrantes</NavLink>
        <NavLink to="/inscricao" className="bg-blue-600 rounded-md h-min py-1 relative bottom-1 px-3">Inscreva-se</NavLink>
      </nav>
    </header>
  );
}

export default Header;
