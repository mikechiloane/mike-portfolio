import Link from "next/link";
import Image from "next/image";


interface SocialStackProps{
    imagePath:string;
    link:string;
}
export default function SocialStack({imagePath,link}:SocialStackProps){

    return(
        <div className="relative w-[24px] h-[24px]">
            <Link href={link}>
                <Image fill={true} src={imagePath} alt={link}/>
            </Link>

        </div>
    )
}