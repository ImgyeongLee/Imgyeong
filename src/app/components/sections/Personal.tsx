'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/motion';
import ProjectListCard from '../ProjectListCard';
import { allProjects } from '@/app/data/project';

export default function Personal() {
    return (
        <div className="w-screen justify-center items-center flex flex-col">
            <motion.div
                className="font-semibold text-[calc(1em+3.2vw)] text-leeim-mint select-none text-center mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.3)}>
                All Projects
            </motion.div>
            <div className="h-full w-full flex flex-row gap-10 px-10 justify-center items-stretch flex-wrap">
                {allProjects.map((project, i) => {
                    return (
                        <ProjectListCard
                            key={i}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            src={project.src}
                        />
                    );
                })}
            </div>
        </div>
    );
}
