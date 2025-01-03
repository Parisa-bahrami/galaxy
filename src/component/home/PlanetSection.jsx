/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

import useLayoutStore from "../../stores/layoutStore";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";
import useLanguageStore from "../../stores/languageStore";
import Planet from "./planet/Planet";

const PlanetSection = ({
  name,
  description,
  title,
  link,
  slideFromLeft = false,
}) => {
  const language = useLanguageStore((state) => state.language);
  const scrollContainer = useLayoutStore((state) => state.scrollContainer);

  const isEngish = language === "en";

  const [ref] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const elementRef = useRef(null);
  const textControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "start 20%"],
    container: scrollContainer,
  });

  const { scrollYProgress: pageScrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start start", "50% start"],
    container: scrollContainer,
  });

  const planetTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [slideFromLeft ? "-400%" : "400%", "0%"]
  );

  const opacityByScroll = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const pageOpacityByScroll = useTransform(
    pageScrollYProgress,
    [0.4, 1],
    [1, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 1) {
        textControls.start("visible");
      } else {
        textControls.start("hidden");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, textControls]);

  const textVariants = {
    hidden: { opacity: 0, x: slideFromLeft ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={elementRef}
      style={{ opacity: pageOpacityByScroll }}
      className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={textControls}
        variants={textVariants}
        className={cn(
          "order-2 w-full flex flex-col items-start justify-center gap-4",
          slideFromLeft ? "md:order-2" : "md:order-1"
        )}
        dir={isEngish ? "ltr" : "rtl"}
      >
        <h1 className="text-slate-950 dark:text-slate-200">{title}</h1>

        <p className="text-slate-950 dark:text-slate-300">{description}</p>

        <Link
          to={link}
          className={cn(
            "self-end absorb-container p-2",
            isEngish ? "pl-10" : "pr-10"
          )}
        >
          <Button variant="outline" size="sm" absorb className="">
            {isEngish ? "Continue" : "ادامه"}
          </Button>
        </Link>
      </motion.div>

      <div
        className={cn(
          "order-1 w-full flex items-center justify-center",
          slideFromLeft ? "md:order-1" : "md:order-2"
        )}
      >
        <motion.div
          className="size-96 rounded-full"
          style={{ translateX: planetTranslateX, opacity: opacityByScroll }}
        >
          {!!name ? <Planet name={name} /> : null}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlanetSection;
