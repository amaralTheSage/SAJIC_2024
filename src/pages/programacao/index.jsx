import { NavLink } from "react-router-dom";
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

        <section className="bg-gradient-to-b from-[#0065D2] to-[#004B9D]">
          <div className="flex flex-col items-center justify-center text-3xl mt-20 py-40 bg-[url('predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-white">
            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">16/10</p>
              <p className="text-6xl">Manhã</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 as 9:40</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">Coffee Break/Networking</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:40 as 10:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around">
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Oficinas</p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Workshop IOT</p>
                <p>Com <span className="font-bold">Gladimir Catarino, Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Palestras</p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Mercado de Trabalho</p>
                <p>Com <span className="font-bold">Eduardo Roveré (ATLAS), Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
            </div>

            <NavLink
              to="/inscricao"
              className="border-2 border-white bg-[#313131] rounded-3xl text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
            >
              Quero Participar
            </NavLink>

            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">16/10</p>
              <p className="text-6xl">Noite</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 as 9:40</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">Coffee Break/Networking</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:40 as 10:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around">
            <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Oficinas</p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Workshop IOT</p>
                <p>Com <span className="font-bold">Gladimir Catarino, Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Palestras</p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Mercado de Trabalho</p>
                <p>Com <span className="font-bold">Eduardo Roveré (ATLAS), Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
            </div>

            <NavLink
              to="/inscricao"
              className="border-2 border-white bg-[#313131] rounded-3xl text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
            >
              Quero Participar
            </NavLink>

          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center text-3xl mt-20 py-40 bg-[url('predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-[#0056B2]">
            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">17/10</p>
              <p className="text-6xl">Manhã</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 as 9:40</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-[#0056B2] w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">Coffee Break/Networking</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:40 as 10:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around">
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-[#0056B2] w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Oficinas</p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Workshop IOT</p>
                <p>Com <span className="font-bold">Gladimir Catarino, Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-[#0056B2] w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Palestras</p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Mercado de Trabalho</p>
                <p>Com <span className="font-bold">Eduardo Roveré (ATLAS), Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
            </div>

            <NavLink
              to="/inscricao"
              className="border-2 bg-[#0056B2] text-white rounded-3xl text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
            >
              Quero Participar
            </NavLink>

            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">17/10</p>
              <p className="text-6xl">Noite</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 as 9:40</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-[#0056B2] w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">Coffee Break/Networking</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:40 as 10:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around">
            <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-[#0056B2] w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Oficinas</p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Workshop IOT</p>
                <p>Com <span className="font-bold">Gladimir Catarino, Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-[#0056B2] w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Palestras</p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Mercado de Trabalho</p>
                <p>Com <span className="font-bold">Eduardo Roveré (ATLAS), Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
            </div>

            <NavLink
              to="/inscricao"
              className="border-2 bg-[#0056B2] text-white rounded-3xl text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
            >
              Quero Participar
            </NavLink>

          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0065D2] to-[#004B9D]">
          <div className="flex flex-col items-center justify-center text-3xl mt-20 py-40 bg-[url('predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-white">
            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">18/10</p>
              <p className="text-6xl">Manhã</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 as 9:40</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">Coffee Break/Networking</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:40 as 10:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around">
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Oficinas</p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Workshop IOT</p>
                <p>Com <span className="font-bold">Gladimir Catarino, Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Palestras</p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Mercado de Trabalho</p>
                <p>Com <span className="font-bold">Eduardo Roveré (ATLAS), Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
            </div>

            <NavLink
              to="/inscricao"
              className="border-2 border-white bg-[#313131] rounded-3xl text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
            >
              Quero Participar
            </NavLink>

            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">18/10</p>
              <p className="text-6xl">Noite</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 as 9:40</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">Coffee Break/Networking</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:40 as 10:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around">
            <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Oficinas</p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Workshop IOT</p>
                <p>Com <span className="font-bold">Gladimir Catarino, Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">10:00 as 10:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
              <div className="flex items-center mr-[-29rem]">
                <p className="transform -rotate-90">Simultâneo</p>
                <hr className="border-1 border-white w-72 transform -rotate-90 ml-[-12rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Palestras</p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Mercado de Trabalho</p>
                <p>Com <span className="font-bold">Eduardo Roveré (ATLAS), Sala Ex: 203</span></p>
                <p>Horário: <span className="font-bold">11:00 as 11:50</span></p>
                <p className="font-bold">Oficina 2</p>
                <p>Com <span className="font-bold">(PROFESSOR), Sala Ex: 205</span></p>
              </div>
            </div>

            <NavLink
              to="/inscricao"
              className="border-2 border-white bg-[#313131] rounded-3xl text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
            >
              Quero Participar
            </NavLink>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Programacao;
