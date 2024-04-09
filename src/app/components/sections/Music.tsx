'use client';

import { FaCircle } from 'react-icons/fa';
import { cn } from '@/lib/tailwind-utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Music() {
    const basicCSS =
        'text-leeim-mint flex justify-center items-center border border-leeim-mint px-8 py-3 rounded-xl text-[calc(0.8vw+1em)] font-semibold ';
    return (
        <div className="h-screen w-screen flex flex-col p-[4vw] justify-center items-center">
            <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={cn(basicCSS, 'hover:bg-leeim-mint hover:text-leeim-black')}>
                <FaCircle />
                <div className="ml-5">Play?</div>
            </motion.button>
            <Link href="#landing" className="mt-3 cursor-pointer text-sm">
                No Thanks
            </Link>
        </div>
    );
}
