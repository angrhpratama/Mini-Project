import { Swiper, SwiperSlide } from 'swiper/react';
import butterflyImg from "../assets/butterfly.jpeg";
import 'swiper/css';
import { Image } from '@chakra-ui/react';

export default function Swipe() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image  src='https://t4.ftcdn.net/jpg/03/51/83/83/360_F_351838359_kFkeASu7BVyd3i9XiQShUN0TwBWVb07B.jpg'
                alt='/' 
                width={200}
                height={200}
                style={{ margin: "10px" }}
       />
        Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};



