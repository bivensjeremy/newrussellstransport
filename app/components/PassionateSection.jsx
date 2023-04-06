import { PassionFont } from "../fonts";

const PassionateSection = () => {
    return (
        <div className="px-3 m-auto w-full lg:w-2/5">

        <h3 className={`${PassionFont.className} text-5xl`}>
            Russell&apos;s Transport, LLC is passionate about efficiently & effectively picking up and delivering freight for our customers.
        </h3>

        <p className="pr-12 py-7 text-lg">
            We take pride in being on-time, being professional at all times, and building healthy and long lasting relationships with our customers through effective and on-going communication.
        </p>

    </div>
    );
}

export default PassionateSection;