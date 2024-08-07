import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Image,
  FormControl,
  FormLabel,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import Indicator from "./Indicator";
import { screenCustomer } from "../api/screeningApi";

interface FormData {
  fullName: string;
  dateOfBirth: string;
  country: string;
}

interface FormErrors {
  fullName?: string;
  dateOfBirth?: string;
  country?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    country: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [screeningResult, setScreeningResult] = useState<null | {
    nameHit: boolean;
    dobHit: boolean;
    countryHit: boolean;
  }>(null);
  const toast = useToast();

  function validateForm(): boolean {
    const errors: FormErrors = {};
    let isValid = true;

    if (formData.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters long";
      isValid = false;
    }

    const today = new Date();
    const birthDate = new Date(formData.dateOfBirth);
    if (isNaN(birthDate.getTime()) || birthDate > today) {
      errors.dateOfBirth = "Please enter a valid date of birth";
      isValid = false;
    }

    if (formData.country.trim().length < 2) {
      errors.country = "Country must be at least 2 characters long";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error when the user starts typing
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setScreeningResult(null);

    try {
      const result = await screenCustomer(
        formData.fullName,
        formData.dateOfBirth,
        formData.country
      );
      console.log(result);
      setScreeningResult(result);
    } catch (error) {
      toast({
        title: "Screening Failed",
        description: "There was an error while screening the customer.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
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
            <FormControl isInvalid={!!formErrors.fullName}>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullName"
                placeholder="Add your full name here."
                value={formData.fullName}
                onChange={handleInputChange}
                required
                bg="gray.50"
              />
              <FormErrorMessage>{formErrors.fullName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formErrors.dateOfBirth}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                bg="gray.50"
              />
              <FormErrorMessage>{formErrors.dateOfBirth}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formErrors.country}>
              <FormLabel>Country</FormLabel>
              <Input
                name="country"
                placeholder="Add your country here."
                value={formData.country}
                onChange={handleInputChange}
                required
                bg="gray.50"
              />
              <FormErrorMessage>{formErrors.country}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
              isLoading={isLoading}
              loadingText="Screening..."
            >
              Begin Screening
            </Button>
          </VStack>
        </form>
        {screeningResult && (
          <Indicator
            nameHit={screeningResult.nameHit}
            dobHit={screeningResult.dobHit}
            countryHit={screeningResult.countryHit}
          />
        )}
      </VStack>
    </Box>
  );
}
