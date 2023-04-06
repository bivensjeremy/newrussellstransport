'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ServicesCard from "./ServicesCard";
import { Award, Clock2, Globe2, Truck } from "lucide-react";

const ServicesCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false} 
            showThumbs={false}
            showIndicators={false}
            interval={5000}
        >
            
            <div className="">
                <Truck size={48} color="#FFC947" className="m-auto pb-2" />
                <ServicesCard
                    name="Services"
                    data={[
                        "Long Hauls",
                        "Short Hauls",
                        "Wide Loads",
                        "Effectively Book Loads (Dispatching)"
                    ]}
                />
            </div>
                
            
            <div>
                <Clock2 size={48} color="#FFC947"  className="m-auto pb-2" />
                <ServicesCard
                    name="Speed"
                    data={[
                        "Same day pickup & delivery.",
                        "Adhere to time-critical loads.",
                        "On-time pickup appointments.",
                        "Efficiently, quickly & safely strapping and securing loads."
                    ]}
                />
            </div>

            <div>
                <Award size={48} color="#FFC947"  className="m-auto pb-2" />
                <ServicesCard
                    name="Quality"
                    data={[
                        "Professionalism at all times.",
                        "Safely strap and secure loads (including chains and tarps).",
                        "Proficiently picking up and delivery loads."
                    ]}
                />
            </div>

            <div>
                <Globe2 size={48} color="#FFC947"  className="m-auto pb-2" />
                <ServicesCard
                    name="Location"
                    data={[
                        "Georgia, Florida, Alabama,",
                        "Mississippi, Tennessee, Louisiana,",
                        "Arkansas, Kentucky, Texas,",
                        "Virginia, South Carolina, & North Carolina",
                    ]}
                />
            </div>
                
            
        </Carousel>
    );
}

export default ServicesCarousel;