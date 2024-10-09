import EventoPalestra from "./EventoPalestra";
import Circulos from "./Circulos";
import ProgramacaoHorario from "./ProgramacaoHorario";
import Participar from "./Participar";
import ScrollToTopButton from "../../Components/ScrollToTop";

function Programacao() {
  return (
    <>
      <main>
        <section className="md:w-4/5 w-11/12 m-auto">
          <h1 className="mt-32 md:text-5xl text-2xl font-semibold text-[#0056B3]">
            Programação SAJIC | <span className="font-bold">2024</span>
          </h1>
          <p className="mt-10 font-light md:text-3xl sm:text-lg text-justify">
            Prepare-se para viver uma experiência incrível na 4° Edição da
            SAJIC, onde inovação, aprendizado e networking se unem em um só
            lugar! Imagine um espaço dinâmico e interativo, repleto de empresas
            de ponta, workshops práticos e palestras inspiradoras, tudo
            preparado para você sair de lá mais conectado, informado e pronto
            para transformar ideias em ações.
          </p>
        </section>

        <Circulos />

        {/* 16/10 */}
        <section className="bg-gradient-to-b from-[#0065D2] to-[#004B9D]">
          <div className="flex flex-col items-center justify-center mt-20 py-40 bg-[url('/predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-white">
            {/* 16/10 Manhã */}
            <ProgramacaoHorario
              data="16/10"
              turno="Manhã"
              horarioCreden="9:00 às 9:15"
              horarioCoffe="10:20 às 10:35"
            />

            <div className="w-4/5 flex flex-col *:md:w-1/3 md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-center text-xl">
              <EventoPalestra
                prof_1={"William Machado"}
                nome_1={
                  "Palestra: As implicações éticas nas tecnologias digitais"
                }
                horario_1={"9:20"}
                nome_2={
                  "Oficina: NextJS 14 - Estrutura de uma aplicação profissional"
                }
                prof_2={"Ítalo Nolasco Ramos"}
                horario_2={"9:20"}
              />

              <EventoPalestra
                nome_1={
                  "Palestra: Do Conceito ao Lançamento - Gestão Ágil de Projetos de Jogos Digitais"
                }
                prof_1={"Adriana Silva da Silva"}
                horario_1={"10:40"}
              />
            </div>

            <Participar />

            {/* 16/10 Noite */}
            <ProgramacaoHorario
              data="16/10"
              turno="Noite"
              horarioCreden="19:00 às 19:30"
              horarioCoffe="19:30 às 20:00"
            />

            <div className="w-4/5 flex flex-col *:md:w-1/3 md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-center md:items-start text-xl">
              <EventoPalestra
                nome_1={"Abertura"}
                horario_1={"20:00"}
                nome_2={`Conversa com empresas - TI e Gestão`}
                prof_2={"Nathalia na mediação"}
                horario_2={"20:30"}
              />
            </div>

            <Participar />
          </div>
        </section>

        {/* 17/10 */}
        <section>
          <div className="flex flex-col items-center justify-center mt-20 py-40 bg-[url('/predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-[#0056B2]">
            {/* 17/10 Manhã  */}
            <ProgramacaoHorario
              data="17/10"
              turno="Manhã"
              horarioCreden="9:00 às 9:15"
              horarioCoffe="10:20 às 10:35"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 *:md:w-1/3 md:gap-32 mt-28 md:mt-32 justify-center md:items-start text-xl">
              <EventoPalestra
                prof_1={"Marcelo Oscaberry e Lorenzo Gonçalves"}
                nome_1={"Oficina: Criação e Upload de portfólio"}
                horario_1={"9:20"}
                nome_2={
                  "Palestra: Como Equilibrar Gestão e Velocidade para Escalar uma Startup"
                }
                prof_2={"Dalton Gaia da Silva"}
                horario_2={"9:20"}
              />

              <EventoPalestra
                nome_1="Palestra: Jogos do Futuro - O Papel da Inteligência Artificial"
                prof_1="Débora Carvalho"
                horario_1="10:40"
              />
            </div>

            <Participar isWhiteBackground />

            {/* 17/10 Noite  */}
            <ProgramacaoHorario
              data="17/10"
              turno="Noite"
              horarioCreden="19:00 às 19:10"
              horarioCoffe="20:15 às 20:30"
            />

            <div className="w-4/5 flex flex-col lg:grid grid-cols-3 *:w-full gap-24 mt-28 md:mt-32 justify-between items-start text-xl">
              <EventoPalestra
                prof_1={"Vitor Vitolla"}
                nome_1={"Palestra: Debugando Hábitos"}
                horario_1={"19:15"}
                nome_2={
                  "Palestra: Startup Take Off - O impulso que você precisa para alcançar os seus objetivos!"
                }
                prof_2={
                  "Júlia Kerolaine Machado Garcia e Sibeli da Silva Avila"
                }
                horario_2={"19:15"}
              />

              <EventoPalestra
                prof_1={"Ana Carolina Giudice Beber"}
                nome_1={
                  "Oficina: Minicurso de Construção de Projetos Acadêmicos de Iniciação Científica"
                }
                horario_1={"19:15"}
                nome_2={
                  "Oficina: Desvendando o playwright - Automação moderna para testes Web - Um mergulho técnico"
                }
                prof_2={"Augusto Rickes"}
                horario_2={"19:15"}
              />

              <EventoPalestra
                prof_1={"Thiago Nunes Batista"}
                nome_1={
                  "Palestra: Web Vitals, como a experiência do usuário vai afetar o SEO do seu site?"
                }
                horario_1={"20:40"}
                nome_2={"Oficina: Criação e Upload de portfólio"}
                prof_2={"João Otávio"}
                horario_2={"20:40"}
              />

              <div className="col-start-2">
                <EventoPalestra
                  prof_1={"Eduardo Monks"}
                  nome_1={
                    "Palestra: Como funcionam os serviços alternativos de streaming de vídeo (IPTV)"
                  }
                  horario_1={"20:40"}
                />
              </div>
            </div>

            <Participar isWhiteBackground />
          </div>
        </section>

        {/* 18/10  */}
        <section className="bg-gradient-to-b from-[#0065D2] to-[#004B9D]">
          <div className="flex flex-col items-center justify-center text-3xl mt-20 py-40 bg-[url('/predio_lines.svg')]  m-auto bg-no-repeat bg-cover text-white">
            {/* 18/10 Manhã  */}
            <ProgramacaoHorario
              data="18/10"
              turno="Manhã"
              horarioCreden="9:00 às 9:15"
              horarioCoffe="10:20 às 10:35"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-24 md:gap-32 mt-28 md:mt-32 justify-around items-start text-xl">
              <EventoPalestra
                prof_1={"Marcelo da Siveira Siedler"}
                nome_1={"Oficina: Desenvolvimento de Jogos usando Unity"}
                horario_1={"9:15"}
                prof_2={"Gladimir Catarino"}
                nome_2={"Oficina: WorkShop IoT"}
                horario_2={"9:20"}
              />

              <EventoPalestra
                prof_1={"Ítalo Nolasco Ramos"}
                nome_1={
                  "Palestra: Construindo e validando um MVP: Gerar valor mitigando riscos"
                }
                horario_1={"10:40"}
                prof_2={"Eduardo Roveré"}
                nome_2={
                  "Palestra: Trilhando carreiras na tecnologia - Uma visão das práticas de sucesso do time Atlas"
                }
                horario_2={"10:40"}
              />
            </div>

            <Participar />

            {/* 18/10 Noite  */}
            <ProgramacaoHorario
              data="18/10"
              turno="Noite"
              horarioCreden="19:00 às 19:10"
              horarioCoffe="20:15 às 20:30"
            />

            <div className="w-4/5 flex flex-col md:flex-row gap-32 mt-32 justify-around items-start text-xl">
              <EventoPalestra
                prof_1={"Pablo Chiaro"}
                nome_1={
                  "Oficina: Agentes de IA - aplicações além do Chat com LLM e Langchain"
                }
                horario_1={"19:15"}
                nome_2={
                  "Oficina: Construção de uma api laravel com algumas rotas e autenticação para testar com postman"
                }
                prof_2={"Augusto Rickes"}
                horario_2={"19:15"}
              />

              <EventoPalestra
                nome_1="Palestra: O Futuro da Carreira de TI"
                prof_1="Régis Neves Machado"
                horario_1="19:15"
                nome_2="Palestra: Era hiperconectada: O Direito Digital e crimes digitais"
                prof_2="Andréa Barros Augé"
                horario_2="20:40"
              />

              <EventoPalestra
                nome_1="Palestra: Neuromarketing - comece por aqui"
                prof_1="Nanda Fersula"
                horario_1="20:40"
                nome_2="Palestra: Aplicando métodos Ágeis com Scrum"
                prof_2="Eduardo Prestes da Costa"
                horario_2="20:40"
              />
            </div>

            <Participar />

            <ScrollToTopButton />
          </div>
        </section>
      </main>
    </>
  );
}

export default Programacao;
