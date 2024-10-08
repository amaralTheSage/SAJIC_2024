import { NavLink } from "react-router-dom";

function PalestranteSelecionado({ p }) {
  

  
  function instagram2() {
    if (p.instagram == null){
    } else{
      return(
        <a href={p.instagram2} target="_blank"><img className="w-3/5  lg:w-4/5 xl:w-full" src="instagram.png" alt="instagram"/></a>
      );
    }}

  function instagram() {
    if (p.instagram == null){
    } else{
      return(
        <a href={p.instagram} target="_blank"><img className="w-3/5  lg:w-4/5 xl:w-full" src="instagram.png" alt="instagram"/></a>
      );
    }}

  function linkedin() {
    if (p.linkedin == null) {
    } else{
      return(
        <a href={p.linkedin} target="_blank"><img className="w-3/5  lg:w-4/5 xl:w-full" src="Linkedin.png" alt="linkedin" /></a>
      );
    }}

  function github() {
    if (p.github == null) {
    } else{
      return(
      <a href={p.github} target="_blank"><img className="w-3/5 lg:w-4/5 xl:w-full" src="github.png" alt="github" /></a>);
    }}

    function youtube() {
      if (p.youtube == null) {
      } else{
        return(
          <a href={p.youtube} target="_blank"><img className="w-3/5 lg:w-4/5 xl:w-full" src="youtube.png" alt="youtube" /></a>);}}

  if (p.prof == "Augusto Rickes" || p.prof == "Michele" || p.prof == "Ítalo Nolasco Ramos") {
    return(
      <section
      className="bg-[url('/background_senc.png')] py-24 bg-top bg-cover"
      id="palestrante-selecionado"
    >
      <div
        className="flex flex-col items-center md:grid grid-cols-5 m-auto
       text-white gap-6 md:gap-12 sm:w-4/5 w-[90%] "
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
          <br />
          <p className="border-2 w-fit text-center m-auto p-1 px-12 rounded-md text-xl ">
            {p.tema2}
          </p>
        </div>

        <div className="m-auto text font-light col-span-3 ">
          <p className="">Palestrante</p>
          <h2 className="font-bold text-2xl ">{p.prof}</h2>
          <p className="w-fit  ">{p.desc}</p>
          
          <div className="flex mt-9 justify-between ">
          <p className="text-[1.5rem] font-light">
            Data: <span className="text-[1.5rem] font-bold">{p.data}</span>
          </p>
          <p className="text-[1.5rem] font-light">
            Hora:{" "}
            <span className="text-[1.5rem] font-bold">
              {p.hora}
            </span>
          </p>
        </div>
        
        <hr />
        
        <div className="flex mt-9 justify-between ">
          <p className="text-[1.5rem] font-light">
            Data: <span className="text-[1.5rem] font-bold">{p.data2}</span>
          </p>
          <p className="text-[1.5rem] font-light">
            Hora:{" "}
            <span className="text-[1.5rem] font-bold">
              {p.hora2}
            </span>
          </p>
        </div>

        <hr />

          <div className="flex md:flex mt-9 items-center gap-3 flex-wrap">
          <p className="font-bold text-lg">Redes Sociais:</p>


          <div className="grid grid-cols-4 gap-3 w-[160px]">
            {instagram()}
            {linkedin()}
            {github()}
            {youtube()}
            
          </div>
        </div>

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
  } else if (p.prof == "Marcelo Oscaberry e Lorenzo Gonçalves") {
    return(
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

        <div className="m-auto text font-light col-span-3 ">
          <p className="">Palestrante</p>
          <h2 className="font-bold text-2xl ">{p.prof}</h2>
          <p className="w-fit  ">{p.desc}</p>

          <div className="flex mt-9 justify-between ">
          <p className="text-[1.5rem] font-light">
            Data: <span className="text-[1.5rem] font-bold">{p.data}</span>
          </p>
          <p className="text-[1.5rem] font-light">
            Hora:{" "}
            <span className="text-[1.5rem] font-bold">
              {p.hora}
            </span>
          </p>
        </div>
        
        <hr />

          <div className="flex md:flex mt-9 items-center gap-3 flex-wrap">
          <p className="font-bold text-lg">Redes Sociais do Marcelo:</p>

          <div className="grid grid-cols-4 gap-3 w-[180px]">
            {instagram()}
            {linkedin()}
            {github()}
            {youtube()}
            {/* <img className="w-full" src="ElipseRedesS.png" alt={p.} />*/}
          </div>
        </div>

          <div className="flex md:flex mt-9 items-center gap-3 flex-wrap">
          <p className="font-bold text-lg">Redes Sociais do Lorenzo:</p>

          <div className="grid grid-cols-4 gap-3 w-[180px]">
            {instagram2()}
            {linkedin()}
            {github()}
            {youtube()}
            {/* <img className="w-full" src="ElipseRedesS.png" alt={p.} />*/}
          </div>
        </div>

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
  else {
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

        <div className="m-auto text font-light col-span-3 ">
          <p className="">Palestrante</p>
          <h2 className="font-bold text-2xl ">{p.prof}</h2>
          <p className="w-fit  ">{p.desc}</p>

          <div className="flex mt-9 justify-between ">
          <p className="text-[1.5rem] font-light">
            Data: <span className="text-[1.5rem] font-bold">{p.data}</span>
          </p>
          <p className="text-[1.5rem] font-light">
            Hora:{" "}
            <span className="text-[1.5rem] font-bold">
              {p.hora}
            </span>
          </p>
        </div>
        
        <hr />

          <div className="flex md:flex mt-9 items-center gap-3 flex-wrap">
          <p className="font-bold text-lg">Redes Sociais:</p>

          <div className="grid grid-cols-4 gap-3 w-[180px]">
            {instagram()}
            {linkedin()}
            {github()}
            {youtube()}
            {/* <img className="w-full" src="ElipseRedesS.png" alt={p.} />*/}
          </div>
        </div>

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
  );}
}

export default PalestranteSelecionado;
