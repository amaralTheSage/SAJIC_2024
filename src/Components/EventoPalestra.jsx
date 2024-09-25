import React from "react";

function EventoPalestra({
  tipo = "oficinas",
  nome_1,
  prof_1,
  sala_1,
  horario_1,
  prof_2,
  nome_2,
  sala_2,
  horario_2,
  isBackgroundWhite,
}) {
  return (
    <>
      <div className="flex items-center mr-[-32rem]">
        <p className="transform -rotate-90">Simultâneo</p>
        {/* Modificando a classe do hr dinamicamente */}
        <hr
          className={`border-1 ${isBackgroundWhite ? "border-[#0056B2]" : "border-white"} w-72 transform -rotate-90 ml-[-12rem]`}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold capitalize">{tipo}</p>

        <div>
          <p className="font-bold">{nome_1}</p>
          <p>
            Horário: <span className="font-bold">{horario_1}</span>
          </p>
          <p>
            Com{" "}
            <span className="font-bold">
              {prof_1}, Sala {sala_1}
            </span>
          </p>
        </div>

        <div>
          <p className="font-bold">{nome_2}</p>
          <p>
            Horário: <span className="font-bold">{horario_2}</span>
          </p>
          <p>
            Com{" "}
            <span className="font-bold">
              {prof_2}, Sala {sala_2}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default EventoPalestra;
