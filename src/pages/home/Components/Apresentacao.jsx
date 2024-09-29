export default function Apresentacao() {
  return (
    <section className="bg-[url('/logo_senac_section2.png')] bg-no-repeat bg-contain bg-center sm:h-screen h-[75vh]">
      <article className="3xl:px-[25vw] xl:px-[20vw] lg:px-[15vw] sm:px-[10vw] px-[5vw] gap-5 flex justify-center text-justify flex-col h-full">
        <h2 className="uppercase font-semibold 2xl:text-2xl">
          Sajic 4ª Edição | 16, 17 e 18 de outubro de 2024
        </h2>

        <p className="font-light text-xl 2xl:text-2xl">
          A Semana Acadêmica do UniSenac é um evento que oferece uma série de
          atividades acadêmicas, culturais e profissionais, voltadas para o
          desenvolvimento de competências e a troca de conhecimentos entre
          alunos, professores e o público em geral. A programação inclui
          palestras, oficinas, debates e workshops sobre temas diversos, como
          tecnologia, inovação, diversidade, empreendedorismo, e tendências de
          mercado.
        </p>
      </article>
    </section>
  );
}
