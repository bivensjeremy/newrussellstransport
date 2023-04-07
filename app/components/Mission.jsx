import { PassionFont } from "../fonts";

const Mission = () => {
    return (
        <div className="w-96 md:w-2/3 mx-auto text-center">
            <h1 className={`${PassionFont.className} text-6xl`} >
                Our Mission
            </h1>
            
            <p className="p-7 text-justify text-xl">
                Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients and employees one-on-one to understand their specific needs and provide assistance based on those needs. We look forward to working with you and are excited about the journey ahead.
            </p>
        </div>
    );
}

export default Mission;