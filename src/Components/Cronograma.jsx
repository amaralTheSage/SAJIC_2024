import React from "react";
import CardPalestrante from "./CardPalestrante";
import SecoesDoCronograma from "./SecoesDoCronograma";

function Cronograma() {
  return (
    <section className="bg-[#0056B3] py-16 text-white">
      <h2 className="w-4/5 lg:w-1/2 text-center mb-24 m-auto font-semibold text-3xl">
        Prepare-se para Oficinas, Networking e Palestras Imperdíveis!
      </h2>

      {/* TECNOLOGIA */}
      <div className=" m-auto">
        <SecoesDoCronograma assunto={"tecnologia"} />
        <SecoesDoCronograma assunto={"gestão"} reverse={true} />
        <SecoesDoCronograma assunto={"mercado"} />
      </div>
    </section>
  );
}

export default Cronograma;
