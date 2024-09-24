import React from "react";

function Patrocinadores() {
  return (
    <section className="w-4/5 m-auto py-20">
      {/* PATROCINADORES */}
      <section className="text-center">
        <h3 className="font-semibold text-2xl mb-8">Patrocinadores</h3>
        <div className="grid  grid-cols-4 m-auto gap-8 md:gap-x-20 md:gap-y-12">
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
        </div>
      </section>

      {/* Apoiadores */}
      <section className="text-center my-20">
        <h3 className="font-semibold text-2xl mb-8">Apoiadores</h3>
        <div className="grid w-4/5  grid-cols-4 m-auto gap-8 md:gap-x-20 md:gap-y-12">
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
        </div>
      </section>

      {/* Realização */}
      <section className="text-center">
        <h3 className="font-semibold text-2xl mb-8">Realização</h3>
        <div className="grid w-3/5 grid-cols-3 m-auto gap-8 md:gap-x-20 md:gap-y-12">
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
          <div className="aspect-square text-center  rounded-full border-2 border-gray-600"></div>
        </div>
      </section>
    </section>
  );
}

export default Patrocinadores;
