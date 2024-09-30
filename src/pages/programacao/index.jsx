import EventoPalestra from "./EventoPalestra";
import Circulos from "./Circulos";
import ProgramacaoHorario from "./ProgramacaoHorario";
import Participar from "./Participar";

function Programacao() {
  return (
    <>
      <main>
        <section className="md:w-4/5 w-11/12 m-auto">
          <h1 className="mt-32 md:text-5xl text-2xl font-semibold text-[#0056B3]">
            Programação SAJIC | <span className="font-bold">2024</span>
          </h1>
          <p className="mt-10 font-light md:text-3xl sm:text-lg text-center">
            Prepare-se para viver uma experiência incrível na 4° Edição da
            SAJIC, onde inovação, aprendizado e networking se unem em um só
            lugar! Imagine um espaço dinâmico e interativo, repleto de empresas
            de ponta, workshops práticos e palestras inspiradoras, tudo
            preparado para você sair de lá mais conectado, informado e pronto
            para transformar ideias em ações.
          </p>
        </section>

        <Circulos/>

        <section className="bg-gradient-to-b from-[#0065D2] to-[#004B9D]">
          <div className="flex flex-col items-center justify-center mt-20 py-40 bg-[url('/predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-white">
            {/* 16/10 Manhã */}

            <ProgramacaoHorario
              data="16/10"
              turno="Manhã"
              horarioCreden="9:00 às 9:15"
              horarioCoffe="10:20 às 10:35"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-center">
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

            <Participar />

            <ProgramacaoHorario
              data="16/10"
              turno="Noite"
              horarioCreden="19:00 às 19:30"
              horarioCoffe="19:30 às 20:00"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-center md:items-start">
              <EventoPalestra
                nome_1={"Abertura"}
                horario_1={"20:00"}
                nome_2={`Conversa com empresas - TI e Gestão`}
                prof_2={"Nathalia na mediação"}
                sala_2={'a definir'}
                horario_2={"20:30"}
              />
            </div>

            <Participar />

          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center mt-20 py-40 bg-[url('/predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-[#0056B2]">

            <ProgramacaoHorario
              data="17/10"
              turno="Manhã"
              horarioCreden="9:00 às 9:15"
              horarioCoffe="10:20 às 10:35"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-center md:items-start">
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

            <Participar isWhiteBackground />

            <ProgramacaoHorario
              data="17/10"
              turno="Noite"
              horarioCreden="19:00 às 19:10"
              horarioCoffe="20:15 às 20:30"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-around items-start">
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

            <Participar isWhiteBackground />

          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0065D2] to-[#004B9D]">
          <div className="flex flex-col items-center justify-center text-3xl mt-20 py-40 bg-[url('/predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-white">

            <ProgramacaoHorario
              data="18/10"
              turno="Manhã"
              horarioCreden="9:00 às 9:15"
              horarioCoffe="10:20 às 10:35"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-around items-start">
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

            <Participar/>

            <ProgramacaoHorario
              data="18/10"
              turno="Noite"
              horarioCreden="19:00 às 19:10"
              horarioCoffe="20:15 às 20:30"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-32 mt-32 justify-around items-start">
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

            <Participar/>
          </div>
        </section>
      </main>
    </>
  );
}

export default Programacao;
