import Carrossel from "./Components/Carrossel";
import Cronograma from "./Components/Cronograma";
// import Empresas from "./Components/Empresas";
// import Patrocinadores from "./Components/Patrocinadores";
import Apresentacao from "./Components/Apresentacao";
import ScrollToTopButton from "../../Components/ScrollToTop";
import Patrocinio from "./Components/Patrocinio";

const carrossel_imgs = [
  "/carrossel/img1.webp",
  "/carrossel_2.png",
  "/carrossel_3.png",
];

export default function Home() {
  return (
    <>
      <main>
        <Carrossel imgs={carrossel_imgs} />

        {/* SEÇAO 2 */}
        <Apresentacao />
        <Cronograma />
        <Patrocinio />

        <ScrollToTopButton />
      </main>
    </>
  );
}
