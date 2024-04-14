'use client'

import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Center, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, MenuButton, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (

    <Flex
      alignItems='center'
      bg='black'
      p='20px'>

      <Box ml='70px'>
        <Image
          w='135px'
          h='50px'
          src='https://res.cloudinary.com/dhioc6nup/image/upload/v1713109589/mini%20project/yahmax8x0aq3sf9zj7ya.png' alt='Gambar Logo' />
      </Box>

      <Box ml='50px'>
        <InputGroup>
          <InputLeftElement pointerEvents="none"
            children={<SearchIcon color="grey" w='15px' ml='10' />} />
          <Search2Icon />
          <Input
            bg='white'
            w='600px'
            h='40px'
            type='search'
            color='grey'
            fontSize='medium'
            placeholder='Search by artist, event or venue' padding="0 45px" />
        </InputGroup>
      </Box>

      <Box
        ml='110px'>

        <ButtonGroup gap='2'>
          <Button color='white' bgColor='black' variant='outline'>
            Ticket
          </Button>

          <Button color='white' bgColor='black' variant='outline' >
            Create Event
          </Button>

          <Button color='white' bgColor='black' variant='outline' >
            Log in
          </Button>


        </ButtonGroup>


      </Box>

    </Flex >


  )
}
