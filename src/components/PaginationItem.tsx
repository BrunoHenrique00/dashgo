import { Button } from "@chakra-ui/react";
import { number } from "yup/lib/locale";

interface PaginationItemProps {
    isCurrent?: boolean
    number: number
    onPageChange: (page: number) => void
}

export default function PaginationItem({ isCurrent , number , onPageChange }: PaginationItemProps){

    if(isCurrent){
        return (
            <Button
                size='sm'
                fontSize='xs'
                w='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }
    return (
        <Button
            size='sm'
            fontSize='xs'
            w='4'
            bgColor='gray.700'
            _hover={{
                bg: 'gray.500'
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}