import Image from "next/image";
import regions from "../../public/transport/states_southeast.png"
const Regions = () => {
    return (
        <div className="">
            <div className="relative bg-neutral-900 h-[600px] m-auto flex py-3">
                <Image 
                    src={regions}
                    alt="Background image"
                    priority={true}
                    sizes="100vw"
                    className="absolute left-0 right-0 m-auto opacity-30"
                />

                <div className="flex flex-col justify-center text-center w-3/4 m-auto h-[600px] relative">
                    <h3 className="text-xl md:text-3xl justify-center font-bold my-5">
                        Transportation is what we do. <br/> We are prepared to handle a variety of transports to suit your needs.
                    </h3>
                    <p className="mx-auto text-center text-md max-w-xl">
                        Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients and employees one-on-one to understand their specific needs and provide assistance based on those needs.
                    </p>

                    <h3 className="text-xl md:text-3xl justify-center font-bold my-5">
                        We pickup and deliver freight across the Southeast Region
                    </h3>

                </div>
            </div>
        </div>
    );
}

export default Regions;