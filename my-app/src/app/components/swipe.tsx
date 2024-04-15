import { useSwiper } from 'swiper/react';

export default function Swipe2() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}