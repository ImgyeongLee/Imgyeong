'use client';

import { GrNext, GrPrevious } from 'react-icons/gr';
import ProjectCard from './ProjectCard';
import { MouseEventHandler, useState } from 'react';
import { professionalProject } from '../data/project';
import { DataType } from '../type/types';

export default function ProjectShow() {
    const [testData, setTestData] = useState<DataType[]>(professionalProject);

    const handleClickNext: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setTestData((prevData) => {
            const newData = [...prevData];
            const data = newData.shift();
            if (data) {
                newData.push(data);
                for (let i = 0; i < 5; i++) {
                    newData[i].position += 1;
                    if (newData[i].position > 5) {
                        newData[i].position -= 5;
                    }
                }
            }
            return newData;
        });
    };

    const handleClickPrev: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setTestData((prevData) => {
            const newData = [...prevData];
            const data = newData.pop();
            if (data) {
                newData.push(data);
                for (let i = 0; i < 5; i++) {
                    newData[i].position -= 1;
                    if (newData[i].position < 1) {
                        newData[i].position += 5;
                    }
                }
            }
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
            {testData.map((data) => {
                if (data.position == 3) {
                    return (
                        <>
                            <div className="font-bold text-[calc(1em+1vw)] mt-6">{data.title}</div>
                            <div className="mt-4">{data.description}</div>
                        </>
                    );
                }
            })}
        </>
    );
}
