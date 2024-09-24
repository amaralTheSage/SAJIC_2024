import React from "react";

function CardPalestrante() {
  return (
    <div className="">
      <p>Data</p>
      <div className="h-60">
        <img
          src="https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w"
          alt=""
          className="h-full w-full object-cover rounded-sm"
        />
      </div>
      <div>
        <p>nome</p>
        <p>empresa</p>
        <p>tema</p>
      </div>
    </div>
  );
}

export default CardPalestrante;
