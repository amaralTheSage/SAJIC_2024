import Carrossel from "./Components/Carrossel";
import Cronograma from "./Components/Cronograma";
import Header from "./Components/Header";

const carrossel_imgs = [
  "https://www.travelandleisure.com/thmb/KTIha5CLifSoUD3gx0YP51xc3rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue0517-4dfc85cb0200460ab717b101ac07888f.jpg",
  "https://t4.ftcdn.net/jpg/07/04/20/19/360_F_704201907_r03FpXUhQG4habHGtuq0hlITtRMbaHfx.jpg",
  "https://paintspot.ca/wp-content/uploads/2023/07/666-Pastel-Green.jpg",
];

export default function App() {
  return (
    <>
      <Header />
      <main className="">
        {/* CARROSSEL */}

        <Carrossel imgs={carrossel_imgs} />

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

        <Cronograma />
      </main>
    </>
  );
}
