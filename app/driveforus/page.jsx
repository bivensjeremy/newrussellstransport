import Application from "../components/Application";
import Banner from "../components/Banner";
import JoinTeamCard from "../components/JoinTeamCard";
import { jobDescription, qualificationsData } from "../data/driverData";
import bannerImage from "../../public/banners/truckBanner3.jpg"

export const metadata = {
    title: "Drive For Us"
}

const DriveForUs = () => {
    return (
        <div>
            <Banner 
                image={bannerImage}
                title="Drive For Us"
            />

            <div className="bg-neutral-500 p-3">
                <div className="flex flex-col gap-3 container lg:flex-row w-full mx-auto text-[#252525]">
                    <div className="w-full lg:w-1/3">
                        <JoinTeamCard 
                            title="Driver Qualifications"
                            props={qualificationsData} 
                        />

                        <JoinTeamCard 
                            title="Job Description"
                            props={jobDescription} />
                    </div>

                    <div className="w-full lg:w-2/3">
                        <Application />
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default DriveForUs;