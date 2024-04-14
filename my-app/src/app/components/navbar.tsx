'use client'

import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Center, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, MenuButton, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (

    <Flex
      alignItems='center'
      bg='black'
      p='10px'>

      <Box ml='50px'>
        <Image
          w='90px'
          h='40px'
          src='https://res.cloudinary.com/dhioc6nup/image/upload/v1713109589/mini%20project/yahmax8x0aq3sf9zj7ya.png' alt='Gambar Logo' />
      </Box>

      <Box ml='35px'>
        <InputGroup>
          <InputLeftElement pointerEvents="none"
            children={<SearchIcon color="grey" padding="4px" w='10px' ml='2' />} />
          <Input
            w='300px'
            h='25px'
            type='search'
            color='grey.700'
            fontSize='x-small'
            placeholder='Search by artist, event or venue' padding="0 20px" />
        </InputGroup>
      </Box>

      <Box
        ml='150px'>

        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
        <Spacer />
        </ButtonGroup>

        <Button colorScheme='white' >
          Ticket
        </Button>

        <Button colorScheme='teal' variant='outline'>
          Register
        </Button>

        <Button colorScheme='white' variant='outline' borderColor='white'>
          Create Event
        </Button>


      </Box>

    </Flex >


  )
}
