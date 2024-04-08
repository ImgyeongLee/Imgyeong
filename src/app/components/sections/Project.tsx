import ProjectShow from '../ProjectShow';

export default function Project() {
    return (
        <div className="h-screen w-screen grid grid-rows-[1fr_5fr] justify-center items-center">
            <div className="font-semibold text-[calc(1em+3.2vw)] row-span-1 text-leeim-mint select-none">Project</div>
            <div className="row-span-1 flex flex-col justify-center items-center">
                <ProjectShow />
                <div className="font-bold text-[calc(1em+1vw)] mt-6">Title</div>
                <div className="mt-4">Description</div>
            </div>
        </div>
    );
}
