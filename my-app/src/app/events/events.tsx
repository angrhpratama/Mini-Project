'use client'

import { Box, Divider, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Image } from "@chakra-ui/react"

function Events() {
    return (


        <SimpleGrid columns={[2, null, 3]} spacing='50px' m='150px'>


            <Card maxW='sm' shadow='2xl'>
                <CardBody>
                    <Image
                        src=''
                        alt='picture'
                        borderRadius='lg'
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
                        src=''
                        alt='picture'
                        borderRadius='lg'
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
                        src=''
                        alt='picture'
                        borderRadius='lg'
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
                        src=''
                        alt='picture'
                        borderRadius='lg'
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
                        src=''
                        alt='picture'
                        borderRadius='lg'
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
                        src=''
                        alt='picture'
                        borderRadius='lg'
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

    )
}

export default Events