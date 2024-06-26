import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import data from '../../data/contact.json';
import Link from 'next/link';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/motion';

export default function Contact() {
    return (
        <div className="h-screen w-screen flex flex-col gap-9 justify-center items-center">
            <motion.div
                className="font-semibold text-[calc(1em+3.2vw)] text-center text-leeim-mint select-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.3)}>
                Contact
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-9">
                <Link
                    href={data['github']}
                    target="_blank"
                    className="hover:text-leeim-mint hover:scale-105 transition ease-in-out text-[calc(3em+6vw)]">
                    <FaGithub />
                </Link>
                <Link
                    href={data['linkedin']}
                    target="_blank"
                    className="hover:text-leeim-mint hover:scale-105 transition ease-in-out text-[calc(3em+6vw)]">
                    <FaLinkedin />
                </Link>
                <Link
                    href={data['twitter']}
                    target="_blank"
                    className="hover:text-leeim-mint hover:scale-105 transition ease-in-out text-[calc(3em+6vw)]">
                    <FaXTwitter />
                </Link>
                <Link
                    href={data['instagram']}
                    target="_blank"
                    className="hover:text-leeim-mint hover:scale-105 transition ease-in-out text-[calc(3em+6vw)]">
                    <FaInstagram />
                </Link>
                <Link
                    href={`mailto:${data['email']}`}
                    className="hover:text-leeim-mint hover:scale-105 transition ease-in-out text-[calc(3em+6vw)]">
                    <IoMail />
                </Link>
            </div>
            <Footer />
        </div>
    );
}
