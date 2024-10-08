import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "react-feather";
import { useEffect, useState } from "react";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navStyles = `border-b-[12px] pb-2 h-full transition-colors hover:border-white select-none`;

  return (
    <header className="bg-[#313131] text-sm sm:text-base text-white shadow-md">
      <div className="flex gap-4 justify-between items-center sm:items-end px-14">
        <NavLink to="/">
          <img src="sajic_branco.png" alt="" className="w-24 my-4 select-none" />
        </NavLink>

        <div className="flex gap-4 max-md:items-center">
          <nav className="hidden sm:flex gap-4 h-full items-top">
            <NavLink
              to="/"
              className={`${navStyles} ${
                pathname === "/" ? "border-white" : "border-transparent"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/programacao"
              className={`${navStyles} ${
                pathname === "/programacao"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              Programação
            </NavLink>
            <NavLink
              to="/palestrantes"
              className={`${navStyles} ${
                pathname === "/palestrantes"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              Palestrantes
            </NavLink>
            <a
              href="https://www.sympla.com.br/semana-academica---jornada-de-iniciacao-cientifica__2656617"
              className="bg-blue-600 transition-colors hover:bg-white hover:text-blue-600 rounded-md h-min py-1 relative bottom-1 px-3 select-none"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
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
        <nav className="sm:hidden flex justify-evenly gap-3 h-full font-medium mt-2 items-top">
          <NavLink
            to="/"
            className={`${navStyles} ${
              pathname === "/" ? "border-white" : "border-transparent"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/programacao"
            className={`${navStyles} ${
              pathname === "/programacao"
                ? "border-white"
                : "border-transparent"
            }`}
          >
            Programação
          </NavLink>
          <NavLink
            to="/palestrantes"
            className={`${navStyles} ${
              pathname === "/palestrantes"
                ? "border-white"
                : "border-transparent"
            }`}
          >
            Palestrantes
          </NavLink>
          <a
            href="https://www.sympla.com.br/semana-academica---jornada-de-iniciacao-cientifica__2656617"
            className="bg-blue-600 transition-colors hover:bg-white hover:text-blue-600 rounded-md h-min py-1 relative bottom-1 px-3 select-none"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Inscreva-se
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
