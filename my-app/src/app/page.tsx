'use client'

import { Box, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./hero/hero";
import Events from "./events/events";
import Footer from "./components/footer";
import Swipe from "./components/swiper"

export default function Home() {
  return (
    <div>


      <Navbar />
      <Hero />
      <Swipe />
      <Events />
      <Footer />




    </div>
  );
}
