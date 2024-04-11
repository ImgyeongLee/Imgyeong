import { cn } from '@/lib/tailwind-utils';
import { ComponentProps } from 'react';
import { DataType } from '../type/types';
import Image from 'next/image';

type ProjectCardProps = ComponentProps<'div'> & {
    data: DataType;
    index: number;
};

export default function ProjectCard({ data, index }: ProjectCardProps) {
    return (
        <Image
            className={cn(
                'transition duration-300 ease-in-out absolute z-0 rounded-md h-[calc(45px+30vh)] w-[calc(90px+30vw)] object-contain',
                {
                    'opacity-30 scale-75 left-[20%] translate-x-[-50%] z-10': data.position == 1,
                    'opacity-80 left-[35%] translate-x-[-50%] z-30 ': data.position == 2,
                    'opacity-100 scale-125 drop-shadow-md translate-x-[-50%] z-40 ': data.position == 3,
                    'opacity-80 left-[65%] translate-x-[-50%] z-30 ': data.position == 4,
                    'opacity-30 scale-75 left-[80%] translate-x-[-50%] z-10 ': data.position == 5,
                }
            )}
            src={data.src}
            alt={data.title}
            width={1000}
            height={1000}></Image>
    );
}
