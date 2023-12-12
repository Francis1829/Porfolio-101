import React , {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from "framer-motion";



function PageMotion({children}) {
    const ref = useRef(null);
    const IsInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
       if (IsInView) {
        mainControls.start("visible");
       }
    }, [IsInView]);
  return (
    <>
    <div ref={ref} className='overflow-hidden w-fit'>
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
      </div>
    </>
  )
}

export default PageMotion