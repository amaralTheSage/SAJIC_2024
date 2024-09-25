import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "react-feather";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#313131] text-white shadow-md">
      <div className="flex gap-4 justify-between items-center sm:items-end px-14">
        <img src="LOGOBRANCA.png" alt="" className="w-24 my-2" />

        <div className="flex gap-4 max-md:items-center">
          <nav className="hidden sm:flex gap-4 h-full items-top">
            <NavLink
              to="/"
              className={`border-b-[12px] pb-2 h-full ${
                pathname === "/" ? "border-white" : "border-transparent"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/programacao"
              className={`border-b-[12px] pb-2 h-full ${
                pathname === "/programacao"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              Programação
            </NavLink>
            <NavLink
              to="/palestrantes"
              className={`border-b-[12px] pb-2 h-full ${
                pathname === "/palestrantes"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              Palestrantes
            </NavLink>
            <NavLink
              to="/inscricao"
              className="bg-blue-600 rounded-md h-min py-1 relative bottom-1 px-3"
            >
              Inscreva-se
            </NavLink>
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
        <nav className="sm:hidden flex justify-evenly gap-3 h-full font-medium mt-2 items-top">
          <NavLink
            to="/"
            className={`border-b-[12px] pb-2 h-full ${
              pathname === "/" ? "border-white" : "border-transparent"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/programacao"
            className={`border-b-[12px] pb-2 h-full ${
              pathname === "/programacao" ? "border-white" : "border-transparent"
            }`}
          >
            Programacão
          </NavLink>
          <NavLink
            to="/palestrantes"
            className={`border-b-[12px] pb-2 h-full ${
              pathname === "/palestrantes" ? "border-white" : "border-transparent"
            }`}
          >
            Palestrantes
          </NavLink>
          <NavLink to="/inscricao">Inscrição</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
