import React , {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from "framer-motion";



function PageMotion({children}) {
    const ref = useRef(null);
    const IsInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
       if (IsInView) {
        mainControls.start("visible");
        slideControls.start("visible");
       }
    }, [IsInView]);
  return (
    <>
    <div ref={ref} className='relative overflow-hidden w-fit'>
        <motion.div
            variants={{
                hide: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial= "hide"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.25}}
        >
        {children}
      </motion.div>
      <motion.div
            variants={{
                hide: {right: 0},
                visible: {right: "100%"},
            }}
            initial= "hide"
            animate={slideControls}
            transition={{duration: 0.5, ease: "easeIn"}}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "#3f2775",
              zIndex: 20,
            }}
        />
      </div>
    </>
  )
}

export default PageMotion