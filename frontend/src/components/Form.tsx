import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Indicator from "./Indicator";

interface FormData {
  fullName: string;
  birthYear: string;
  country: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    birthYear: "",
    country: "",
  });
  const [showIndicator, setShowIndicator] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [screening, setScreening] = useState({
    hit: false,
    nameHit: false,
    dobHit: false,
    countryHit: false,
  });

  const toast = useToast();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    return {};
  }

  return (
    <Box>
      <Box maxW="md" mx="auto" mt={8}>
        <Heading mb={6}>Add Details</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <Input
              name="birthYear"
              placeholder="Birth Year"
              type="number"
              value={formData.birthYear}
              onChange={handleInputChange}
              required
            />
            <Input
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Screening"
              width="full"
            >
              Screen Candidate
            </Button>
          </VStack>
        </form>
        {showIndicator && <Indicator {...screening} />}
      </Box>
      <Indicator
        hit={false}
        nameHit={false}
        dobHit={false}
        countryHit={false}
      ></Indicator>
    </Box>
  );
}
