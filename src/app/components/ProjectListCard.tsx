'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectType } from '../type/types';
import { projectCardVariants } from '../utils/motion';
import Link from 'next/link';
import { ComponentProps } from 'react';

type ProjectListCardProps = ComponentProps<'div'> & {
    project: ProjectType;
};

export default function ProjectListCard({ project }: ProjectListCardProps) {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg border border-leeim-mint min-w-[320px] flex-grow-0 flex-shrink-0 basis-[30%] grid"
            variants={projectCardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            custom={project.id}>
            <Image src={project.src} alt={project.title} width={1000} height={1000} className="w-full object-contain" />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-leeim-mint">{project.title}</h1>
                <p className="mt-2 text-leeim-white">{project.description}</p>
                <p className="text-leeim-mint text-sm italic mt-2">{project.stack}</p>
                <div className="flex flex-col md:flex-row gap-5 justify-center text-sm pt-3 ">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="hover:text-leeim-mint transition ease-in-out">
                            GitHub
                        </Link>
                    )}
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            className="hover:text-leeim-mint transition ease-in-out">
                            Demo/Post
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
