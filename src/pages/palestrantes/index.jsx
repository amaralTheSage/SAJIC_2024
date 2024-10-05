import { useState } from "react";
import PalestranteFoto from "../../Components/PalestranteFoto";
import PalestranteSelecionado from "../../Components/PalestranteSelecionado";
import { palestrantes } from "./palestrantes";
import ScrollToTopButton from "../../Components/ScrollToTop";

function Palestrantes() {
  const [palestrante, setPalestrante] = useState(palestrantes[0]);

  return (
    <>
      <main>
        <section className="py-20">
          <h2 className="text-center font-bold md:text-4xl text-3xl">
            Palestrantes
          </h2>
          <h3 className="text-center font-light md:text-xl text-lg m-2">
            Interessado(a)? Clique em um para saber mais!
          </h3>

          <section className="w-10/12 sm:w-9/12 m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12 gap-[8vw] ">
            {palestrantes.map((p) => {
              return (
                <div
                  key={p.prof}
                  onClick={() => {
                    setPalestrante(p);
                  }}
                >
                  <PalestranteFoto p={p} />
                  <ScrollToTopButton />
                </div>
              );
            })}
          </section>
        </section>

        {palestrante && <PalestranteSelecionado p={palestrante} />}
        
      </main>
    </>
  );
}
export default Palestrantes;
