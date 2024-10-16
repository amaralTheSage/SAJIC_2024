import PropTypes from "prop-types";

export default function ProgramacaoHorario({
  data,
  horarioCreden,
  turno,
  horarioCoffe,
}) {
  return (
    <div className="w-4/5 m-auto flex flex-col items-center justify-center mt-32 font-bold">
      <p className="text-8xl">{data}</p>
      <p className="text-6xl font-normal">{turno}</p>

      <div className="flex flex-col md:flex-row gap-8 justify-center text-center md:text-left mt-20 text-xl md:text-2xl">
        <div>
          <p>Credenciamento</p>
          <span className="font-light">Horário: </span>
          <span>{horarioCreden}</span>
        </div>

        <hr className="border-white w-20 md:-rotate-90 m-auto" />

        <div>
          <p>Pausa para Networking</p>
          <span className="font-light">Horário: </span>
          <span>{horarioCoffe}</span>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
ProgramacaoHorario.propTypes = {
  data: PropTypes.string.isRequired,
  horarioCreden: PropTypes.string.isRequired,
  turno: PropTypes.string.isRequired,
  horarioCoffe: PropTypes.string.isRequired,
};
