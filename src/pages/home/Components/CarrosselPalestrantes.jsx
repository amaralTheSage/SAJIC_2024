import { useEffect } from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

function CarrosselPalestrantes({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        speed: 1,
        stopOnMouseEnter: false,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">{children}</div>
      </div>
    </div>
  );
}

export default CarrosselPalestrantes;
