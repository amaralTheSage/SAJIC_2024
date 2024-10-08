import React from "react";
import PatrocinadoresImgs from "./PatrocinadoresImgs";

function Patrocinadores() {

  //Isso injeta as diretamente na classe, então dá pra botar qualquer coisa, tipo 'md:w-50' e tals
  const patrocinadoresWidth = "w-56"
  const apoiadoresWidth = "w-44"
  const realizadoresWidth = "w-32"

  return (
    <section className="md:w-4/5 w-11/12 m-auto py-20">
      {/* PATROCINADORES */}
      <section className="text-center">
        <h3 className="font-semibold text-2xl mb-8">Patrocinadores</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-x-20 md:gap-y-12">

          <PatrocinadoresImgs
            img="patrocinadores/doutormultas_logo.png"
            alt="Empresa"
            tailwindWidth={patrocinadoresWidth}
            className=''
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
            alt="Empresa"
            tailwindWidth={patrocinadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
            alt="Empresa"
            tailwindWidth={patrocinadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
            alt="Empresa"
            tailwindWidth={patrocinadoresWidth}
          />

        </div>
      </section>

      {/* Apoiadores */}
      <section className="text-center my-20">
        <h3 className="font-semibold text-2xl mb-8">Apoiadores</h3>
        <div className="flex flex-wrap wrap justify-center gap-8 md:gap-x-20 md:gap-y-12">

          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
            alt="Empresa"
            tailwindWidth={apoiadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
            alt="Empresa"
            tailwindWidth={apoiadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
            alt="Empresa"
            tailwindWidth={apoiadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/d+tas+cover+web.jpg?format=1000w"
            alt="empresa"
            tailwindWidth={apoiadoresWidth}
          />


        </div>
      </section>

      {/* Realização */}
      <section className="text-center">
        <h3 className="font-semibold text-2xl mb-8">Realização</h3>
        <div className="flex flex-wrap justify-center wrap gap-8 md:gap-x-20 md:gap-y-12">

          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/d+tas+cover+web.jpg?format=1000w"
            alt="empresa"
            tailwindWidth={realizadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/d+tas+cover+web.jpg?format=1000w"
            alt="empresa"
            tailwindWidth={realizadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/d+tas+cover+web.jpg?format=1000w"
            alt="empresa"
            tailwindWidth={realizadoresWidth}
          />
          <PatrocinadoresImgs
            img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/d+tas+cover+web.jpg?format=1000w"
            alt="empresa"
            tailwindWidth={realizadoresWidth}
          />

        </div>
      </section>
    </section>
  );
}

export default Patrocinadores;
