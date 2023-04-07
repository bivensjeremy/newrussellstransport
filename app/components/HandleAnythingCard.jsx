import Image from "next/image";

const HandleAnythingCard = ({id, image, description}) => {
    return (
        <div key={id} className="">
            <div className="flex h-36 w-36 mx-auto ">
                <div className="relative w-full overflow-hidden">
                    <Image 
                        src={image}
                        alt="Background image"
                        fill={true}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 25vw"
                        className="object-cover rounded-3xl"
                    />
                </div>
                
            </div>

            <div className="font-bold text-lg text-center">
                <h3>{description}</h3>
            </div>
        </div>
    );
}

export default HandleAnythingCard;