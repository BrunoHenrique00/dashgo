import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export default function Profile({ showProfileData }: ProfileProps){
    return(
        <Flex align='center'>
            { showProfileData &&
            <Box mr='4' textAlign='right'>
                <Text>Bruno Henrique</Text>
                <Text color='gray.300' fontSize='small'>bh.bsb2011@hotmail.com</Text>
            </Box>
            }

            <Avatar size='md' name="Bruno Henrique"/>
        </Flex>
    )
}