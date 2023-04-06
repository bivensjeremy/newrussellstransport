import NavLink from "./NavLink";

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row text-center bg-neutral-500 text-xs uppercase p-5">
            <div>
                <p>
                    &copy; {new Date().getFullYear()} Russell's Transport, LLC
                </p>
                
            </div>
            <div className="grow" />
            <div>
                <p>Web Services Provided by{' '}
                    <NavLink href="https://bivensblueprint.com" className="uppercase text-[#1f3c88]">
                        Bivens Blueprint, LLC
                    </NavLink>
                </p>
            </div>
            
               
        </footer>
    );
}

export default Footer;