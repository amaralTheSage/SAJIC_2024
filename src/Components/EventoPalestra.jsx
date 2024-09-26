import PropTypes from "prop-types";

function EventoPalestra({
  nome_1,
  prof_1,
  sala_1,
  horario_1,
  nome_2,
  prof_2,
  sala_2,
  horario_2,
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Primeiro evento */}
      {nome_1 && (
        <div className="flex flex-col gap-2 w-[90%] items-start">
          <p className="font-bold">{nome_1}</p>
          {horario_1 && (
            <p>
              Horário: <span className="font-bold">{horario_1}</span>
            </p>
          )}
          {prof_1 && sala_1 && (
            <p>
              Com{" "}
              <span className="font-bold">
                {prof_1}, Sala {sala_1}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Segundo evento */}
      {nome_2 && (
        <div className="flex flex-col gap-2 w-[90%] items-start">
          <p className="font-bold">{nome_2}</p>
          {horario_2 && (
            <p>
              Horário: <span className="font-bold">{horario_2}</span>
            </p>
          )}
          {prof_2 && sala_2 && (
            <p>
              Com{" "}
              <span className="font-bold">
                {prof_2}, Sala {sala_2}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

EventoPalestra.propTypes = {
  nome_1: PropTypes.string,
  prof_1: PropTypes.string,
  sala_1: PropTypes.string,
  horario_1: PropTypes.string,
  nome_2: PropTypes.string,
  prof_2: PropTypes.string,
  sala_2: PropTypes.string,
  horario_2: PropTypes.string,
};

export default EventoPalestra;
