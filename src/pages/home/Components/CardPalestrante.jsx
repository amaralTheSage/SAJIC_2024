import React from "react";

function CardPalestrante({
  prof = "nome",
  empresa = "empresa",
  image = "https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w",
  data1 = "data1",
  tema1 = "tema1",
  data2,
  tema2,
}) {
  return (
    <div className="embla_palestrantes_slide  aspect-video mx-8 ">
      <p className="font-bold capitalize text-lg">
        {prof} - {empresa}
      </p>

      <div>
        <img
          src={image}
          alt=""
          className="aspect-[3/4] w-full object-cover rounded-md mb-1 bg-purple-500"
        />
      </div>

      <div>
        <div>
          <p className="font-light ">
            {tema1.split(":").map((parte, index, array) => (
              <>
                {parte}
                {index === 0 && array.length > 1 && ":"} <br />
              </>
            ))}
          </p>
          <p className="font-semibold">{data1}</p>
        </div>

        {tema2 && (
          <div>
            <p className="font-light mt-2">
              {tema2.split(":").map((parte, index, array) => (
                <>
                  {parte}
                  {index === 0 && array.length > 1 && ":"} <br />
                </>
              ))}
            </p>
            <p className="font-semibold">{data2}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPalestrante;
