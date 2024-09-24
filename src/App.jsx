import Header from "./Components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="">
        {/* CARROSSEL */}
        <section className="bg-gray-600 min-h-[85vh] flex items-center justify-center">
          <img src="hero_img_1_text.png" alt="" className="w-1/2" />
        </section>

        {/* SEÇAO 2 */}
        <section className="bg-[url('logo_senac_section2.png')] bg-cover h-[80vh] m-auto flex justify-center">
          <div className="w-3/5 m-auto text-lg">
            <h2
              className="uppercase font-semibold
          "
            >
              Sajic 4ª Edição | 17, 18 e 19 de outubro de 2024
            </h2>
            <p>
              A Semana Acadêmica do UniSenac é um evento que oferece uma série
              de atividades acadêmicas, culturais e profissionais, voltadas para
              o desenvolvimento de competências e a troca de conhecimentos entre
              alunos, professores e o público em geral. A programação inclui
              palestras, oficinas, debates e workshops sobre temas diversos,
              como tecnologia, inovação, diversidade, empreendedorismo, e
              tendências de mercado.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
