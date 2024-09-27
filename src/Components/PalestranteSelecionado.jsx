import React from "react";

function PalestranteSelecionado() {
  return (
    <section className="bg-[url('background_senc.png')] bg-center flex flex-col items-center lg:grid grid-cols-5  text-white gap-6 md:gap-12 p-12">
      <div
        className="m-auto h-min
      col-span-2"
      >
        <img
          className="mb-6 w-2/3 m-auto aspect-square rounded-full"
          src="Foto-Palestrante.png"
          alt=""
        />
        <p className="border-2 w-min m-auto px-12 rounded-md text-xl ">Nome</p>
      </div>

      <div className="m-auto text-left font-light col-span-3">
        <p className=" ">Palestrante</p>
        <h2 className="font-bold">Nome Palestrante</h2>
        <p className="">
          Pablo De Chiaro Rosa é um professor universitário com vasta
          experiência em inteligência artificial (IA) e visão computacional.
          Mestre em Ciência da Computação e atualmente doutorando, ele se dedica
          ao ensino e pesquisa em tecnologias avançadas, como o uso de Python e
          bibliotecas como OpenCV para desenvolvimento de soluções em IA. Com
          mais de 10 anos de atuação na área, Pablo combina sua paixão pela
          programação com uma abordagem prática em seus projetos, que são
          amplamente compartilhados em plataformas como GitHub. Ele também é
          mentor e entusiasta da cultura nerd, sendo reconhecido por sua
          capacidade de guiar novos talentos no campo da computação .{" "}
          <a
            target="_blank"
            className="underline-offset-8"
            href="https://github.com/chiarorosa"
          >
            (GitHub)
          </a>
        </p>

        <div className="flex mt-9 justify-between ">
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

        <div className="md:flex mt-9 items-center gap-3 flex-wrap">
          <p className="font-bold text-lg">Redes Sociais:</p>

          <div className="grid grid-cols-4 gap-3 w-[160px]">
            <img className="w-full" src="ElipseRedesS.png" alt="" />
            <img className="w-full" src="ElipseRedesS.png" alt="" />
            <img className="w-full" src="ElipseRedesS.png" alt="" />
            <img className="w-full" src="ElipseRedesS.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PalestranteSelecionado;
