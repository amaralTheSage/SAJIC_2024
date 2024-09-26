import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-gradient-to-b from-[#004B9D] to-[#00254C] text-white p-24 flex flex-col items-start  gap-24
    "
    >
      <div className="sm:text-left text-center justify-center flex gap-8 flex-wrap md:flex-nowrap sm:justify-between md:w-3/5 lg:w-2/5 w-5/6 ">
        <div>
          <h3 className="font-semibold text-lg mb-2 uppercase">Mapa do Site</h3>
          <nav className="flex flex-col gap-1">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/programacao"> Programação</NavLink>
            <NavLink to="/palestrantes"> Palestrantes</NavLink>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 uppercase">
            Redes Sociais
          </h3>
          <nav className="flex flex-col gap-1">
            <a href="https://www.instagram.com/sajic_unisenac/">
              @sajic_unisenac
            </a>
            <a href="https://www.instagram.com/unisenacpelotas/">
              @unisenacpelotas
            </a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 uppercase">Contato</h3>
          <nav className="flex flex-col gap-1">
            <a href="">Telefone</a>
            <a href="">Email</a>
          </nav>
        </div>
      </div>

      {/* Qualidade paia */}
      <img src="/footer_logos.png" alt="" className="w-[380px] m-auto" />
    </footer>
  );
}

export default Footer;
