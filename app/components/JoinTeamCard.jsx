import { Clipboard, ClipboardList, Headphones, Truck } from "lucide-react";
import { PassionFont } from "../fonts";

const JoinTeamCard = ({ title, props }) => {
    return (
        <div className="bg-white rounded-lg mb-3">
            <div className="p-5">
            {(function() {
                switch (title) {
                    case 'Driver Qualifications':
                        return <Truck size={48} className="m-auto" />
                    case "Our Truck Types":
                        return <Truck size={48} className="m-auto" />
                    case "Job Description":
                        return <Clipboard size={48} className="m-auto" />
                    case "Paperwork":
                        return <ClipboardList size={48} className="m-auto" />
                    case "Customer Service":
                        return <Headphones size={48} className="m-auto" />
                    default:
                        break;
                }
            }) ()}
                
                <h4 className={`${PassionFont.className} text-center text-3xl`}>
                    {title}
                </h4>

                <div className="m-auto text-start ">
                    {props.map((point) => (
                        <ul key={point} className="list-disc list-inside">
                            <li className="mb-1 text-md">
                                {point}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default JoinTeamCard;