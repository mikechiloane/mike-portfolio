export default function StackTag({stack}:{stack:string}) {

    return (
        <div className="bg-green-500/20 font-[500] w-fit px-4 text-[.8rem] py-1 rounded-full">
            <p className="text-teal-300">{stack}</p>
        </div>
    )
}