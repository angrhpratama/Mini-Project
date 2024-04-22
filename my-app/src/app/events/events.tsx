'use client'

import { Box, Center, Divider, Flex, HStack, Heading, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/layout"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Icon } from "@chakra-ui/react"
import Image from "next/image"
import ReactStars from "react-stars"

import slide1 from "../assets/hindia.jpeg"
import slide2 from "../assets/oasis.jpg"
import slide3 from "../assets/1.webp"
import slide4 from "../assets/2.jpg"
import slide5 from "../assets/2.webp"
import slide6 from "../assets/3.webp"
import slide7 from "../assets/4.jpg"
import slide8 from "../assets/5.jpg"
import placeIcon from "../assets/place.png"
import dateIcon from "../assets/date.png"
import Link from "next/link"

function Events() {
    return (

        <>
            <SimpleGrid columns={[2, null, 3]} spacing='50px' m='90px'>
                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Flex>
                        <Image
                            src={slide1}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                            />
                            </Flex>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Lagipula Hidup Akan Berakhir</Heading>
                            <Text color='grey'>
                                start from
                            </Text>
                            <Text color='chocolate' fontSize='2xl'>
                                Rp. 200.000
                            </Text>
                            <Image
                                src={placeIcon}
                                alt='location'
                                width='25'
                            />
                            <Image
                                src={dateIcon}
                                alt='Date'
                                width='25'
                            />
                        </Stack>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'} />
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card
                    maxW='sm'
                    shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide2}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text color='grey'>
                                start from
                            </Text>
                            <Text color='chocolate' fontSize='2xl'>
                                Rp. 500.000
                            </Text>
                            <Image
                                src={placeIcon}
                                alt='location'
                                width='25'
                            />
                            <Image
                                src={dateIcon}
                                alt='Date'
                                width='25'
                            />
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'#ffd700'} />
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card maxW='sm' shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide4}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='grey'>
                                start from
                            </Text>
                            <Text
                                color='chocolate'
                                fontSize='2xl'>
                                Rp. 150.000
                            </Text>
                            <Image
                                src={placeIcon}
                                alt='location'
                                width='25'
                            />
                            <Image
                                src={dateIcon}
                                alt='Date'
                                width='25'
                            />
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'#ffd700'} />
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card
                    maxW='sm'
                    shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide6}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='grey'>
                                start from
                            </Text>
                            <Text
                                color='chocolate'
                                fontSize='2xl'>
                                Rp. 100.000
                            </Text>
                            <Image
                                src={placeIcon}
                                alt='location'
                                width='25'
                            />
                            <Image
                                src={dateIcon}
                                alt='Date'
                                width='25'
                            />
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'#ffd700'} />
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>


                <Card
                    maxW='sm'
                    shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide5}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <VStack alignItems='left'>
                                <Text color='grey'>
                                    start from
                                </Text>
                                <Text
                                    color='chocolate'
                                    fontSize='2xl'>
                                    Rp. 100.000
                                </Text>
                                <Image
                                    src={placeIcon}
                                    alt='location'
                                    width='25'
                                />
                                <Image
                                    src={dateIcon}
                                    alt='Date'
                                    width='25'
                                />
                                <ReactStars
                                    count={5}
                                    size={24}
                                    color2={'#ffd700'} />
                            </VStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card
                    maxW='sm'
                    shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide3}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <VStack alignItems='left'>
                                <Text color='grey'>
                                    start from
                                </Text>
                                <Text
                                    color='chocolate'
                                    fontSize='2xl'>
                                    Rp. 80.000
                                </Text>
                                <Image
                                    src={placeIcon}
                                    alt='location'
                                    width='25'
                                />
                                <Image
                                    src={dateIcon}
                                    alt='Date'
                                    width='25'
                                />
                                <ReactStars
                                    count={5}
                                    size={24}
                                    color2={'#ffd700'} />
                            </VStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card
                    maxW='sm'
                    shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide7}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <VStack alignItems='left'>
                                <Text color='grey'>
                                    start from
                                </Text>
                                <Text
                                    color='chocolate'
                                    fontSize='2xl'>
                                    Rp. 50.000
                                </Text>
                                <Image
                                    src={placeIcon}
                                    alt='location'
                                    width='25'
                                />
                                <Image
                                    src={dateIcon}
                                    alt='Date'
                                    width='25'
                                />
                                <ReactStars
                                    count={5}
                                    size={24}
                                    color2={'#ffd700'} />
                            </VStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Card
                    maxW='sm'
                    shadow='2xl'>
                    <CardBody>
                        <Image
                            src={slide8}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '240px',
                                width: '345px'
                              }}
                        />
                        <Stack
                            mt='6'
                            spacing='3'>
                            <Heading size='md'>Title of event</Heading>
                            <Text>
                                description of festival
                            </Text>
                            <Text color='grey'>
                                start from
                            </Text>
                            <Text
                                color='green'
                                fontSize='2xl'>
                                Free
                            </Text>
                            <Image
                                src={placeIcon}
                                alt='location'
                                width='25'
                            />
                            <Image
                                src={dateIcon}
                                alt='Date'
                                width='25'
                            />
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'#ffd700'} />
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <ButtonGroup spacing='2'>
                            <Button
                                color='white'
                                variant='solid'
                                bg='black'
                                colorScheme='yellow'>
                                Buy ticket
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <Center>
                <Link href='/buy-ticket'>
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
                </Link>
            </Center>

        </>
    )
}

export default Events