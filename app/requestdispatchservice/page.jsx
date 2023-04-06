import Banner from "../components/Banner";
import JoinTeamCard from "../components/JoinTeamCard";
import RequestForm from "../components/RequestForm";
import WhatYouNeed from "../components/WhatYouNeed";
import bannerImage from "../../public/banners/truckBanner4.jpg"

export const metadata = {
    title: "Request Service"
}

const RequestDispatchService = () => {
    return (
        <div>
            <Banner
                image={bannerImage}
                title="Request Dispatch Service"
            />

            <div className="bg-neutral-500 p-3">
                <div className="mx-auto text-[#252525] w-full md:w-2/3 m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 space-x-2">
                        <JoinTeamCard
                            title="Our Truck Types"
                            props={[
                                "Dry Van",
                                "Reefer",
                                "Flatbread",
                                "Hotshot",
                                "Step Decks"
                            ]} 
                        />

                        <JoinTeamCard 
                            title="Paperwork"
                            props={[
                                "Carrier packet setup for each broker/shipment",
                                "Truck Order Not Used (TONO) Assistance"
                            ]} 
                        />

                        <JoinTeamCard
                            title="Customer Service"
                            props={[
                                "24/7 Support",
                                "Text Confirmations"
                            ]}
                        />
                    </div>

                    <WhatYouNeed
                        title="What You Need to Get Started"
                        props={[
                            "Download and Complete the Dispatch/Carrier Agreement",
                            "Submit the Request Form below",
                            "Active Authority",
                            "Copy of CDL for Each Driver Being Dispatched",
                            "Signed W-9",
                            "Signed Dispatch/Carrier Agreement and Power of Attorney",
                            "Proof of Insurance: $1,000,000 Auto-Liability and $100,00 Cargo Coverage"
                        ]} 
                    />

                    <div className="w-full">
                        <RequestForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestDispatchService;