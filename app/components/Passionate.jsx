import SectionImage from "./SectionImage";
import truckDriver from "../../public/transport/truckDriver.jpeg"
import PassionateSection from "./PassionateSection";

const Passionate = () => {
    return (
        <div className="bg-neutral-900 flex flex-col md:flex-row gap-3 pt-12">
            <SectionImage 
                image={truckDriver}
            />

            <PassionateSection />
        </div>
    );
}

export default Passionate;