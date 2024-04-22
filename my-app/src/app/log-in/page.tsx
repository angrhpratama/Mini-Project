import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import logo from '../assets/mp logo.png'
import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react'
import Image from 'next/image'
import { PasswordField } from '../components/passwordField'


export default function Login() {
    return (

        <div>

            <Navbar />

            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Center>
                            <Image src={logo} width='70' alt='logo' />
                        </Center>
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                            <Text color="fg.muted">
                                Don't have an account? <Link href="#">Sign up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" />
                                </FormControl>
                                <PasswordField />
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button variant="text" size="sm">
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button>Sign in</Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>

            profile
            <Footer />


        </div>
    )
}
