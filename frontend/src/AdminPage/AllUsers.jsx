import React, { useEffect, useState } from 'react'
import {
    Button,
    Flex,
    SimpleGrid,
    Stack,
    chakra,
    useColorModeValue,
} from "@chakra-ui/react";
import Navbar from './Navbar';

const AllUsers = () => {

    const [users, setUser] = useState([])
    const Users = () => {
        fetch(`http://localhost:8080/user`).then((res) => {
            return res.json()
        }).then((res) => {
            setUser(res)
        })
    }
    useEffect(() => {
        Users()
    }, [])





    console.log(users)
    const deletedata = (e) => {

        fetch(`http://localhost:8080/user/delete/${e}`, {
            method: 'DELETE'
        }).then((res) => {
            return res.json()
        }).then((res) => {
            setUser(res)
        })
    }



    const dataColor = useColorModeValue("white", "gray.800");
    const bg = useColorModeValue("white", "gray.800");
    const bg2 = useColorModeValue("gray.100", "gray.700");



    return (
        <>
            <Navbar />
            <Flex
                w="full"
                bg="#edf3f8"
                _dark={{ bg: "#3e3e3e" }}
                p={50}
                alignItems="center"
                justifyContent="center"
            >
                <Stack
                    direction={{ base: "column" }}
                    w="full"
                    bg={{ md: bg }}
                    shadow="lg"
                >
                    {users && users?.map((person, pid) => {
                        return (
                            <Flex
                                direction={{ base: "row", md: "column" }}
                                bg={dataColor}
                                key={pid}
                            >
                                <SimpleGrid
                                    spacingY={3}
                                    columns={{ base: 1, md: 3 }}
                                    w={{ base: 120, md: "full" }}
                                    textTransform="uppercase"
                                    bg={bg2}
                                    color={"gray.500"}
                                    py={{ base: 1, md: 4 }}
                                    px={{ base: 2, md: 10 }}
                                    fontSize="md"
                                    fontWeight="hairline"
                                >
                                    <span>Name</span>
                                    <span>Email</span>
                                    <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
                                </SimpleGrid>
                                <SimpleGrid
                                    spacingY={3}
                                    columns={{ base: 1, md: 3 }}
                                    w="full"
                                    py={2}
                                    px={10}
                                    fontWeight="hairline"
                                >
                                    <span>{person.name}</span>
                                    <chakra.span
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                    >
                                        {person.email}
                                    </chakra.span>
                                    <Flex justify={{ md: "end" }}>
                                        <Button onClick={() => deletedata(person._id)} variant="solid" colorScheme="red" size="sm">
                                            Delete
                                        </Button>
                                    </Flex>
                                </SimpleGrid>
                            </Flex>
                        );
                    })}
                </Stack>
            </Flex>
        </>
    );
}

export default AllUsers
