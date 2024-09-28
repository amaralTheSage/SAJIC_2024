function Palestrantes() {
  return (
    <>
      <main>
        <section className="py-20">
          <h1 className="text-center font-bold md:text-4xl text-3xl">Palestrantes</h1>
          <p className="text-center font-light md:text-xl text-lg m-2">
          Interessado(a)? Clique em um para saber mais!
          </p>
          <section className="w-10/12 sm:w-9/12 m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12 gap-[8vw] ">
            {" "}
            {/*--div que contém os palestrantes--*/}
            <a href="#Pablo"><div className="text-center font-light pt-4">
            <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="pablo.png"
                alt=""
              />
              <h2 className="font-bold">Pablo de Chiaro Rosa</h2>
              <p className="text-sm">UniSenac</p>
              <p className="text-sm">Inteligência Artificial</p>
            </div></a>

            <a href="#Gladimir"><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="https://avatars.githubusercontent.com/u/26561092?v=4"
                alt=""
              />
              <h2 className="font-bold">Gladimir Catarino</h2>
              <p className="text-sm">UniSenac</p>
              <p className="text-sm">Internet of Things</p>
            </div></a>

            <a href="#William"><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="william_machado.png"
                alt=""
              />
              <h2 className="font-bold">William Machado</h2>
              <p className="text-sm">Colégio Tiradentes</p>
              <p className="text-sm">As Implicações Éticas nas Tecnologias Digitais</p>
            </div></a>

            <a href="#Eduardo"><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="https://avatars.githubusercontent.com/u/7376289?v=4"
                alt=""
              />
              <h2 className="font-bold">Eduardo Roveré</h2>
              <p className="text-sm">ATLAS</p>
              <p className="text-sm">Mercado de Trabalho</p>
            </div></a>

            <a href=""><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="Foto-Palestrante.png"
                alt=""
              />
              <h2 className="font-bold">Nome</h2>
              <p className="text-sm">Empresa</p>
              <p className="text-sm">Tema/assunto</p>
            </div></a>

            <a href=""><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="Foto-Palestrante.png"
                alt=""
              />
              <h2 className="font-bold">Nome</h2>
              <p className="text-sm">Empresa</p>
              <p className="text-sm">Tema/assunto</p>
            </div></a>

            <a href=""><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="Foto-Palestrante.png"
                alt=""
              />
              <h2 className="font-bold">Nome</h2>
              <p className="text-sm">Empresa</p>
              <p className="text-sm">Tema/assunto</p>
            </div></a>

            <a href=""><div className="text-center font-light pt-4">
              <img
                className="w-full aspect-square rounded-full object-cover shadow-lg"
                src="Foto-Palestrante.png"
                alt=""
              />
              <h2 className="font-bold">Nome</h2>
              <p className="text-sm">Empresa</p>
              <p className="text-sm">Tema/assunto</p>
            </div></a>
          </section>

          <section className="m-20 flex justify-around">
      <div id="Pablo" className="w-[27.75rem] h-[39.25rem] border-black border-solid border-2 flex flex-wrap flex-col  text-center items-center shadow-[59px_40px_4px] shadow-[#004B9D]">
        <h2 className="text-[1.375rem] font-bold mt-[0.8rem]">Pablo de Chiaro Rosa</h2>
        <h3 className="text-[1.375rem] font-extralight ">UniSenac</h3>
        <img className="w-[11.25rem] h-[11.25rem] rounded-full flex object-cover" src="pablo.png" alt="" />
        <h3 className="text-[1.125rem] font-light text-white rounded-full bg-[#004B9D] items-center flex justify-center w-[14.25rem] h-[1.875rem]">Inteligência Artificial</h3>
        <p className="text-[1.125rem] font-light w-[23.75rem] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum voluptatum, amet accusantium omnis odio possimus ab maxime. Autem doloribus expedita accusantium blanditiis fugiat ad magnam maxime voluptates veritatis aperiam!</p>
        <hr className="w-[23.75rem] h-[2px] bg-black mt-[1rem]" />
        <div className="flex w-[23.75rem] justify-between mt-[1rem]">
          <h3 className="text-[1.125rem] font-light"><span className="font-bold">Data:</span> 16/10</h3>
          <h3 className="text-[1.125rem] font-light"><span className="font-bold">Hora:</span> 10:40 às 11:40</h3>
        </div>
        <hr className="w-[23.75rem] h-[2px] bg-black mt-[1rem]" />
        <div className="flex w-[20.5rem] justify-around mt-[2rem]">
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
        </div>
        
      </div>
      <div id="Gladimir" className="w-[27.75rem] h-[39.25rem] border-black border-solid border-2 flex flex-wrap flex-col  text-center items-center shadow-[59px_40px_4px] shadow-[#004B9D]">
        <h2 className="text-[1.375rem] font-bold mt-[0.8rem]">Gladimir Catarino</h2>
        <h3 className="text-[1.375rem] font-extralight ">UniSenac</h3>
        <img className="w-[11.25rem] h-[11.25rem] rounded-full flex object-cover" src="https://avatars.githubusercontent.com/u/26561092?v=4" alt="" />
        <h3 className="text-[1.125rem] font-light text-white rounded-full bg-[#004B9D] items-center flex justify-center w-[14.25rem] h-[1.875rem]">Internet of Things</h3>
        <p className="text-[1.125rem] font-light w-[23.75rem] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum voluptatum, amet accusantium omnis odio possimus ab maxime. Autem doloribus expedita accusantium blanditiis fugiat ad magnam maxime voluptates veritatis aperiam!</p>
        <hr className="w-[23.75rem] h-[2px] bg-black mt-[1rem]" />
        <div className="flex w-[23.75rem] justify-between mt-[1rem]">
          <h3 className="text-[1.125rem] font-light"><span className="font-bold">Data:</span> 16/10</h3>
          <h3 className="text-[1.125rem] font-light"><span className="font-bold">Hora:</span> 10:40 às 11:40</h3>
        </div>
        <hr className="w-[23.75rem] h-[2px] bg-black mt-[1rem]" />
        <div className="flex w-[20.5rem] justify-around mt-[2rem]">
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
          <img className="w-[3.125rem] h-[3.125rem]" src="public\ElipseRedesS.png" alt="" />
        </div>
        
      </div>
    </section>
        </section>
      </main>
    </>
  );
}
export default Palestrantes;