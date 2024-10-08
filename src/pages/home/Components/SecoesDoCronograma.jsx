import CardPalestrante from "./CardPalestrante";
import VerProgramacao from "./VerProgramacao";
import CarrosselPalestrantes from "./CarrosselPalestrantes";

function SecoesDoCronograma({ assunto, reverse = false, children }) {
  return (
    <div className="my-32">
      <div
        className={`flex justify-center gap-16 flex-wrap mx-[8vw] md:mx-[12vw] lg:flex-nowrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        {/* IMAGEM */}
        <div className="flex justify-center">
          <div className="relative ">
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm absolute top-3 right-3 bg-white"></div>
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm absolute -top-3 left-3 bg-orange-400"></div>
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm relative z-10">
              {/* Senhoras e senhores, o nome vertical responsivo é real */}
              <figure className="flex w-full h-full items-center relative">
                <img
                  src={
                    (assunto.toLowerCase() == "tecnologia" &&
                      "tecnologia_thumb.png") ||
                    (assunto.toLowerCase() == "gestão" && "gestão_thumb.png")
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
                {reverse ? (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:left-60 sm:rotate-90">
                    {assunto === "gestão" ? "Gestão e Mercado" : assunto}
                  </figcaption>
                ) : (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:-left-60 sm:-rotate-90">
                    {assunto === "gestão" ? "Gestão e Mercado" : assunto}
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div
          className={`
            ${!reverse && "flex flex-col items-end"}`}
        >
          <p
            className={`text-lg font-light max-lg:text-center mb-4 ${
              !reverse && "text-right"
            }`}
          >
            {children}
          </p>

          <VerProgramacao />
        </div>
      </div>

      {/* PALESTRANTES */}
      <div className="mt-24">
        <h2 className="font-semibold text-center mb-5 text-3xl mx-[5vw] sm:mx-[10vw]">
          Palestrantes de {assunto} confirmados!
        </h2>

        {/* grid grid-cols-2 gap-4 md:grid-cols-4 */}
        <div>
          {/* TECNOLOGIA */}
          {assunto.toLowerCase() == "tecnologia" && (
            <CarrosselPalestrantes>
              {/* 16/10 */}
              <CardPalestrante
                prof="Ítalo Nolasco Ramos"
                data1="16/10, das 09:20 às 11:40"
                empresa="Nav9"
                tema1="NextJS 14: Estrutura de uma aplicação profissional"
                image="/palestrantes/italo_nolasco.jpeg"
              />
              <CardPalestrante
                prof="William Machado"
                data1="16/10, das 9:20 às 10:20"
                empresa="Colégio Tiradentes"
                image="/palestrantes/william_machado.png"
                tema1="As Implicações Éticas nas Tecnologias Digitais"
              />

              {/* 17/10 */}
              <CardPalestrante
                prof="Marcelo e Lorenzo"
                data1="17/10, das 09:20 às 10:20"
                empresa="UniSenac"
                tema1="Github Pages: Montando e hospedando seu portifólio de graça com Github Pages"
                image="/palestrantes/marcelo_lorenzo.jpeg"
              />
              <CardPalestrante
                prof="Débora Carvalho"
                data1="17/10, das 10:40 às 11:40"
                empresa="UniSenac"
                tema1="Jogos do Futuro: O Papel da Inteligência Artificial"
                image="/palestrantes/debora_carvalho.jpeg"
              />
              <CardPalestrante
                prof="Thiago Nunes Batista"
                data1="17/10, das 20:30 às 21:30"
                empresa="ATLAS"
                image="/palestrantes/tiago_batista.jpg"
                tema1="Web Vitals: Como a experiência do usuário vai afetar o SEO do seu site?"
              />
              <CardPalestrante
                prof="João Otávio"
                data1="17/10, das 20:40 às 21:40"
                empresa="UniSenac"
                tema1="Criação e Upload de Portifólio"
                image="/palestrantes/joao_otavio.jpg"
              />

              {/* 18/10 */}
              <CardPalestrante
                prof="Marcelo Siedler"
                data1="18/10, das 09:15 às 12:00"
                empresa="IFSul"
                tema1="Desenvolvimento de Jogos usando Unity"
                image="/palestrantes/marcelo_siedler.png"
              />
              <CardPalestrante
                prof="Gladimir Catarino"
                data1="18/10, das 09:20 às 10:20"
                empresa="UniSenac"
                tema1="Internet of Things"
                image="/palestrantes/gladLindo.jpg"
              />
              <CardPalestrante
                data1="18/10, das 10:40 às 11:40"
                prof="Eduardo Roveré"
                empresa="ATLAS"
                tema1="Trilhando carreiras na tecnologia: Uma visão das práticas de sucesso do time Atlas"
                image="/palestrantes/eduardo_atlas.jpg"
              />
              <CardPalestrante
                data1="18/10, das 19:15 às 20:15"
                prof="Pablo Chiaro"
                empresa="UniSenac"
                tema1="Agentes de IA: aplicações além do Chat com LLM e Langchain"
                image="/palestrantes/pablo.png"
              />
              <CardPalestrante
                prof="Augusto Rickes"
                data1="18/10, das 19:15 às 20:15"
                empresa="ATLAS"
                tema1="Construção de uma API Laravel com rotas e autenticação para testar com Postman"
                image="/palestrantes/augusto_rickes.jpg"
                tema2="Desvendando o playwright: Automação moderna para testes Web"
                data2="17/10, das 19:15 às 20:15"
              />
            </CarrosselPalestrantes>
          )}
          {/* GESTÃO */}

          {assunto.toLowerCase() == "gestão" && (
            <CarrosselPalestrantes gestao={true}>
              {/* 16/10 */}
              <CardPalestrante
                prof="Adriana Silva da Silva"
                data1="16/10, das 10:40 às 11:40"
                empresa="Main Leaf"
                image="/palestrantes/adriana_silva.jpg"
                tema1="Do Conceito ao Lançamento: Gestão Ágil de Projetos de Jogos Digitais"
              />

              {/* 17/10 */}
              <CardPalestrante
                prof="Dalton Gaia da Silva"
                data1="17/10, das 09:20 às 10:20"
                empresa="Echo"
                tema1="Como Equilibrar Gestão e Velocidade para Escalar uma Startup"
                image="/palestrantes/dalton_gaia.jpg"
              />
              <CardPalestrante
                prof="Vitor Vitolla"
                data1="17/10, das 19:15 às 20:15"
                empresa="ATLAS"
                tema1="Debugando Hábitos"
                image="/palestrantes/vitor_vitolla.jpeg"
              />

              {/* 18/10 */}
              <CardPalestrante
                prof="Ítalo Nolasco Ramos"
                data1="18/10, das 10:40 às 11:40"
                empresa="Nav9"
                tema1="Construindo e validando um MVP: Gerar valor mitigando riscos"
                image="/palestrantes/italo_nolasco.jpeg"
              />
              <CardPalestrante
                prof="Nanda Fersula"
                data1="18/10, das 19:10 às 20:00"
                empresa="Instituto Sigales"
                image="/palestrantes/nanda_fersula.jpg"
                tema1="Neuromarketing - Comece por Aqui"
              />
              <CardPalestrante
                prof="Régis Neves Machado"
                data1="18/10, das 19:10 às 20:00"
                empresa="Globo"
                tema1="O Futuro da Carreira de TI"
                image="/palestrantes/regis_machado.jpg"
              />
              <CardPalestrante
                prof="Andréa Barros Augé"
                tema1="Era hiperconectada: O Direito Digital e crimes digitais"
                data1="18/10, das 20:30 às 21:30"
                empresa=""
                image="/palestrantes/andrea_auge.jpeg"
              />
              <CardPalestrante
                prof="Eduardo Prestes"
                data1="18/10, das 20:40 às 21:40"
                empresa="Compass UOL"
                tema1="Aplicando métodos ágeis com Scrum"
                image="/palestrantes/eduardo_prestes.jpg"
              />
            </CarrosselPalestrantes>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecoesDoCronograma;
