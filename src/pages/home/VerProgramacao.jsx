import { NavLink } from "react-router-dom";

function VerProgramacao() {
  return (
    <NavLink
      to="/programacao"
      className="mt-3 uppercase bg-white text-blue-600 rounded-xl p-3"
    >
      Ver a programação
    </NavLink>
  );
}

export default VerProgramacao;
