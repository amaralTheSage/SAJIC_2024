import React from "react";

function CardPalestrante({
  data = "data",
  prof = "nome",
  empresa = "empresa",
  tema = "tema",
  image = "https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w",
}) {
  return (
    <div className="embla_palestrantes_slide  aspect-video mx-8 ">
      <p className="text-sm font-light mb-1 w-fit">{data}</p>
      <div>
        <img
          src={image}
          alt=""
          className="aspect-[3/4] w-full object-cover rounded-md "
        />
      </div>
      <div className="">
        <p className="font-bold capitalize text-lg">
          {prof} - {empresa}
        </p>
        <p className="font-light capitalize">
          {tema.split(":").map((parte, index, array) => (
            <>
              {parte}
              {index === 0 && array.length > 1 && ":"} <br />
            </>
          ))}
        </p>
      </div>
    </div>
  );
}

export default CardPalestrante;
