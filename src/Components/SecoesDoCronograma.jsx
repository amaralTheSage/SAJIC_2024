import React from "react";
import CardPalestrante from "./CardPalestrante";
import VerProgramacao from "../pages/home/VerProgramacao";
import CarrosselPalestrantes from "../pages/home/Components/CarrosselPalestrantes";

function SecoesDoCronograma({ assunto, reverse = false }) {
  return (
    <div className="my-32">
      <div
        className={`flex justify-center gap-10 flex-wrap md:flex-nowrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="flex justify-center">
          <div className="relative ">
            <div className="bg-white w-[340px] sm:w-[400px] aspect-video rounded-sm absolute top-3 right-3 "></div>
            <div className="bg-orange-400 w-[340px] sm:w-[400px] aspect-video rounded-sm absolute -top-3 left-3"></div>
            <div className="w-[340px] sm:w-[400px] aspect-video rounded-sm relative z-10">
              {/* Senhoras e senhores, o nome vertical responsivo é real */}
              <figure className="flex w-full h-full items-center relative">
                <img
                  src={
                    (assunto.toLowerCase() == "tecnologia" &&
                      "tecnologia_thumb.png") ||
                    (assunto.toLowerCase() == "gestão" && "gestão_thumb.png") ||
                    (assunto.toLowerCase() == "mercado" && "mercado_thumb.png")
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
                {reverse ? (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:left-60 sm:rotate-90">
                    {assunto}
                  </figcaption>
                ) : (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:-left-60 sm:-rotate-90">
                    {assunto}
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </div>

        <div className={`${!reverse && "flex flex-col items-end"} `}>
          <p className={`max-w-1/2  ${!reverse && "text-right"}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsam
            quisquam unde adipisci ratione qui quas impedit tempore ab
            recusandae dolore facilis quaerat illo aliquam repellat dolor, amet
            ad porro tenetur consectetur aliquid totam quasi vitae reiciendis.
            Enim mollitia delectus et itaque? Officia voluptas vel odit sunt
            alias animi libero?
          </p>

          <VerProgramacao />
        </div>
      </div>

      {/* PALESTRANTES */}
      <div className="mt-16 ">
        <h2 className="font-semibold text-2xl">
          Palestrantes de {assunto} confirmados!
        </h2>

        {/* grid grid-cols-2 gap-4 md:grid-cols-4 */}
        <div className="mt-2">
          {/* TECNOLOGIA */}
          {assunto.toLowerCase() == "tecnologia" && (
            <div className="relative h-[50vh]">
              <CarrosselPalestrantes>
                <CardPalestrante
                  prof="Gladimir Catarino"
                  data="16/10, das 10:00 às 10:50"
                  empresa="UniSenac"
                  tema="IoT (Workshop)"
                  image="https://avatars.githubusercontent.com/u/26561092?v=4"
                />
                <CardPalestrante
                  prof="Débora Carvalho"
                  data="17/10, das 10:40 às 11:40"
                  empresa="UniSenac"
                  tema="Desenvolvimento de Games"
                />
                <CardPalestrante />
                <CardPalestrante />
                <CardPalestrante />
                <CardPalestrante />
                <CardPalestrante />
              </CarrosselPalestrantes>
            </div>
          )}
          {/* 
          {/* GESTÃO }
          {assunto.toLowerCase() == "gestão" && (
            <>
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
            </>
          )}

          {/* MERCADO }
          {assunto.toLowerCase() == "mercado" && (
            <>
              <CardPalestrante
                prof="Eduardo Roveré "
                data="16/10, das 10:50 às 11:50"
                empresa="Atlas"
                tema="Mercado de Trabalho"
              />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
            </>
          )}
          
          
           */}
        </div>
      </div>
    </div>
  );
}

export default SecoesDoCronograma;
