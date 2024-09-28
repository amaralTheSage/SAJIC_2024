import { NavLink } from "react-router-dom";

function PalestranteSelecionado({ p }) {
  return (
    <section
      className="bg-[url('/background_senc.png')] py-24 bg-top bg-cover"
      id="palestrante-selecionado"
    >
      <div
        className="flex flex-col items-center md:grid grid-cols-5 m-auto
       text-white gap-6 md:gap-12 sm:w-4/5 w-[90%]"
      >
        <div
          className="m-auto w-full h-min
      col-span-2"
        >
          <img
            className="mb-6 w-3/4 lg:w-2/3 m-auto  aspect-square rounded-full object-cover"
            src={p.foto}
            alt=""
          />
          <p className="border-2 w-fit text-center m-auto p-1 px-12 rounded-md text-xl ">
            {p.tema}
          </p>
        </div>

        <div className="m-auto text font-light col-span-3 bg-red-400">
          <p className="">Palestrante</p>
          <h2 className="font-bold text-2xl ">{p.prof}</h2>
          <p className="w-fit bg-red-800 ">{p.desc}</p>

          {/* <div className="flex mt-9 justify-between ">
          <p className="text-[1.5rem] font-light">
            Data: <span className="text-[1.5rem] font-bold">18/10</span>
          </p>
          <p className="text-[1.5rem] font-light">
            Hora:{" "}
            <span className="text-[1.5rem] font-bold">
              10:40 as 11:40 (Manhã)
            </span>
          </p>
        </div>
        
        <hr /> */}

          {/* <div className="md:flex mt-9 items-center gap-3 flex-wrap">
          <p className="font-bold text-lg">Redes Sociais:</p>

          <div className="grid grid-cols-4 gap-3 w-[160px]">
            <img className="w-full" src="ElipseRedesS.png" alt="" />
            <img className="w-full" src="ElipseRedesS.png" alt="" />
            <img className="w-full" src="ElipseRedesS.png" alt="" />
            <img className="w-full" src="ElipseRedesS.png" alt="" />
          </div>
        </div> */}

          <NavLink
            to="/programacao"
            className="w-full flex justify-end mt-6 md:mt-20 "
          >
            <button className="border-2 px-3 py-1 rounded-md mr-16">
              Programação
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default PalestranteSelecionado;
