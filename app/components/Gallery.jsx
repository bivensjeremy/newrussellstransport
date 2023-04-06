import Image from "next/image";

const aboutImages = [
    {
        id: 1,
        image: "/transport/IMG_5950.jpg",
        alt: 'truck image 1'
    },
    {
        id: 2,
        image: "/transport/IMG_5951.jpg",
        alt: 'truck image 2'
    },
    {
        id: 3,
        image: "/transport/IMG_5952.jpg",
        alt: 'truck image 3'
    },
    { 
        id: 4,
        image: "/transport/IMG_5953.jpg",
        alt: 'truck image 4'
    },
    {
        id: 5,
        image: "/transport/IMG_5954.jpg",
        alt: 'truck image 5'
    },
    {
        id: 6,
        image: "/transport/IMG_5955.jpg",
        alt: 'truck image 6'
    }
]

const Gallery = () => {
    return (
        <section className="mx-auto w-2/3">
            <div className="flex flex-wrap">
                {aboutImages.map(({image, id, alt}) => (
                    <div key={id} className="flex w-full md:w-1/3 p-1">
                        <div className="p-1 w-96 h-96 gap-1 relative">
                            <Image
                                src={image}
                                fill
                                // width={1028}
                                // height={822}
                                alt={alt}
                                sizes='33vw'
                                className='h-full w-full rounded-md object-cover'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;