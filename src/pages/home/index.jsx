import Carrossel from "./Components/Carrossel";
import Cronograma from "./Components/Cronograma";
import Empresas from "./Components/Empresas";
import Patrocinadores from "./Components/Patrocinadores";
import Apresentacao from "./Components/Apresentacao";

const carrossel_imgs = [
  "/carrossel/img1.webp",
  "/carrossel/img2.webp",
  "/carrossel/img3.webp",
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
        <Empresas />
        <Patrocinadores />
      </main>
    </>
  );
}
