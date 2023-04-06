import Image from "next/image";
import NavLink from "./NavLink";

const EmailResults = ({ image, message, button, href }) => {
    return (
        <div className="bg-white rounded-lg p-5 text-center text-neutral-700">
            <Image
                src={image}
                alt="Email results image"
                width={200}
                className="m-auto rounded-lg"
            />
            <h4 className="text-2xl font-bold">
                {message}
            </h4>

            <NavLink href={href} className="buttonOneCSS">
                {button}
            </NavLink>
        </div> 
    );
}

export default EmailResults;