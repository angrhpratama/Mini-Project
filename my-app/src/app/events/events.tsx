'use client'

import { Box, Center, Divider, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout"
import { Button, ButtonGroup, Card, CardBody, CardFooter } from "@chakra-ui/react"
import Image from "next/image"

import slide1 from "../assets/hindia.webp"
import slide2 from "../assets/oasis.jpg"
import slide3 from "../assets/1.webp"
import slide4 from "../assets/2.jpg"
import slide5 from "../assets/2.webp"
import slide6 from "../assets/3.webp"
import slide7 from "../assets/4.jpg"
import slide8 from "../assets/5.jpg"

function Events() {
    return (

        <>
            <SimpleGrid columns={[2, null, 3]} spacing='50px' m='90px'>


                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide1}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide2}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide4}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide6}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>


                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide5}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide3}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide7}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide8}
                            alt='picture'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                price
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <ButtonGroup spacing='2'>
                            <Button color='white' variant='solid' bg='black' colorScheme='yellow'>
                                Buy ticket
                            </Button>
                            <Button color='black' variant='ghost' colorScheme='yellow' bg='yellowgreen'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <Center>
                <Button 
                bg='black'
                color='white'
                colorScheme='yellow' 
                variant='solid' 
                mb='20'
                w='150px'
                
                >
                    Load More
                </Button>
            </Center>

        </>
    )
}

export default Events