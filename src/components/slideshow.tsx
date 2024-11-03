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

import { useWindowSize } from '@/getWindowSize';

export default function Slideshow({ images }: PropsType): JSX.Element {
    const res = useWindowSize();
    const width = res[0];
    const height = res[1];
    let slideSettings = {};
    if (width < 769) {
        console.log("Mobile");

        slideSettings = {
            0: {
                slidesPerView: 0,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 0,
                spaceBetween: 10,
            },
        };
    } else {
        console.log("Desktop");

        slideSettings = {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        };
    }
    let imageStyle = "";
    if (width > 768) {
        imageStyle = styles.slideImage;
    }
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
            className={styles.slideWrapper + "w-full h-1/5"}
        >
            {images.map((src: string, index: number) => (
                <SwiperSlide key={index}>
                    <Image
                        src={src}
                        alt="Slider Image"
                        width={width}
                        height={height / 5}
                        sizes="(min-width: 1024px) 100vw, 60vw h-1/5"
                        className={imageStyle}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}