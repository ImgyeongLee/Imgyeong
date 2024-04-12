'use client';

import ProjectShow from '../ProjectShow';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/motion';

export default function Project() {
    return (
        <div className="min-h-[100vh] h-full w-screen grid grid-rows-[1fr_5fr] justify-center items-center">
            <motion.div
                className="font-semibold text-[calc(1em+3.2vw)] row-span-1 text-leeim-mint select-none text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.3)}>
                Recent 5 Projects
            </motion.div>
            <div className="row-span-1 flex flex-col justify-center items-center w-full h-full">
                <ProjectShow />
            </div>
        </div>
    );
}
