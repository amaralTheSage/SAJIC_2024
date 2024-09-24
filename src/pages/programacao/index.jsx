import Footer from "../../Components/Footer";

function Programacao() {
  return (
    <>
      <main>
        <section className="w-4/5 m-auto">
          <h1 className="mt-32 text-5xl font-semibold text-[#0056B3]">Programação SAJIC | <span className="font-bold">2024</span></h1>
          <p className="mt-10 font-light text-3xl">Prepare-se para viver uma experiência incrível na 4° Edição da SAJIC, onde inovação, aprendizado e networking se unem em um só lugar! Imagine um espaço dinâmico e interativo, repleto de empresas de ponta, workshops práticos e palestras inspiradoras, tudo preparado para você sair de lá mais conectado, informado e pronto para transformar ideias em ações.</p>
        </section>

        <section className="w-4/5 m-auto flex mt-20 justify-center font-bold text-[#0056B3] text-6xl">
          <div className="p-32 border-black border-2 rounded-full w-20 h-20 flex items-center justify-center">
            <p>16/10</p>
          </div>
          <div className="flex items-center">
            <img src="line.png" alt="" className="w-32" />
            <img src="elipse.png" alt="" className="size-8" />
            <img src="line.png" alt="" className="w-32" />
          </div>
          <div className="p-32 border-black border-2 rounded-full w-20 h-20 flex items-center justify-center">
            <p>17/10</p>
          </div>
          <div className="flex items-center">
            <img src="line.png" alt="" className="w-32" />
            <img src="elipse.png" alt="" className="size-8" />
            <img src="line.png" alt="" className="w-32" />
          </div>
          <div className="p-32 border-black border-2 rounded-full w-20 h-20 flex items-center justify-center">
            <p>18/10</p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-6xl mt-20 bg-gradient-to-b from-[#0065D2] to-[#004B9D] h-[138.9375rem]">
          <div className="bg-[url('predio_lines.svg')] bg-no-repeat bg-cover text-white">
            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">16/10</p>
              <p className="text-6xl">Manhã</p>
              <div className="flex gap-32 justify-around mt-20">
                <div>
                  <p className="text-3xl">Credenciamento</p>
                  <p>Horário: <span>9:00 as 9:40</span></p>
                </div>
                <div>
                  <p>Coffee Break/Networking</p>
                  <p>Horário: <span>9:40 as 10:00</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Programacao;