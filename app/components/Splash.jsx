import { PassionFont } from "../fonts";
import NavLink from "./NavLink";

const Splash = () => {
    return (
        <div className="h-screen">
            <div className="flex flex-col justify-center text-center container m-auto h-3/4 relative">
                <div className={PassionFont.className}>
                    <h1 className="text-6xl lg:text-8xl uppercase justify-center my-5 metallicCSS">
                        Russell&apos;s Transport, LLC
                    </h1>
                </div>

                <div className="flex flex-row mx-auto space-x-6">
                    <NavLink className="buttonOneCSS" href="/requestdispatchservice">
                        Request Service
                    </NavLink>

                    <NavLink className="buttonTwoCSS" href="/driveforus">
                        Drive For Us
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
}

export default Splash;