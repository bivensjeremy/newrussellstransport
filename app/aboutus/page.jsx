import Banner from "../components/Banner";
import bannerImage from "../../public/banners/truckBanner.jpg"
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Mission from "../components/Mission";

export const metadata = {
    title: "About Us"
}
const About = () => {
    return (
        <div>
            <Banner 
                image={bannerImage}
                title="About Us"
            />

            <div className="bg-neutral-500">
                <AboutUs />
                <Gallery />
                <Mission />
            </div>
        </div>
    );
}

export default About;