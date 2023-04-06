import Image from "next/image";
import ServicesCarousel from "./ServicesCarousel";
import duallyProfile from "../../public/transport/dually-watercolor.jpg"

const Services = () => {
    return (
        <div className="bg-neutral-900 flex flex-row px-3 py-12">
            <div className="w-1/2">
                <div className="object-cover overflow-hidden h-72">
                
                    <Image
                        src={duallyProfile}
                        className="h-full w-full object-center object-cover hidden md:block "
                        alt="Truck Banner Image"
                    />
                </div>
            </div>
            
            <div className="w-full md:w-1/2 gradientCSS">
                <ServicesCarousel />
            </div>
        </div>
    );
}

export default Services;