import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./DotButton";

export default function Carrossel({ imgs }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla m-auto relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {imgs.map((img) => {
            return (
              <>
                <img
                  key={img.id}
                  src={img}
                  className="embla__slide w-full object-cover aspect-video shadow"
                />
              </>
            );
          })}
        </div>
      </div>

      {/* DOTS */}
      <div className="embla__dots m-auto w-fit relative bottom-16">
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
