import React from "react";
import CardPalestrante from "./CardPalestrante";

function SecoesDoCronograma({ assunto, reverse = false }) {
  return (
    <div className="my-32">
      {/* Tirei a angulação 90º pq tava cagando a posição do resto */}
      <h3 className="h-min mb-5 uppercase text-center md:text-left text-2xl font-semibold ">
        {assunto}
      </h3>
      <div
        className={`flex justify-center gap-10 flex-wrap md:flex-nowrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-white w-[340px] sm:w-[400px] aspect-video rounded-sm absolute top-3 right-3 "></div>
            <div className="bg-orange-400 w-[340px] sm:w-[400px] aspect-video rounded-sm absolute -top-3 left-3"></div>
            <div className="w-[340px] sm:w-[400px] aspect-video rounded-sm relative z-10">
              <img
                src="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className={`${!reverse && "flex flex-col items-end"}`}>
          <p className={`max-w-1/2 ${!reverse && "text-right"}`}>
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

      {/* PALESTRANTES */}
      <div className="mt-16">
        <h2 className="font-semibold text-2xl">
          Palestrantes de {assunto} confirmados!
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-2 m-auto">
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
