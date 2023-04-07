import Image from "next/image";
import { PassionFont } from "../fonts";


const Banner = ({ image, title }) => {
    return (
        <div className="pb-5">
            <Image
                src={image}
                priority
                placeholder="blur"
                sizes="100vw"
                alt="Truck Banner Image"
                className="object-cover top-0 left-0 fixed z-[-1] h-[350px] w-full opacity-60"
            />
            <div className="h-[250px]">
                <div className="flex flex-col justify-center text-center m-auto">
                    <h1 className={`${PassionFont.className} uppercase justify-center text-6xl lg:text-8xl customShadow`}>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;