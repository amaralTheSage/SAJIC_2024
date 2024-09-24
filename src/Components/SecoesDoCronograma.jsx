import React from "react";
import CardPalestrante from "./CardPalestrante";

function SecoesDoCronograma({ assunto }) {
  return (
    <div className="my-32">
      <div className="flex gap-10 justify-center w-fit ">
        <div className="flex justify-center">
          <h3 className="-rotate-90 h-min relative mx-2 left-2 uppercase top-24 text-2xl font-semibold ">
            {assunto}
          </h3>
          <div className="relative">
            <div className="bg-white w-[350px] aspect-video rounded-sm absolute top-3 right-3 "></div>
            <div className="bg-orange-400 w-[350px] aspect-video rounded-sm absolute -top-3 left-3"></div>
            <div className="bg-blue-300 w-[350px] aspect-video rounded-sm relative z-10">
              [IMAGEM]
            </div>
          </div>
        </div>

        <div>
          <p className="max-w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsam
            quisquam unde adipisci ratione qui quas impedit tempore ab
            recusandae dolore facilis quaerat illo aliquam repellat dolor, amet
            ad porro tenetur consectetur aliquid totam quasi vitae reiciendis.
            Enim mollitia delectus et itaque? Officia voluptas vel odit sunt
            alias animi libero?
          </p>

          <button className="mt-3 uppercase bg-white text-blue-600 rounded-xl p-3">
            Ver a programação
          </button>
        </div>
      </div>

      <div className="w-3/5 m-auto mt-16">
        <h2 className="font-semibold text-2xl">
          Palestrantes de {assunto} confirmados!
        </h2>

        <div className="flex gap-4 justify-between  m-auto">
          <CardPalestrante />
          <CardPalestrante />
          <CardPalestrante />
          <CardPalestrante />
        </div>
      </div>
    </div>
  );
}

export default SecoesDoCronograma;
