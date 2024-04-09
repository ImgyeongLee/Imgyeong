'use client';
import { motion, useSpring, useScroll } from 'framer-motion';

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed w-full top-0 left-0 z-[100] h-2 bg-leeim-mint origin-left"
            style={{ scaleX }}></motion.div>
    );
}
