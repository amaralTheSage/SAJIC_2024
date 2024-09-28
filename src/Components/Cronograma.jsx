import React from "react";
import CardPalestrante from "./CardPalestrante";
import SecoesDoCronograma from "./SecoesDoCronograma";

function Cronograma() {
  return (
    <section className="bg-[#0056B3] py-16 text-white">
      <h2 className="w-4/5 lg:w-1/2 text-center mb-24 m-auto font-semibold text-3xl">
        Prepare-se para Oficinas, Networking e Palestras Imperdíveis!
      </h2>

      {/* TECNOLOGIA */}
      <div className=" m-auto">
        <SecoesDoCronograma assunto={"tecnologia"}>
          Palestras onde especialistas do setor compartilharão insights
          inovadores e tendências emergentes. Ideal para estudantes, o evento
          promoverá discussões interativas e networking, proporcionando uma
          oportunidade única de aprendizado e troca de experiências. Não perca a
          chance de se atualizar e se inspirar com os líderes da tecnologia!
        </SecoesDoCronograma>

        <SecoesDoCronograma assunto={"gestão"} reverse={true}>
          Junte-se a nós para uma série de palestras sobre gestão, onde
          especialistas renomados compartilharão estratégias e melhores práticas
          para liderança eficaz, gestão de equipes e inovação organizacional.
          Este evento é perfeito para estudantes que prentendem se tornar
          líderes e gestores profissionais. Venha se inspirar e conectar-se com
          profissionais do setor!
        </SecoesDoCronograma>
        <SecoesDoCronograma assunto={"mercado"}>
          Participe das nossas palestras sobre o mercado de trabalho, onde
          especialistas discutirão as tendências atuais, as habilidades mais
          demandadas e as oportunidades emergentes na área. As sessões abordarão
          tópicos como desenvolvimento de carreira e preparação para
          entrevistas. Este evento é perfeito para profissionais, estudantes e
          aqueles que buscam se inserir ou se destacar no mercado de trabalho
          atual. Venha e conecte-se com profissionais!
        </SecoesDoCronograma>
      </div>
    </section>
  );
}

export default Cronograma;
