

import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500','600', '700'], // Optional weights
});
interface SectionTitleProps{
    title:string;
    subTitle?:string;
}
export default function SectionTitle({title, subTitle}:SectionTitleProps){

    return(
        <div className={`${inter.className} text-white`}>
            <div className="w-full pt-8 pb-8 md:pt-4">
                <p className="uppercase text-lg font-bold">{title}</p>
            </div>
        </div>
    )
}