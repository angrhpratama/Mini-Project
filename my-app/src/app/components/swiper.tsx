import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import slide1 from "../assets/hindia.jpeg"
import slide2 from "../assets/oasis.jpg"
import slide3 from "../assets/1.webp"
import slide4 from "../assets/2.jpg"
import slide5 from "../assets/2.webp"
import slide6 from "../assets/3.webp"
import slide7 from "../assets/4.jpg"
import slide8 from "../assets/5.jpg"
import Image from 'next/image';



export default function Swipe() {
  return (

    <Swiper
      spaceBetween={20}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >

      <SwiperSlide>
        <Image
          src={slide1}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px'}}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={slide2}
          alt='/'
          width={1700}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px' }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={slide3}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px' }}
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Image src={slide4}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px' }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={slide5}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px' }}
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Image src={slide6}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px' }}
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Image src={slide7}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px'}}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={slide8}
          alt='/'
          width={1000}
          height={400}
          style={{ margin: "30px", borderRadius: "10px",
          height: '400px',
          width: '600px' }}
        />
      </SwiperSlide>

      


    </Swiper>
  );
};



