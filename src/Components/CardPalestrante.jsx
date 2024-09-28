import React from "react";

function CardPalestrante({
  data = "data",
  prof = "nome",
  empresa = "empresa",
  tema = "tema",
  image = "https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w",
}) {
  return (
    <div className="embla_palestrantes_slide bg-green-600 object-cover aspect-video mx-6">
      <p className="text-md md:text-[1.5vw] lg:text-[1.3vw] mb-1 w-fit">
        {data}
      </p>
      <div className="w-fit">
        <img
          src={image}
          alt=""
          className="aspect-[3/4] object-cover rounded-sm border border-white"
        />
      </div>
      <div className="bg-blue-300 ">
        <p>{prof}</p>
        <p>{empresa}</p>
        <p>{tema}</p>
      </div>
    </div>
  );
}

export default CardPalestrante;
