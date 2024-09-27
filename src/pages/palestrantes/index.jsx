import { useState } from "react";
import PalestranteFoto from "../../Components/PalestranteFoto";
import PalestranteSelecionado from "../../Components/PalestranteSelecionado";

function Palestrantes() {
  const palestrantes = [
    {
      prof: "Gladimir Catarino",
      empresa: "UniSenac",
      tema: "Internet of Things",
      foto: "https://avatars.githubusercontent.com/u/26561092?v=4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum enim excepturi perferendis distinctio voluptatibus.",
    },
    {
      prof: "Pablo Chiaro de Rosa",
      empresa: "UniSenac",
      tema: "Inteligência Artificial",
      foto: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum enim excepturi perferendis distinctio voluptatibus.",
    },
  ];

  const [palestrante, setPalestrante] = useState();

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
