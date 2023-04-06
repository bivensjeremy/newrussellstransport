import Image from "next/image";

const SectionImage = ({ image }) => {
    return (
        <div className="w-full lg:w-3/5 overflow-hidden h-full lg:h-[600px]">
            <Image
                src={image}
                alt="Section Descriptor Image"
                sizes="60vw"
                className="object-center w-full "
            />
        </div>
    );
}

export default SectionImage;