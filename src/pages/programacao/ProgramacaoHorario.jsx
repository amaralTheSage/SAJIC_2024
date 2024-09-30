import PropTypes from 'prop-types';

export default function ProgramacaoHorario({ data, horarioCreden, turno, horarioCoffe }) {
  return (
    <div className="w-4/5 m-auto flex flex-col items-center justify-center mt-32">
      <p className="font-bold text-6xl md:text-7xl">{data}</p>
      <p className="text-4xl md:text-5xl">{turno}</p>

      <div className="flex flex-col md:flex-row gap-8 justify-center text-center md:text-left mt-20 text-lg md:text-2xl">
        <div>
          <p className="font-bold">Credenciamento</p>
          <p className="font-light">
            Horário: <span className="font-bold">{horarioCreden}</span>
          </p>
        </div>

        <hr className="border-cyan-400 w-20 md:-rotate-90 m-auto" />

        <div>
          <p className="font-bold">Coffee Break/Networking</p>
          <p className="font-light">
            Horário: <span className="font-bold">{horarioCoffe}</span>
          </p>
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
