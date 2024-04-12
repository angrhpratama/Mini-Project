'use client'

import { Box, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import { SearchIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <div>
      <Box color='white' bg='black'>
        Menu

        <InputGroup>
        <InputLeftElement  pointerEvents="none"
        children={<SearchIcon color="blue.500" />} />
          <Input w='300px' placeholder='Search by artist, event or venue' padding="0 30px" />
        </InputGroup>


      </Box>

      <Navbar />


    </div>
  );
}
