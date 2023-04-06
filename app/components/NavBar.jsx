import Image from "next/image";
import NavLink from "./NavLink";
import RTLogo from "../../public/russelltransportlogo.png"
import NavBarMenu from "./NavBarMenu";

const ButtonGroup = ({title, href}) => {
    return (
        <NavLink 
            href={href}
            className="
            hover:bg-[#c29836]
            focus:bg-[#c29836]
            active:bg-[#c29836]
            inline-block 
            text-sm
            px-4
            py-2
            font-bold 
            uppercase 
            transition 
            duration-150 
            ease-in-out 
            focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light"
        >
        {title}
        </NavLink>
    )
    
}
const NavBar = () => {
    return (
        <header className="
            w-full
            flex 
            flex-wrap
            items-center
            justify-between
            py-6
            px-6
        ">
            <NavLink href='/'>
                <Image
                    src={RTLogo}
                    alt="Russell's Transport Logo"
                    width={80}
                    height={80}
                />
            </NavLink>

            <div className="grow" />

            <div className="hidden md:flex items-center justify-center">
                <div
                    className="divide-x divide-[#FFC947] inline-flex transition duration-150 ease-in-out"
                    role="group"
                >
                    <ButtonGroup 
                        title="Home"
                        href="/"
                    />
                    <ButtonGroup 
                        title="About Us"
                        href="/aboutus"
                    />
                    <ButtonGroup 
                        title="Drive For Us"
                        href="/driveforus"
                    />
                    <ButtonGroup 
                        title="Services"
                        href="/requestdispatchservice"
                    />
                    <ButtonGroup 
                        title="Contact"
                        href="/contactus"
                    />
                </div>
            </div>
            
                <NavBarMenu />
        </header>
    );
}

export default NavBar;