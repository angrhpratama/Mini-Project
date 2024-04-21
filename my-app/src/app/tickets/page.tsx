'use client'

import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import logo from '../assets/mp logo.png'
import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, ButtonGroup, Input, InputGroup, InputLeftElement, Flex, Avatar } from '@chakra-ui/react'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'


export default function Ticket() {
    return (

        <div>

            <Navbar />

            <Flex  bg='#f5deb3' p='20px'>
                
                <Box ml='50px'>
                    <Text fontSize='4xl' as='b'>Tickets</Text>
                </Box>
                
                <Box ml='auto' mt='5px' mr='100px'>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none"
                        children={<SearchIcon color="grey" w='15px' />} />
                        <Input
                        bg='white'
                        w='300px'
                        h='40px'
                        type='search'
                        color='grey'
                        fontSize='medium'
                        placeholder='Search Ticket' padding="0 40px" />
                    </InputGroup>
                </Box>

            </Flex>

            <Center>
                <Box mt='20px'
                    ml='50px' 
                    mr='10px' 
                    mb='50px'
                    borderWidth='1px' 
                    borderRadius='lg' 
                    pt='10px' 
                    pl='20px' 
                    pr='10px' 
                    pb='50px' 
                    width="60%">

                    <Flex flexDirection="column" alignItems="flex-start">
                        <Flex>
                            
                            <Box>
                                <Text fontSize='md' mt='25px' textAlign="center">Event Name</Text> 
                                <Divider />
                                <Text fontSize='sm' textAlign="center" mt='10px'>More Funtastic</Text>
                            </Box>
                                
                            <Box ml='80px'>
                                <Text fontSize='md' mt='25px' textAlign="center">Event Date</Text> 
                                <Divider />
                                <Text fontSize='sm' textAlign="center" mt='10px'>25/07/2024</Text>
                            </Box>

                            <Box ml='80px'>
                                <Text fontSize='md' mt='25px' textAlign="center">Quantity</Text> 
                                <Divider />
                                <Text fontSize='sm' textAlign="center" mt='10px'>1</Text>
                            </Box>

                        <ButtonGroup ml='auto' mt='30px'>
                            <Button ml='60px' >Event Details</Button>
                            <Button ml='30px' bg='#f5deb3' >Ticket Details</Button>
                        </ButtonGroup>

                        </Flex>
                    </Flex>
                </Box>
            </Center>

            <Footer />


        </div>
    )
}
