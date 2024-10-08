import React from "react";
import EmpresaCard from "./EmpresaCard";

function Empresas() {
  return (
    <section className="bg-[#313131] text-white flex flex-col items-center gap-6 py-28">
      <h2 className="text-3xl font-semibold md:w-3/5 w-11/12 text-center m-auto">
        Conheça as empresas que marcarão presença no evento!
      </h2>
      <div className="w-4/5 flex items-center grow-0 justify-evenly flex-wrap m-auto gap-x-20 gap-y-12">
        <EmpresaCard img="/empresas/atlas.png" alt="Atlas Technologies" />
        <EmpresaCard img="/empresas/main_leaf.png" alt="Main Leaf" />
        <EmpresaCard img="/empresas/globo.png" alt="Globo" />
        <EmpresaCard img="/empresas/sigales.png" alt="Instituto Sigales" />
        <EmpresaCard
          img="/empresas/andrea_auge.png"
          alt="Andréa Augé Advocacia"
        />
      </div>
    </section>
  );
}

export default Empresas;
