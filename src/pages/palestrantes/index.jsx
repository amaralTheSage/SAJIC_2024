import PalestranteFoto from "../../Components/PalestranteFoto";

function Palestrantes() {
  return (
    <>
      <main>

        <section>

          <h2 className="text-center font-bold md:text-5xl text-3xl">Palestrantes</h2>
          <h3 className="text-center font-light md:text-xl text-lg">Tecnologia</h3>

          <section className="flex flex-wrap justify-center py-10 gap-[10vw]">
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

        <section className="bg-[url('background_senc.png')] bg-center h-[76.25rem] flex">
          <div className="m-auto text-center">
            <img
              className="w-[35.9375rem] h-[35.9375rem] rounded-full"
              src="Foto-Palestrante.png"
              alt=""
            />
            <p className="text-[1.875rem] font-light border-2 rounded-[1.875rem] text-[#fff] mt-10 w-[27.3125rem] mx-[4.3125rem]">
              Nome
            </p>
          </div>
          <div className="m-auto text-left text-[#fff]">
            <p className="text-[1.5rem] font-light">lorem</p>
            <h2 className="text-[5rem] font-bold">Nome Palestrante</h2>
            <p className="w-[49.875rem] text-[1.5rem] font-light">
              Pablo De Chiaro Rosa é um professor universitário com vasta
              experiência em inteligência artificial (IA) e visão computacional.
              Mestre em Ciência da Computação e atualmente doutorando, ele se
              dedica ao ensino e pesquisa em tecnologias avançadas, como o uso
              de Python e bibliotecas como OpenCV para desenvolvimento de
              soluções em IA. Com mais de 10 anos de atuação na área, Pablo
              combina sua paixão pela programação com uma abordagem prática em
              seus projetos, que são amplamente compartilhados em plataformas
              como GitHub. Ele também é mentor e entusiasta da cultura nerd,
              sendo reconhecido por sua capacidade de guiar novos talentos no
              campo da computação .{" "}
              <a
                target="_blank"
                className="underline-offset-8"
                href="https://github.com/chiarorosa"
              >
                (GitHub)
              </a>
            </p>
            <div className="flex mt-9 justify-between w-[30rem]">
              <p className="text-[1.5rem] font-light">
                Data: <span className="text-[1.5rem] font-bold">18/10</span>
              </p>
              <p className="text-[1.5rem] font-light">
                Hora:{" "}
                <span className="text-[1.5rem] font-bold">
                  10:40 as 11:40 (Manhã)
                </span>
              </p>
            </div>
            <hr />
            <div className="flex mt-9 items-center justify-between w-[40rem]">
              <p className="text-[1.5rem] font-bold">Redes Sociais:</p>
              <img
                className="w-[4.6875rem] h-[4.6875rem]"
                src="ElipseRedesS.png"
                alt=""
              />
              <img
                className="w-[4.6875rem] h-[4.6875rem]"
                src="ElipseRedesS.png"
                alt=""
              />
              <img
                className="w-[4.6875rem] h-[4.6875rem]"
                src="ElipseRedesS.png"
                alt=""
              />
              <img
                className="w-[4.6875rem] h-[4.6875rem]"
                src="ElipseRedesS.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Palestrantes;
