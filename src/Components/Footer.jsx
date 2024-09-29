import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-gradient-to-b from-[#004B9D] to-[#00254C] text-white p-24 flex flex-col items-center md:items-start gap-24
    "
    >
      <div className="lg:text-left text-center justify-center flex gap-12 flex-wrap md:flex-nowrap sm:justify-between w-fit">
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
      </div>

      <div className="grid max-md:text-center md:grid-cols-4 m-auto gap-12 lg:gap-28 bg">
        <p className="md:col-span-3">
          &copy; 2024. Todos os direitos reservados.
          <br /> Projeto idealizado por estudantes dos 2º, 3º e 5º semestres do
          curso de Análise e Desenvolvimento de Sistemas.
        </p>

        <img
          src="/sajic_branco.png"
          alt=""
          className="md:w-full w-1/2 m-auto"
        />
      </div>
    </footer>
  );
}

export default Footer;
