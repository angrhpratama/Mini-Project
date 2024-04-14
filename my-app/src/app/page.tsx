'use client'

import { Box, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import { SearchIcon } from "@chakra-ui/icons";
import Hero from "./hero/hero";
import Events from "./events/events";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>


      <Navbar />
      <Hero />
      <Events />
      <Footer />





    </div>
  );
}
