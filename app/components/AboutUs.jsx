import Image from "next/image";
import { PassionFont } from "../fonts";
import theRussells from "../../public/couple.png"

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row container mx-auto">
            <div className="w-full md:w-1/2 p-3">
                <Image
                    src={theRussells}
                    alt="Russell's Image"
                    priority={true}
                    placeholder="blur"
                    sizes="50vw"
                    className="object-cover rounded-lg m-auto w-96"
                />
            </div>

            <div className="w-96 md:w-1/2 m-auto">
                <h1 className={`${PassionFont.className} text-6xl text-center md:text-start`} >
                    Who We Are
                </h1>
                
                <p className="p-7 text-justify text-xl">
                    We are the founders of Russell&apos;s Transport, LLC. A reputable company based in Dublin, Georgia. We have been in the transportation industry for more than 5 years and have not looked back since. We chose transportation because of the consistency it brings which has allowed us to advance and grow in our business. We believe in learning the industry, staying patient, and booking loads according to what makes sense. We are passionate about continuously learning and growing to ensure we are providing our clients with the best service possible. One unique thing about our business is that we are still in the field of hauling freight. This allows us to stay in tune with what is going on in the market and adapt as needed.
                </p>
                
            </div>
        </div>
    );
}

export default AboutUs;