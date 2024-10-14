/* eslint-disable react/prop-types */
import { palestrantes } from "../../palestrantes/palestrantes";
import CardPalestrante from "./CardPalestrante";
import VerProgramacao from "./VerProgramacao";
import CarrosselPalestrantes from "./CarrosselPalestrantes";

function SecoesDoCronograma({ assunto, reverse = false, children }) {
  const palestrantesFiltrados = palestrantes.filter((palestrante) => {
    if (palestrante.categoria == assunto) return true;
    else return false;
  });

  const PalestantesElementos = palestrantesFiltrados.map((palestrante) => (
    <CardPalestrante
      key={palestrante.prof}
      prof={palestrante.prof}
      image={palestrante.foto}
      empresa={palestrante.empresa}
      data1={`${palestrante.data}, das ${palestrante.hora}`}
      tema1={palestrante.tema}
      data2={`${palestrante.data2}, das ${palestrante.hora2}`}
      tema2={palestrante.tema2}
    />
  ));

  return (
    <div className="my-32">
      <div
        className={`flex justify-center gap-16 flex-wrap mx-[8vw] md:mx-[12vw] lg:flex-nowrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        {/* IMAGEM */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm absolute top-3 right-3 bg-white"></div>
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm absolute -top-3 left-3 bg-orange-400"></div>
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm relative z-10">
              <figure className="flex w-full h-full items-center relative">
                <img
                  src={
                    (assunto.toLowerCase() === "tecnologia" &&
                      "tecnologia_thumb.png") ||
                    (assunto.toLowerCase() === "gestão" && "gestão_thumb.png")
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
                {reverse ? (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:left-60 sm:rotate-90">
                    {assunto === "gestão" ? "Gestão e Mercado" : assunto}
                  </figcaption>
                ) : (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:-left-60 sm:-rotate-90">
                    {assunto === "gestão" ? "Gestão e Mercado" : assunto}
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div className={!reverse && "flex flex-col items-end"}>
          <p
            className={`text-lg font-light max-lg:text-center mb-4 ${
              !reverse && "text-right"
            }`}
          >
            {children}
          </p>
          <VerProgramacao />
        </div>
      </div>

      {/* PALESTRANTES */}
      <div className="mt-24">
        <h2 className="font-semibold text-center mb-5 text-3xl mx-[5vw] sm:mx-[10vw]">
          Palestrantes de {assunto == "gestão" ? "gestão e mercado" : assunto}{" "}
          confirmados!
        </h2>
        <div>
          <CarrosselPalestrantes gestao={assunto.toLowerCase() === "gestão"}>
            {PalestantesElementos}
          </CarrosselPalestrantes>
        </div>
      </div>
    </div>
  );
}

export default SecoesDoCronograma;
