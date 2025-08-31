'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // To get the current route

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 }, // Slide in from left
  enter: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  exit: { opacity: 0, x: 0, y: -100, transition: { ease: 'easeInOut', duration: 0.3 } }, // Slide out upwards
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname(); // Keying AnimatePresence/motion.div by pathname triggers transition on route change

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname} // Ensure re-render and animation trigger on path change
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
