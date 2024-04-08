'use client';

import { GrNext, GrPrevious } from 'react-icons/gr';
import ProjectCard from './ProjectCard';
import { MouseEventHandler, useState } from 'react';

export default function ProjectShow() {
    const [testData, setTestData] = useState<number[]>([1, 2, 3, 4, 5]);

    const handleClickNext: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setTestData((prevData) => {
            const newData = [...prevData];
            const data = newData.shift();
            if (data) newData.push(data);
            return newData;
        });
    };

    const handleClickPrev: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setTestData((prevData) => {
            const newData = [...prevData];
            const data = newData.pop();
            if (data) newData.unshift(data);
            return newData;
        });
    };

    return (
        <>
            <div className="flex flex-row justify-center px-9">
                <button className="z-50" onClick={handleClickPrev}>
                    <GrPrevious />
                </button>
                <div className="flex flex-row items-center h-[calc(400px+1.5vh)] bg-blue-500">
                    {testData.map((data, i) => {
                        return <ProjectCard key={i} data={data} index={i + 1} />;
                    })}
                </div>
                <button className="z-50" onClick={handleClickNext}>
                    <GrNext />
                </button>
            </div>
        </>
    );
}
