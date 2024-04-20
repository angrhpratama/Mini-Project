'use client'

import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Box, Text } from '@chakra-ui/layout';
import { Input, AspectRatio, Container, Heading, Stack, Divider } from '@chakra-ui/react';


export default function CreateEvent() {

    return (
        <>
            <Navbar />

            <Container centerContent mt={3}>
                <Box mt={3} ml={5}>
                    <Text>Event Name</Text>
                    <Input placeholder='Give your event a name' size='sm' width='100%' />
                    <Text mt={3}>Event Description</Text>
                    <Input placeholder='Describe your event briefly' size='sm' width='100%' />
                    <Text mt={3}  >Upload Image</Text>

                    <Container my="3" display="flex" justifyContent="left">
                        <AspectRatio width="64" ratio={1}>
                            <Box
                                borderColor="gray.300"
                                borderStyle="dashed"
                                borderWidth="2px"
                                rounded="md"
                                shadow="sm"
                                role="group"
                                transition="all 150ms ease-in-out"
                                _hover={{
                                    shadow: "md"
                                }}
                            >
                                <Box position="relative" height="100%" width="100%">

                                    <Box
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        height="100%"
                                        width="100%"
                                        display="flex"
                                        flexDirection="column"
                                    >

                                        <Stack
                                            height="100%"
                                            width="100%"
                                            display="flex"
                                            alignItems="center"
                                            justify="center"
                                            spacing="4"
                                        >

                                            <Stack p="8" textAlign="center" spacing="1">
                                                <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                                    Drop images here
                                                </Heading>
                                                <Text fontWeight="light">or click to upload</Text>
                                            </Stack>

                                        </Stack>
                                    </Box>

                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept="image/*"
                                    />
                                </Box>
                            </Box>
                        </AspectRatio>
                    </Container>

                    <Divider />

                    <Text mt={3}  >Date and Time</Text>
                </Box>
            </Container>

            <Footer />

        </>
    )
}