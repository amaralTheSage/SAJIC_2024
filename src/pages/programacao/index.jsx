import { NavLink } from "react-router-dom";
import EventoPalestra from "../../Components/EventoPalestra";

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
            {/* 16/10 Manhã */}
            <div className="w-4/5 m-auto flex flex-col items-center mt-32">
              <p className="font-bold text-8xl">16/10</p>
              <p className="text-6xl">Manhã</p>
              <div className="flex gap-8 justify-center items-center mt-20 ml-16">
                <div>
                  <p className="text-[1.75rem] font-bold">Credenciamento</p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">9:00 às 9:15</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">
                    Coffee Break/Networking
                  </p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">10:20 às 10:35</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-4/5 flex gap-32 mt-32 justify-evenly items-start text-xl">
              <EventoPalestra
                prof_1={"William Machado"}
                nome_1={"Palestra: As implicações éticas nas tecnologias digitais"}
                sala_1={'a definir'}
                horario_1={"9:20"}
                nome_2={"Oficina: NextJS 14 - Estrutura de uma aplicação profissional"}
                prof_2={"Ítalo Nolasco Ramos"}
                sala_2={'a definir'}
                horario_2={"9:20"}
              />

              <EventoPalestra
                nome_1={"Palestra: Do Conceito ao Lançamento - Gestão Ágil de Projetos de Jogos Digitais"}
                prof_1={"Adriana Silva da Silva"}
                sala_1={'a definir'}
                horario_1={"10:00"}
              />
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
                    Horário: <span className="font-bold">19:00 às 19:30</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">
                    Coffee Break/Networking
                  </p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">19:30 às 20:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around items-start text-xl">
              <EventoPalestra
                nome_1={"Abertura"}
                horario_1={"20:00"}
                nome_2={`Conversa com empresas - TI e Gestão`}
                prof_2={"Nath?? na mediação"}
                sala_2={'a definir'}
                horario_2={"20:30"}
              />
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
                    Horário: <span className="font-bold">9:00 às 9:15</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-[#0056B2] w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">
                    Coffee Break/Networking
                  </p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">10:20 às 10:35</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-32 mt-32 justify-around items-start text-xl">
              <EventoPalestra
                prof_1={"Gladimir Catarino"}
                nome_1={"Oficina: Workshop IoT"}
                sala_1={203}
                horario_1={"9:20"}
                nome_2={"Oficina: Git e GitHub"}
                prof_2={"Karol"}
                sala_2={'a definir'}
                horario_2={"9:20"}
              />
              
              <EventoPalestra
                nome_1="Palestra: Desenvolvimento de Games"
                prof_1="Débora Carvalho"
                sala_1={'a definir'}
                horario_1="10:40"
                nome_2={"Palestra: Mercado de Trabalho"}
                prof_2={"Eduardo Roveré"}
                sala_2={'a definir'}
                horario_2={"10:40"}
              />
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
                    Horário: <span className="font-bold">19:00 às 19:10</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-[#0056B2] w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">
                    Coffee Break/Networking
                  </p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">20:15 às 20:30</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-4/5 flex gap-32 mt-32 justify-around items-start text-xl">
              <EventoPalestra
                prof_1={"Léo"}
                nome_1={"Oficina de Canva"}
                sala_1={'a definir'}
                horario_1={"19:15"}
                nome_2={"Palestra: Web Vitals, como a experiência do usuário vai afetar o SEO do seu site?"}
                prof_2={"Thiago Nunes Batista"}
                sala_2={'a definir'}
                horario_2={"20:40"}
              />
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
                    Horário: <span className="font-bold">9:00 às 9:15</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">
                    Coffee Break/Networking
                  </p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">10:20 às 10:35</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-4/5 flex gap-32 mt-32 justify-around items-start text-xl">
              <EventoPalestra
                prof_1={"Thiago Nunes Batista"}
                nome_1={"Palestra: Web APIs, O Front-end além de botões coloridos"}
                sala_1={'a definir'}
                horario_1={"10:40"}
                prof_2={"Ítalo Nolasco Ramos"}
                nome_2={"Palestra: Construindo e validando um MVP: Gerar valor mitigando riscos"}
                sala_2={'a definir'}
                horario_2={"10:40"}
              />
              
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
                    Horário: <span className="font-bold">19:00 às 19:10</span>
                  </p>
                </div>
                <hr className="flex items-center justify-center border-1 border-white w-20 transform -rotate-90 m-auto" />
                <div>
                  <p className="text-[1.75rem] font-bold">
                    Coffee Break/Networking
                  </p>
                  <p className="text-[1.75rem] font-light">
                    Horário: <span className="font-bold">20:15 às 20:30</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-4/5 flex gap-32 mt-32 justify-around items-start text-xl">
              <EventoPalestra
                prof_1={"Pablo Chiaro"}
                nome_1={"Workshop: Agentes de IA: aplicações além do Chat com LLM e Langchain"}
                sala_1={'a definir'}
                horario_1={"19:15"}
                nome_2={"Palestra: AINDA NÃO SEI"}
                prof_2={"Flávio Badia"}
                sala_2={'a definir'}
                horario_2={"19:15"}
              />
              
              <EventoPalestra
                nome_1="Palestra: O Futuro da Carreira de TI"
                prof_1="Régis Neves Machado"
                sala_1={'a definir'}
                horario_1="19:15"
                nome_2="Palestra: Era hiperconectada: O Direito Digital e crimes digitais"
                prof_2="Andréa Barros Augé"
                sala_2={'a definir'}
                horario_2="20:40"
              />

              <EventoPalestra
                nome_1="Palestra: Neuromarketing - comece por aqui"
                prof_1="Nanda Fersula"
                sala_1={'a definir'}
                horario_1="20:40"
              />
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
    </>
  );
}

export default Programacao;
