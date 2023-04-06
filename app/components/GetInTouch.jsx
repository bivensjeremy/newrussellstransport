import { Instagram, Mail, Phone, Smartphone } from "lucide-react";
import { PassionFont } from "../fonts";
import NavLink from "./NavLink";


const GetInTouch = () => {
    return (
        <div className="">
            <div className="bg-neutral-500 flex py-12">
                <div className="flex flex-col justify-center text-center m-auto ">
                    <h3 className={`${PassionFont.className} text-5xl uppercase justify-center font-bold text-[#2a2a2a] my-5`}>
                        Get In Touch With Us
                    </h3>

                    <NavLink className="buttonTwoCSS" href="/products/enrollment">
                        Contact Us
                    </NavLink>

                    <div className="flex flex-row m-auto space-x-5 my-5">
                        <NavLink href="tel:+14785951817">
                            <Phone size={28} className="text-[#2a2a2a] hover:text-[#FFC947]" />
                        </NavLink>
                        
                        <NavLink href="tel:+14785951897">
                            <Smartphone size={28} className="text-[#2a2a2a] hover:text-[#FFC947]" />
                        </NavLink>
                        
                        <NavLink href="mailto:info@russelstransportllc.com?subject=Contact From Website">
                            <Mail size={28} className="text-[#2a2a2a] hover:text-[#FFC947]" />
                        </NavLink>
                        
                        <NavLink  href="https://www.instagram.com/russellstransport/">
                            <Instagram size={28} className="text-[#2a2a2a] hover:text-[#FFC947]" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;