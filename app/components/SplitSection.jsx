import Image from "next/image";
import duallyTruck from "../../public/transport/dually_truck.jpeg"
import HandleAnythingSection from "./HandleAnythingSection";
import SectionImage from "./SectionImage";

const SplitSection = () => {
    return (
        <div className="bg-neutral-900 flex flex-col md:flex-row gap-3">
            <SectionImage 
                image={duallyTruck}
            />

            <HandleAnythingSection />
        </div>
    );
}

export default SplitSection;