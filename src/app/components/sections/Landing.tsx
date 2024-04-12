'use client';

import Image from 'next/image';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { slideInFromLeft, slideInFromRight, fadeIn } from '@/app/utils/motion';
import { motion } from 'framer-motion';

export default function Landing() {
    return (
        <div
            className="min-h-[100vh] h-full w-screen grid grid-cols-[1fr_3fr_1fr] grid-rows-[1.5fr_1fr_1.5fr] select-none scroll-smooth overflow-x-hidden"
            id="landing">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 px-4 py-8">
                <Image
                    className="relative left-6"
                    src="/decoration-left.svg"
                    alt="decoration-vector"
                    width={230}
                    height={30}
                />
            </div>
            <div className="col-span-3 row-start-1 row-end-2 flex flex-col justify-center text-[calc(5vw+2em)] leading-none pr-[4vw]">
                <motion.div
                    className="text-leeim-mint font-semibold text-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromRight(0.1)}>
                    Fullstack
                </motion.div>
                <motion.div
                    className="font-semibold text-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromRight(0.3)}>
                    Web Developer
                </motion.div>
            </div>
            <div className="font-semibold col-span-3 row-start-2 row-end-3 flex flex-col items-center justify-center">
                <motion.div
                    className="text-[calc(2vw+0.8em)] flex flex-row items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn(0.3)}>
                    <MdOutlineHorizontalRule className="text-leeim-mint mr-2" />
                    Hello! My name is <span className="text-leeim-mint">&nbsp;Imgyeong Lee</span>
                    <MdOutlineHorizontalRule className="text-leeim-mint ml-2" />
                </motion.div>
                <motion.div
                    className=" font-light"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn(0.5)}>
                    I love coding, building something, and helping people!
                </motion.div>
            </div>
            <div className="col-span-2 row-start-3 row-end-4 flex flex-col justify-center pl-[4vw] leading-none text-[calc(2.3vw+1em)]">
                <motion.div
                    className="font-semibold"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.1)}>
                    Dream:
                </motion.div>
                <motion.div
                    className="text-leeim-mint font-semibold"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.3)}>
                    Build a Parrot&apos;s Land
                </motion.div>
            </div>
            <div className="col-start-3 col-end-4 row-start-3 row-end-4 self-center justify-self-end pr-10 py-8">
                <Image
                    className="relative"
                    src="/decoration-right.svg"
                    alt="decoration-vector"
                    width={230}
                    height={30}
                />
            </div>
        </div>
    );
}
