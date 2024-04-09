'use client';

import { MouseEventHandler, useState } from 'react';
import { cn } from '@/lib/tailwind-utils';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import React from 'react';

export default function Experience() {
    const [section, setSection] = useState<string>('Experience');

    const renderSection = () => {
        if (section == 'Experience') {
            return (
                <React.Fragment>
                    <div className="flex flex-col border border-leeim-mint p-6 rounded-xl  overflow-y-auto">
                        <div className="text-leeim-mint font-bold text-[calc(1.2vw+0.8em)] flex flex-row items-center">
                            Experience
                            <MdOutlineHorizontalRule className="ml-3" />
                        </div>
                        <div className="font-bold text-[calc(0.7vw+0.8em)]">Software Development Intern</div>
                        <div>
                            NeurOn Therapeutics <span className="italic text-xs pl-5">November 2023 ~ Present</span>
                        </div>
                        <ul className="py-3 px-3 list-disc text-sm">
                            <li>
                                Achieved a <span className="text-leeim-mint">30% reduction in build times</span> for
                                project development using Bun, Vite, and Bash scripts.
                            </li>
                            <li>
                                Contributed to a project focused on developing games for individuals with neurological
                                disorders, <span className="text-leeim-mint">garnering over 90% positive feedback</span>{' '}
                                by using React and TypeScript.
                            </li>
                            <li>
                                Designed and organized the data schema for each game to ensure the quality of the
                                persistent layer with zod.
                            </li>
                            <li>
                                Utilized <span className="text-leeim-mint">Django backend framework</span> to implement
                                the RESTful APIs with loose dependencies.
                            </li>
                        </ul>
                        <div className="font-bold text-[calc(0.7vw+0.8em)]">EECS Undergraduate Teaching Assistant</div>
                        <div>
                            Oregon State University{' '}
                            <span className="italic text-xs pl-5">September 2023 ~ Present</span>
                        </div>
                        <ul className="py-3 px-3 list-disc text-sm">
                            <li>
                                <span className="text-leeim-mint">Mentored 150+ students</span> for the data structures
                                class and web development class every week by holding the TA Office Hours.
                            </li>
                            <li>
                                <span className="text-leeim-mint">Guided 20+ students</span> in C99 through engaging
                                recitation sessions every week, leading to a significant improvement in their coding
                                skills and abilities to utilize the tools such as gdb and valgrind.
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
            );
        } else if (section == 'Awards') {
            return (
                <React.Fragment>
                    <div className="flex flex-col border border-leeim-mint p-6 rounded-xl  overflow-y-auto">
                        <div className="text-leeim-mint font-bold text-[calc(1.2vw+0.8em)] flex flex-row items-center">
                            Awards
                            <MdOutlineHorizontalRule className="ml-3" />
                        </div>
                        <div className="font-bold text-[calc(0.4vw+0.8em)]">2023 AWS Amplify Studio Hackathon</div>
                        <div>
                            Placed at <span className="text-leeim-mint">2nd prize &#40;Runner-up&#41;</span> in the 2023
                            AWS Amplify Studio Hackathon.
                        </div>
                        <div className="italic text-xs pt-1 pb-3">Post Link:</div>
                        <div className="font-bold text-[calc(0.4vw+0.8em)]">2023 Fall BeaverHacks Hackathon</div>
                        <div>
                            Placed at <span className="text-leeim-mint">1st prize</span> in the 2023 Fall BeaverHacks
                            Hackathon.
                        </div>
                        <div className="italic text-xs pt-1 pb-3">Post Link:</div>
                        <div className="font-bold text-[calc(0.4vw+0.8em)]">2023 OpenCV Hackathon</div>
                        <div>
                            Selected <span className="text-leeim-mint">the most popular finalist project </span>in the
                            2023 OpenCV Hackathon
                        </div>
                        <div className="italic text-xs pt-1 pb-3">Post Link:</div>
                        <div className="font-bold text-[calc(0.4vw+0.8em)]">Hall of Fame for Web/Mobile App Dev</div>
                        <div>
                            Nominated for the Hall of Fame in{' '}
                            <span className="text-leeim-mint">Advanced Web Development</span> class and{' '}
                            <span className="text-leeim-mint">Mobile Application Development</span> class for
                            exceptional work on the projects.
                        </div>
                        <div className="italic text-xs pt-1 pb-3">Post Link:</div>
                    </div>
                </React.Fragment>
            );
        }
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        const value = e.currentTarget.innerText;
        setSection(value);
    };
    return (
        <div className="h-screen w-screen select-none p-[4vw] flex flex-row justify-center">
            <div className="font-semibold leading-tight flex flex-col text-[calc(3.5vw+0.8em)] flex-1 justify-center">
                <div className="pl-[2vw] border-l-4 border-leeim-mint ">Aiming for</div>
                <div className="pl-[2vw] border-l-4 border-leeim-mint ">
                    <span className="text-leeim-mint">The Best</span> Slowly,
                </div>
                <div className="pl-[2vw] text-leeim-mint border-l-4 border-leeim-mint ">But Surely</div>
            </div>
            <div className="flex flex-col justify-center flex-1 mx-3 py-3 my-3">
                {renderSection()}
                <div className="flex flex-row gap-3 justify-center items-center">
                    <button
                        onClick={handleClick}
                        className={cn(
                            'text-[calc(0.5vw+0.8em)] font-bold p-3 transition ease-in-out duration-300 hover:text-leeim-mint',
                            {
                                'text-leeim-mint': section == 'Experience',
                            }
                        )}>
                        Experience
                    </button>
                    <button
                        onClick={handleClick}
                        className={cn(
                            'text-[calc(0.5vw+0.8em)] font-bold p-3 transition ease-in-out duration-300 hover:text-leeim-mint',
                            {
                                'text-leeim-mint': section == 'Awards',
                            }
                        )}>
                        Awards
                    </button>
                </div>
            </div>
        </div>
    );
}
