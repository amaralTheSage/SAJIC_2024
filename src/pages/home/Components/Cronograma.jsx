import React from "react";
import SecoesDoCronograma from "./SecoesDoCronograma";

function Cronograma() {
  return (
    <section className="bg-[#0056B3] bg-[url('/predio_lines.svg')] bg-center bg-no-repeat bg-contain py-16 text-white">
      <h2 className="w-11/12 sm:w-4/5 lg:w-1/2 text-center mb-24 m-auto font-semibold text-2xl md:text-3xl">
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

        {/* GESTÃO & MERCADO*/}
        <SecoesDoCronograma assunto={"gestão"} reverse={true}>
          Junte-se a nós para uma série de palestras sobre gestão e o mercado de
          trabalho, onde especialistas renomados compartilharão estratégias e
          melhores práticas para desenvolvimento de carreira, gestão de equipes
          e networking. Este evento é perfeito para estudantes que prentendem se
          inserir no mercado de trabalho ou se tornar líderes e gestores
          profissionais. Venha se inspirar e conectar-se com profissionais do
          setor!
        </SecoesDoCronograma>
      </div>
    </section>
  );
}

export default Cronograma;
