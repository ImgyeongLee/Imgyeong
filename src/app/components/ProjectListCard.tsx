'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectType } from '../type/types';
import { projectCardVariants } from '../utils/motion';

export default function ProjectListCard({ id, title, description, src }: ProjectType) {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg border border-leeim-mint min-w-[320px] flex-grow-0 flex-shrink-0 basis-[30%] grid"
            variants={projectCardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            custom={id}>
            <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-leeim-mint">{title}</h1>
                <p className="mt-2 text-leeim-white">{description}</p>
            </div>
        </motion.div>
    );
}
