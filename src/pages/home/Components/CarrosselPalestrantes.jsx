import { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

function CarrosselPalestrantes({ children, gestao = false }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    // Autoplay({
    //   active: !gestao && true,
    //   delay: 3000,
    //   stopOnInteraction: false,
    //   stopOnFocusIn: false,
    //   stopOnMouseEnter: false,
    //   stopOnLastSnap: false,
    // }),
    AutoScroll({
      active: true,
      direction: gestao ? "backward" : "forward", //sets that gestao carousel is gonna go backwards
      speed: 1,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      stopOnMouseEnter: false,
      stopOnLastSnap: false,
    }),
  ]);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = 0.2 * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    const numberWithinRange = (number, min, max) =>
      Math.min(Math.max(number, min), max);

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  return (
    <div className="embla relative">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">{children}</div>
      </div>
    </div>
  );
}

export default CarrosselPalestrantes;
