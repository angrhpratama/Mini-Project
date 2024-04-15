import { Swiper, SwiperSlide } from 'swiper/react';
import butterflyImg from "../assets/butterfly.jpeg";
import 'swiper/css';

import slide1 from "../assets/hindia.webp"
import slide2 from "../assets/nosstress.jpg"
import slide3 from "../assets/oasis.jpg"
import Image from 'next/image';






export default function Swipe() {
  return (

    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide >
        <Image
          src={slide1}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px" }}
        />
        </SwiperSlide>
      
      <SwiperSlide>
        <Image src={slide2}
          alt='/'
          width={1700}
          style={{ margin: "30px" }}
        />
       </SwiperSlide>
      
      <SwiperSlide>
      <Image src={slide3}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px" }}
        />
       </SwiperSlide>
      
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};



