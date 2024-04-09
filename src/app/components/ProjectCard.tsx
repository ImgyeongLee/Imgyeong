import { cn } from '@/lib/tailwind-utils';
import { ComponentProps } from 'react';
import { DataType } from '../type/types';

type ProjectCardProps = ComponentProps<'div'> & {
    data: DataType;
    index: number;
};

export default function ProjectCard({ data, index }: ProjectCardProps) {
    return (
        <div
            className={cn(
                'transition duration-300 ease-in-out absolute z-0 rounded-md h-[calc(45px+30vh)] w-[calc(90px+30vw)] bg-black',
                {
                    'opacity-30 scale-75 left-[20%] translate-x-[-50%] z-10 bg-red-100': data.position == 1,
                    'opacity-80 left-[35%] translate-x-[-50%] z-30 bg-blue-500': data.position == 2,
                    'opacity-100 scale-125 drop-shadow-md translate-x-[-50%] z-40 bg-green-700': data.position == 3,
                    'opacity-80 left-[65%] translate-x-[-50%] z-30 bg-red-800': data.position == 4,
                    'opacity-30 scale-75 left-[80%] translate-x-[-50%] z-10 bg-yellow-500': data.position == 5,
                }
            )}>
            {data.title}
        </div>
    );
}
