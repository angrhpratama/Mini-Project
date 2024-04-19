'use client'

import { LinkIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, ButtonGroup, Center, Divider, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Link, LinkBox, MenuButton, Spacer } from '@chakra-ui/react'

import React from 'react'

export default function Navbar() {
  return (

    <Flex
      alignItems='center'
      bg='black'
      p='20px'>

      <Box ml='100px'>
        <Link href="/">
          <Image
            w='135px'
            h='50px'
            src='https://res.cloudinary.com/dhioc6nup/image/upload/v1713109589/mini%20project/yahmax8x0aq3sf9zj7ya.png' alt='Gambar Logo' />
        </Link>
      </Box>

      <Box ml='50px'>
        <InputGroup>
          <InputLeftElement pointerEvents="none"
            children={<SearchIcon color="grey" w='15px' />} />
          <Input
            bg='white'
            w='600px'
            h='40px'
            type='search'
            color='grey'
            fontSize='medium'
            placeholder='Search by artist, event or venue' padding="0 40px" />
        </InputGroup>
      </Box>

      <Box
        ml='110'>

        <ButtonGroup gap='2'>
          <Button color='white' bgColor='black' variant='outline'>
            Ticket
          </Button>


          <Link href="/create-event">
            <Button color='white' bgColor='black' variant='outline' >
              Create Event
            </Button>
          </Link>

          <Button color='white' bgColor='black' variant='outline' >
            Log in
          </Button>
        </ButtonGroup>
      </Box>

      <Center height='50px'>
        <Divider ml='5' orientation='vertical' />
      </Center>

      <Link href='/profile' >
        <Avatar
          ml='5'
          size='sm'
          src='https://bit.ly/broken-link' />
      </Link>


    </Flex >


  )
}
