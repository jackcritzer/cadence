import Image from "next/image";
import { StaticImageData } from 'next/image';

export default function FeatureCard({ 
    data 
}: {
    data: {
        title: string;
        image: StaticImageData;
        imageAlt: string;
        description: string;
    };
}) {

    return (
        <div className="flex flex-col items-center justify-start p-4 rounded-xl flex-1 bg-[#f5f0e883]" style={{ boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1)' }}>
            <div className="text-[20px] text-black font-dmsans font-bold tracking-[-0.03em] mt-2">
                {data.title}
            </div>
            <div className="flex items-center justify-center bg-sage rounded-full w-24 h-24 p-4 mt-5 mb-5">
                <Image src={data.image} alt={data.imageAlt}/>
            </div>
            <div className="text-black mb-6 font-dmsans font-regular tracking-[-0.03em]">
                {data.description}
            </div>
        </div>
    )
}