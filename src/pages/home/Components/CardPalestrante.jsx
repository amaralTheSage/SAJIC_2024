/* eslint-disable react/prop-types */

function CardPalestrante({
  prof = "nome",
  image = "https://images.squarespace-cdn.com/content/v1/63f9284074ed022eb3ac8e91/4aadfae6-7772-4ffb-96ec-8d94a6a54487/D+Tas+Cover+Web.jpg?format=1000w",
  data1 = "data1",
  tema1 = "tema1",
  empresa = "empresa",
  data2,
  tema2,
}) {
  return (
    <div className="embla_palestrantes_slide  aspect-video mx-8 ">
      <div className=" text-lg">
        <span className="font-medium capitalize">{prof}</span>
        <br />
        <span className="font-light capitalize">{empresa}</span>
      </div>
      <div>
        <img
          src={image}
          alt={prof}
          className="aspect-[3/4] w-full object-cover rounded-md mb-1 bg-[url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/17/0e/20/local.jpg?w=1200&h=-1&s=1)] bg-cover"
        />
      </div>

      <div>
        <div>
          <p className="font-light">
            {tema1.includes(":") ? (
              tema1.split(":").map((parte, index, array) => (
                <>
                  {index === 0 && array.length > 1 ? (
                    <>
                      <span className="font-medium">{parte}:</span>
                    </>
                  ) : (
                    <span>{parte}</span>
                  )}
                </>
              ))
            ) : (
              <span className="font-medium">{tema1}</span>
            )}
          </p>

          <p className="font-semibold">{data1}</p>
        </div>

        {tema2 && (
          <div>
            <p className="font-light mt-2">
              {tema2.includes(":") ? (
                tema2.split(":").map((parte, index, array) => (
                  <>
                    {index === 0 && array.length > 1 ? (
                      <>
                        <span className="font-medium">{parte}:</span>
                      </>
                    ) : (
                      <span>{parte}</span>
                    )}
                  </>
                ))
              ) : (
                <span className="font-medium">{tema2}</span>
              )}
            </p>

            <p className="font-semibold">{data2}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPalestrante;
