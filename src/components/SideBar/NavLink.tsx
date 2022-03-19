import { Icon, Link as ChakraLink, Text , LinkProps as ChakraLinkProps, color } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType
    children: string
    href: string
}

export default function NavLink({ icon , href, children, ...rest}: NavLinkProps) {
    const { asPath } = useRouter()

    return(
        <Link href={href} passHref >
            <ChakraLink display='flex' align='center' color={ asPath === href ? 'pink.500' : 'gray.50'} {...rest}>
                <Icon as={icon} fontSize='20' />
                <Text ml='4' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </Link>
    )
}