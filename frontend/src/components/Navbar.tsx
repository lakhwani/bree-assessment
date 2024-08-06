import { Box, Flex, Button, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" bg="white" boxShadow="sm" py={4}>
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Image
            src="https://cdn.prod.website-files.com/62a208274b86c4b7ff256f88/62c5a82c164fb80f06168a63_Logo%20-%20Black.svg"
            alt="Bree Logo"
            h="30px"
            mr={10}
            mx={6}
          />
        </Flex>
        <Flex align="center">
          <Flex as="nav" gap={6}>
            <Link
              as={NextLink}
              href="https://www.trybree.com/about"
              fontWeight="medium"
            >
              About
            </Link>
            <Link
              as={NextLink}
              href="https://www.trybree.com/blog"
              fontWeight="medium"
            >
              Blog
            </Link>
            <Link
              as={NextLink}
              href="https://www.trybree.com/faq"
              fontWeight="medium"
            >
              FAQ
            </Link>
            <Link
              as={NextLink}
              href="https://app.trybree.com/login"
              fontWeight="medium"
            >
              Log In
            </Link>
          </Flex>
          <Button
            mx={6}
            as={NextLink}
            href="/"
            bg="black"
            color="white"
            fontWeight="medium"
            borderRadius="full"
            _hover={{ bg: "gray.800" }}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
