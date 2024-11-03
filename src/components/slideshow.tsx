"use client";
import React from 'react';
import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./index.module.css";

type PropsType = {
    images: string[];
};

export default function Slideshow({ images }: PropsType): JSX.Element {
    const slideSettings = {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    };
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={slideSettings}
            slidesPerView={'auto'}
            centeredSlides={true}
            mousewheel={true}
            freeMode={true}
            loop={true}
            speed={1000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{
                clickable: true,
            }}
            className={styles.slideWrapper + "w-full max-w-full"}
        >
            {images.map((src: string, index: number) => (
                <SwiperSlide key={index}>
                    <Image
                        src={src}
                        alt="Slider Image"
                        width={1024}
                        height={768}
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        className={styles.slideImage}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}