import { Carousel } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
    const images = [
        {
            src: "https://images.pexels.com/photos/12595741/pexels-photo-12595741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kelingking Beach, Nusa Penida",
        },
        {
            src: "https://images.unsplash.com/photo-1574080344876-1f4089ba07fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Pura Ulun Bedugul, Bali",
        },
        {
            src: 'https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "Mount Bromo, East Java",
        },
        {
            src: 'https://images.unsplash.com/photo-1657788405193-c2039edaad6b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "Padar Island, Labuan Bajo",
        },
        // Add more images with captions as needed
    ];

    return (
        <>
            <div className="absolute z-50 top-[-300px] w-full">
                <img src="/assets/down-arrow-svgrepo-com.svg" alt="" className="mx-auto w-[30px] h-[30px]" />
            </div>
            <h2 className="text-4xl text-white absolute z-50 top-[-70px] font-semibold">
                Popular Destination in{" "}
                <span className="text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-white">
                    Indonesia
                </span>
            </h2>
            <Carousel
                className="rounded-xl w-full h-96 mx-auto mb-36"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-full relative"
                    >
                        <img
                            src={image.src}
                            alt={`image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/30">
                            <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    {image.caption}
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
}
