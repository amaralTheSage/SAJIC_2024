import { NavLink } from "react-router-dom";

function VerProgramacao() {
  return (
    <NavLink
      to="/programacao"
      className="mt-3 uppercase block w-fit bg-white text-blue-600 rounded-xl p-3 max-lg:m-auto"
    >
      Ver a programação
    </NavLink>
  );
}

export default VerProgramacao;
