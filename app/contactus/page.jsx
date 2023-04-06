import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import { PassionFont } from "../fonts";
import bannerImage from "../../public/banners/truckBanner5.jpg"

export const metadata = {
    title: "Contact Us"
}

const page = () => {
    return (
        <div>
            <Banner
                image={bannerImage}
                title="Contact Us"
            />

            <div className="bg-neutral-500 p-3">
                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 mx-auto py-12">
                    <div className="w-full lg:w-1/3 px-3">
                        <h2 className={`${PassionFont.className} text-5xl`}>
                            Send Us A Message
                        </h2>
                        <p className="text-xl">
                        Do you have a question about our dispatching services? What types of freight we haul? Maybe you&apos;d like to join our team! Feel free to send us a message and we&apos;ll get back to you as soon as possible!
                        </p>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <ContactForm />
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default page;