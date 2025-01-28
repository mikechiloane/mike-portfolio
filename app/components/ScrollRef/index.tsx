import {gotoSection} from "@/app/utils/introUtils";

export default function ScrollRef({ref}:{ref:string}){

    return (
        <div className="group hidden md:flex md:items-center gap-x-4">
            <div className={`h-[1px] bg-white/50 w-[30px] ${ref}-bar transition-all duration-300 group-hover:w-[70px]`}/>
            <p className={`${ref}-controller uppercase text-xs font-medium `}
               onClick={() => gotoSection(ref)}>{ref}</p>
        </div>
    )
}