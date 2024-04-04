import { FaCircle } from 'react-icons/fa';
import { cn } from '@/lib/tailwind-utils';

export default function Music() {
  const basicCSS =
    'text-leeim-mint flex justify-center items-center border border-leeim-mint px-8 py-3 rounded-xl text-[calc(0.8vw+1em)] font-semibold ';
  const hoverCSS = 'transition ease-in-out';
  return (
    <div className="h-screen w-screen flex flex-col p-[4vw] justify-center items-center">
      <button className={cn(basicCSS, 'transition ease-in-out hover:bg-leeim-mint hover:text-leeim-black')}>
        <FaCircle />
        <div className="ml-5">Play?</div>
      </button>
      <div className="mt-3 cursor-pointer text-sm">No Thanks</div>
    </div>
  );
}
