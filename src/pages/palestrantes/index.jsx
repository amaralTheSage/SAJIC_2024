import PalestranteFoto from "../../Components/PalestranteFoto";
import PalestranteSelecionado from "../../Components/PalestranteSelecionado";

function Palestrantes() {
  return (
    <>
      <main>

        <section className="py-10">

          <h2 className="text-center font-bold md:text-5xl text-3xl pb-20">Palestrantes</h2>
          {/* <h3 className="text-center font-light md:text-xl text-lg">Tecnologia</h3> */}

          <section className="flex flex-wrap justify-center py-10 gap-[8vw]">
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
            <PalestranteFoto
              foto="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733926/190129-sherri-davidoff-white-hat-hacker-se-529p.jpg"
              nome="Um nome maior do que deveria"
              empresa="Empresa com nome grande"
              tema="tema enorme jesus ahhhhhhhh"
            />
          </section>
        </section>

        <PalestranteSelecionado />
      </main>
    </>
  );
}
export default Palestrantes;
