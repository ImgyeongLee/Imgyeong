export default function Landing() {
  return (
    <div className="h-screen w-screen grid grid-cols-[1fr_3fr_1fr] grid-rows-[1.5fr_1fr_1.5fr] select-none">
      <div className="col-span-3 row-start-1 row-end-2 flex flex-col justify-center text-[calc(5vw+2em)] leading-none pr-[4vw]">
        <div className="text-leeim-mint font-semibold text-right">Fullstack</div>
        <div className="font-semibold text-right">Web Developer</div>
      </div>
      <div className="font-semibold col-span-3 row-start-2 row-end-3 flex flex-col items-center justify-center">
        <div className="text-[calc(2vw+0.8em)]">
          Hello! My name is <span className="text-leeim-mint">Imgyeong Lee</span>
        </div>
        <div className=" font-light">I love coding, building something, and helping people!</div>
      </div>
      <div className="col-span-3 row-start-3 row-end-4 flex flex-col justify-center pl-[4vw] leading-none text-[calc(2.3vw+1em)]">
        <div className="font-semibold">Dream:</div>
        <div className="text-leeim-mint font-semibold">Build a Parrot&apos;s Land</div>
      </div>
    </div>
  );
}
