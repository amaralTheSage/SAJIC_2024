import Footer from "../../Components/Footer";

function Programacao() {
  return (
    <>
      <main>
        <section className="w-4/5 m-auto">
          <h1 className="mt-32 text-5xl font-semibold text-[#0056B3]">
            Programação SAJIC | <span className="font-bold">2024</span>
          </h1>
          <p className="mt-10 font-light text-3xl">
            Prepare-se para viver uma experiência incrível na 4° Edição da
            SAJIC, onde inovação, aprendizado e networking se unem em um só
            lugar! Imagine um espaço dinâmico e interativo, repleto de empresas
            de ponta, workshops práticos e palestras inspiradoras, tudo
            preparado para você sair de lá mais conectado, informado e pronto
            para transformar ideias em ações.
          </p>
        </section>

        {/* Circles */}
        <section className="w-11/12 md:w-4/5 m-auto grid grid-cols-5 mt-20 items-center font-bold text-[#0056B3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <div className=" border-black border-2 rounded-full aspect-square flex items-center justify-center">
            <p>16/10</p>
          </div>

          <div className="h-px bg-black flex items-center justify-center">
            <div className="h-5 aspect-square rounded-full bg-black"></div>
          </div>

          <div className=" border-black border-2 rounded-full aspect-square flex items-center justify-center">
            <p>17/10</p>
          </div>

          <div className="h-px bg-black flex items-center justify-center">
            <div className="h-5 aspect-square rounded-full bg-black"></div>
          </div>

          <div className=" border-black border-2 rounded-full aspect-square flex items-center justify-center">
            <p>18/10</p>
          </div>
        </section>

        {/* Section 2 */}
        <div className="bg-gradient-to-b from-[#0065D2] to-[#004B9D] py-16 my-16">
          <section className="flex flex-col items-center justify-center text-3xl mt-20  py-40 bg-[url('predio_lines.svg')]  m-auto   bg-no-repeat bg-cover text-white">
            <div className="">
              <div className="w-4/5 m-auto flex flex-col items-center mt-32">
                <p className="font-bold text-4xl">16/10</p>
                <p className="">Manhã</p>
                <div className="flex gap-32 justify-around mt-20">
                  <div>
                    <p className="text-3xl">Credenciamento</p>
                    <p>
                      Horário: <span>9:00 as 9:40</span>
                    </p>
                  </div>
                  <div>
                    <p>Coffee Break/Networking</p>
                    <p>
                      Horário: <span>9:40 as 10:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-4/5 m-auto flex flex-col items-center mt-32">
                <p className="font-bold text-4xl">16/10</p>
                <p className="">Manhã</p>
                <div className="flex gap-32 justify-around mt-20">
                  <div>
                    <p className="text-3xl">Credenciamento</p>
                    <p>
                      Horário: <span>9:00 as 9:40</span>
                    </p>
                  </div>
                  <div>
                    <p>Coffee Break/Networking</p>
                    <p>
                      Horário: <span>9:40 as 10:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Programacao;
