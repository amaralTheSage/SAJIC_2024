import Carrossel from "./Components/Carrossel";
import Cronograma from "./Components/Cronograma";
// import Empresas from "./Components/Empresas";
// import Patrocinadores from "./Components/Patrocinadores";
import Apresentacao from "./Components/Apresentacao";
import ScrollToTopButton from "../../Components/ScrollToTop";

const carrossel_imgs = [
  "/mulher_carrossel.webp",
  "https://t4.ftcdn.net/jpg/07/04/20/19/360_F_704201907_r03FpXUhQG4habHGtuq0hlITtRMbaHfx.jpg",
  "https://paintspot.ca/wp-content/uploads/2023/07/666-Pastel-Green.jpg",
];

export default function Home() {
  return (
    <>
      <main className="">
        {/* CARROSSEL */}

        <Carrossel imgs={carrossel_imgs} />

        {/* SEÇAO 2 */}
        <Apresentacao />
        <Cronograma />
        {/* <Empresas /> */}
        {/* <Patrocinadores /> */}
        <ScrollToTopButton />
      </main>
    </>
  );
}
