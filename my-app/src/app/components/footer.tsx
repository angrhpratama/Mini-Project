'use client'

import { AbsoluteCenter, Box, Center, Container, Divider, Flex, Grid, HStack, Heading, List, ListItem, VStack } from "@chakra-ui/layout"
import Image from "next/image"
import logo from "../assets/mp logo(2).png"

function Footer() {
    return (

        <Box
            padding='50px'
            color='white'
            bg='black'
        >






            <HStack gap='40' >
                <Box>
                    <Heading size='sm'>
                        Tentang
                    </Heading>
                    <List mr='15' spacing='5'>
                        <li>
                            Tentang Kami
                        </li>
                        <li>
                            Blogs
                        </li>
                    </List>
                </Box>

                <List spacing='5'>
                    <Heading size='sm'>
                        Genre
                    </Heading>
                    <ListItem>
                        Jazz
                    </ListItem>
                    <ListItem>
                        Rock
                    </ListItem>
                    <ListItem>
                        Hardrock
                    </ListItem>
                    <ListItem>
                        Indie
                    </ListItem>
                </List>


                <List spacing='5'>
                    <Heading size='sm'>
                        Informasi
                    </Heading>
                    <ListItem>
                        Syarat & Ketentuan
                    </ListItem>
                    <ListItem>
                        FAQ
                    </ListItem>
                    <ListItem>
                        Tiket Gelang
                    </ListItem>
                    <ListItem>
                        Indie
                    </ListItem>
                </List>

                <List spacing='5'>
                    <Heading size='sm'>
                        Penyelenggara
                    </Heading>
                    <ListItem>
                        Daftar
                    </ListItem>
                    <ListItem>
                        Masuk
                    </ListItem>
                    <ListItem>
                        Creator
                    </ListItem>
                </List>

            </HStack>


            <Center mt='20' mb='10'>
                <Image
                    src={logo}
                    alt='Gambar Logo'
                    width='100'
                />
            </Center>

            <Divider />

            <Center mt='10'>
                © 2024 Festtix. All Rights Reserved
            </Center>
        </Box>

    )
}

export default Footer