'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const GameCarousel = () => {
    const gameImages = [
        { id: 1, src: '/game.svg', alt: 'Game 1' },
        { id: 2, src: '/game.svg', alt: 'Game 2' },
        { id: 3, src: '/game.svg', alt: 'Game 3' },
        { id: 4, src: '/game.svg', alt: 'Game 4' },
        { id: 5, src: '/game.svg', alt: 'Game 5 ' },
        { id: 6, src: '/game.svg', alt: 'Game 6 ' },
    ];

    return (
        <div className="flex mx-auto row-span-2 w-auto h-full">
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,  
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,  // 2 slides for tablets
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,  // 3 slides for laptops/desktops
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 3,  // 4 slides for large screens
                        spaceBetween: 40,
                    },
                }}
            >
                {gameImages.map((game) => (
                    <SwiperSlide key={game.id}>
                        <Image
                            src={game.src}
                            alt={game.alt}
                            width={241}
                            height={250}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default GameCarousel;
