import PalestranteFoto from "../../Components/PalestranteFoto";
import PalestranteSelecionado from "../../Components/PalestranteSelecionado";

function Palestrantes() {
  return (
    <>
      <main>
        <section className="py-20">
          <h2 className="text-center font-bold md:text-4xl text-3xl">
            Palestrantes
          </h2>
          {/* <h3 className="text-center font-light md:text-xl text-lg">Tecnologia</h3> */}

          <section className="w-2/3 sm:w-9/12 m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12 gap-[8vw] ">
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />

            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />

            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />

            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />

            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />

            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Pablo de Chiaro Rosa"
              empresa="Unisenac"
              tema="Inteligência Artificial"
            />
          </section>
        </section>

        <PalestranteSelecionado />
      </main>
    </>
  );
}
export default Palestrantes;
