import { featuresData } from "../data/featuresData";
import { PassionFont } from "../fonts";
import HandleAnythingCard from "./HandleAnythingCard";

const HandleAnythingSection = () => {
    return (
        <div className="max-w-4xl mx-auto w-full lg:w-2/5 px-3">
                <div className="text-center uppercase text-5xl my-5 border rounded-md">
                    <h3 className={PassionFont.className}>
                        We Can Handle Anything!
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    { featuresData.map(
                        HandleAnythingCard
                    )}
                </div>
            </div>
    );
}

export default HandleAnythingSection;