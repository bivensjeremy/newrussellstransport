import { PassionFont } from "../fonts";
import NavLink from "./NavLink";

const DriveForUsSection = () => {
    return (
        <div className="text-white px-5 m-auto w-full lg:w-2/5">

            <h3 className={`${PassionFont.className} text-6xl uppercase headerTextCSS`}>Drive For Us</h3>

            <p className="pr-12 py-7 text-lg">If you need your freight moved in a timely and efficient manner, call us today for a freight quote. Additionally, if you are looking to join our trucking team located in the Southeast Region, we would love for you to fill out our online interest application.</p>

            <NavLink className="buttonTwoCSS" href="/">
                Driver Application
            </NavLink>
        </div>
    );
}

export default DriveForUsSection;