'use client'

import { Menu } from "lucide-react";
import { useState } from "react";
import NavLink from "./NavLink";


const NavBarMenu = () => {
    const [menuView, setMenuView] = useState('hidden')

    const NavigationLinks = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About Us",
            url: "/aboutus",
        },
        {
            name: "Drive For Us",
            url: "/driveforus",
        },
        {
            name: "Services",
            url: "/requestdispatchservice",
        },
        {
            name: "Contact",
            url: "/contactus",
        },
    ]

    const handleClick = () => {
        if (menuView === 'block') {
            setMenuView('hidden')
        } else if (menuView === 'hidden') {
            setMenuView('block')
        }
    };

    const handleClose = () => {
        setMenuView('hidden')
    };

    const NavMenu = () => {
        return(
            <div className={`bg-white rounded-lg p-3 ${menuView}`}>
                <ul
                    id="mobileMenu"
                    onClose={handleClose}
                >
                    {NavigationLinks.map(({name, url}) => (
                        <li key={name}>
                            <NavLink href={url} className="inline-block text-start px-6 py-3 font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out text-[#2a2a2a]" onClick={handleClose}>
                                {name}
                            </NavLink>
                            <hr />
                        </li>
                        
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div
            onClick={handleClick}
            className="grid justify-items-end"
        >
            <Menu className="block md:hidden" size={36} />
            <NavMenu />
        </div>
    );
}

export default NavBarMenu;