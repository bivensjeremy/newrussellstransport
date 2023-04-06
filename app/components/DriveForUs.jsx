import SectionImage from "./SectionImage";
import newEmployee from "../../public/transport/newEmployee.jpeg"
import DriveForUsSection from "./DriveForUsSection";

const DriveForUs = () => {
    return (
        <div className="bg-neutral-900 flex flex-col md:flex-row gap-3">
            <DriveForUsSection />

            <SectionImage 
                image={newEmployee}
            />
            
        </div>
    );
}

export default DriveForUs;