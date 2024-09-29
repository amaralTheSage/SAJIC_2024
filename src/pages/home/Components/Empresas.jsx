import React from "react";
import EmpresasImgs from "./EmpresasImgs";

function Empresas() {
  return (
    <section className="bg-[#313131] text-white flex flex-col items-center gap-6 py-28">
      <h2 className="text-3xl font-semibold md:w-3/5 w-11/12 text-center m-auto">
        Conheça as empresas que marcarão presença no evento!
      </h2>
      <div className="grid w-4/5 sm:grid-cols-2 md:grid-cols-3 m-auto gap-x-20 gap-y-12">

        <EmpresasImgs
          img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt="Empresa"
        />
        <EmpresasImgs
          img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt="Empresa"
        />
        <EmpresasImgs
          img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt="Empresa"
        />
        <EmpresasImgs
          img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt="Empresa"
        />
        <EmpresasImgs
          img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt="Empresa"
        />
        <EmpresasImgs
          img="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt="Empresa"
        />

      </div>
    </section>
  );
}

export default Empresas;
