import { CheckSquare } from "lucide-react";
import { PassionFont } from "../fonts";

const WhatYouNeed = ({ props, title }) => {
    return (
        <div className="rounded-lg bg-white p-5 my-3">
            <div className="text-center">
                <h3 className={`${PassionFont.className}  text-5xl mb-3`}>
                    {title}
                </h3>
            
                <div className="w-full lg:w-3/5 m-auto text-start">
                    {props.map((point) => (
                        <ul key={point}>
                            <li className="gap-2 text-xl flex">
                                <CheckSquare /> {point}
                            </li>
                        </ul>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default WhatYouNeed;