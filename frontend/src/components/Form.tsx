import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Image,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import Indicator from "./Indicator";

interface FormData {
  fullName: string;
  dateOfBirth: string;
  country: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    country: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add your submit logic here
  }

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={8}
      bg="white"
      boxShadow="md"
      borderRadius="3xl"
      p={8}
    >
      <VStack spacing={6} align="center">
        <Image
          src="https://cdn.prod.website-files.com/62a208274b86c4b7ff256f88/62cc5d032b55bd3668ba7e32_Header-Bird.svg"
          alt="Bree Bird Icon"
          h="90px"
        />
        <Heading as="h1" size="xl" textAlign="center">
          OFAC SDN Screening
        </Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullName"
                placeholder="Add your full name here."
                value={formData.fullName}
                onChange={handleInputChange}
                required
                bg="gray.50"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                name="dateOfBirth"
                placeholder="Add your date of birth here."
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                bg="gray.50"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                name="country"
                placeholder="Add your country here."
                value={formData.country}
                onChange={handleInputChange}
                required
                bg="gray.50"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            >
              Begin Screening
            </Button>
            <Indicator
              nameHit={true}
              dobHit={false}
              countryHit={false}
            ></Indicator>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}
