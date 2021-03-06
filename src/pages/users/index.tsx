import { Box , Button, Checkbox, Flex, Heading, Icon,Text, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";

import Link from "next/link";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";

export default function UserList(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const [page, setPage] = useState(1)
    const { data , isLoading , isFetching , error} = useUsers(page)

    return (
        <Box>
            <Header />

            <Flex w='100%'my='6'maxWidth='1480'mx='auto'px='6'>
                <SideBar />
                <Box
                 flex='1'
                 borderRadius={8}
                 bg='gray.800'
                 p='8'
                >
                    <Flex mb='8'justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Usuários
                            { isFetching && !isLoading && <Spinner size='sm' color="gray.500" ml='4' />}
                        </Heading>
                        <Link href={'/users/create'} passHref>
                            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} fontSize='20'/>}>
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    { isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ?(
                        <Flex justify='center'>
                            <Text>Falha ao carregar dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                        <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4','4','6']} color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink'/>
                                </Th>
                                <Th>Usuários</Th>
                                { isWideVersion && <Th>Data de cadastro</Th>}
                                <Th w='8'/>
                            </Tr>
                        </Thead>    
                        <Tbody>
                            {
                                data.users.map( user => {
                                    return (
                                        <Tr px='6' key={user.name}>
                                            <Td px={['4','4','6']}>
                                                <Checkbox colorScheme='pink'/>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight='bold'>{user.name}</Text>
                                                    <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                </Box>
                                            </Td>
                                            { isWideVersion &&
                                            <Td>
                                                {user.createdAt}
                                            </Td>
                                                }
                                            <Td>
                                            { isWideVersion &&
                                            <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine}/>}>
                                                Editar
                                            </Button>
                                            }
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                    <Pagination onPageChange={setPage}  totalCountOfRegisters={data.totalCount} currentPage={page} />
                    </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}