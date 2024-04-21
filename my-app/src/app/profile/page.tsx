import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import logo from '../assets/mp logo.png'
import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Input, Flex, Avatar } from '@chakra-ui/react'
import Image from 'next/image'


export default function Profile() {
    return (

        <div>

            <Navbar />

            <Flex ml='10' mt='10' mb='10' >
                <Box ml='100' borderWidth='1px' borderRadius='lg' pt='10px' pl='100px' pr='100px' pb='80px'>
                    <Center>
                        <Avatar 
                        
                        size='xl'
                        src='https://bit.ly/broken-link' />
                        
                    </Center>

                    <Center>
                        <Text fontSize='lg' mt='3' as='b'>John Doe</Text> 
                    </Center>

                    <Center>
                        <Text fontSize='sm' mt='3'>Jakarta, Indonesia</Text>
                    </Center>

                    <Center>
                        <Text as='i' fontSize='xs' mt='3'>Joined March 2024</Text>
                    </Center>


                    <Box borderWidth='1px' borderRadius='lg' mt='40px' pl='10px' pr='10px' pb='10px'>

                    <Center>
                        <Text as='b' fontSize='sm' mt='4' textColor='green'>Redeemed Points</Text>
                    </Center>

                    <Center>
                        <Text fontSize='sm' mt='1' textColor='green'>10,000</Text>
                    </Center>

                    </Box>

                </Box>

                <Box ml='50px' mr='100px' borderWidth='1px' borderRadius='lg' pt='10px' pl='20px' pr='20px' pb='80px' width="40%">

                <Flex flexDirection="column" alignItems="flex-start">
                    <Flex justifyContent="space-between" width="100%">
                        <Text fontSize='md' mt='1'>Full Name</Text> 
                        <Text fontSize='sm' mt='1.5' ml='auto' textAlign='right' textColor='grey'>John Doe</Text> 
                    </Flex>

                    <Divider/>

                    <Flex justifyContent="space-between" width="100%">
                        <Text fontSize='md' mt='3'>Gender</Text> 
                        <Text fontSize='sm' mt='3.5' ml='auto' textAlign='right' textColor='grey'>Male</Text> 
                    </Flex>

                    <Divider/>

                    <Flex justifyContent="space-between" width="100%">
                        <Text fontSize='md' mt='3'>Email</Text> 
                        <Text fontSize='sm' mt='3.5' ml='auto' textAlign='right' textColor='grey'>johndoe@gmail.com</Text> 
                    </Flex>

                    <Divider/>

                    <Flex justifyContent="space-between" width="100%">
                        <Text fontSize='md' mt='3'>Phone</Text> 
                        <Text fontSize='sm' mt='3.5' ml='auto' textAlign='right' textColor='grey'>+62 813 4567 8910</Text> 
                    </Flex>

                    <Divider/>

                    <Flex justifyContent="space-between" width="100%">
                        <Text fontSize='md' mt='3'>Address</Text> 
                        <Text fontSize='sm' mt='3.5' ml='auto' textAlign='right' textColor='grey'>Jl. Veteran Raya No. 18C</Text> 
                    </Flex>

                </Flex>

                <Divider />
                    
                    <Center mt='30px'>
                        <Button fontSize='sm'>Edit Profile</Button>
                    </Center>

                    <Center mt='30px'>
                        <Button fontSize='sm'>Change Password</Button>
                    </Center>
                </Box>
            </Flex>

            <Footer />


        </div>
    )
}
