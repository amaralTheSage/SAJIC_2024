import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./DotButton";

export default function Carrossel({ imgs }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000 }),
  ]);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="embla relative ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-[90vh]">
          {imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              className="embla__slide w-full object-cover aspect-video 
              shadow filter brightness-50 contrast-50"
              style={{ objectPosition: `${index > 0 && "92% 50%"}` }}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="md:w-[50vw] w-[90vw] max-w-[2000px] select-none"
            src="/sajic_vazado.webp"
          />
        </div>
      </div>

      {/* DOTS */}
      <div className="embla__dots m-auto w-fit relative bottom-20">
        {imgs.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
}

Carrossel.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
