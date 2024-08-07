import { Box, VStack, Heading, Text, Icon } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface IndicatorProps {
  nameHit: boolean;
  dobHit: boolean;
  countryHit: boolean;
}

const Indicator: React.FC<IndicatorProps> = ({
  nameHit,
  dobHit,
  countryHit,
}) => {
  const hit = nameHit || dobHit || countryHit;

  return (
    <Box
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="md"
      borderColor={hit ? "red.500" : "green.500"}
    >
      <Heading size="md" mb={4} color={hit ? "red.500" : "green.500"}>
        {hit ? "Hit" : "Clear"}
      </Heading>
      <VStack align="start" spacing={3}>
        <IndicatorItem label="Name" hit={nameHit} />
        <IndicatorItem label="Date of Birth" hit={dobHit} />
        <IndicatorItem label="Country" hit={countryHit} />
      </VStack>
    </Box>
  );
};

const IndicatorItem: React.FC<{ label: string; hit: boolean }> = ({
  label,
  hit,
}) => (
  <Box display="flex" alignItems="center">
    <Icon
      as={hit ? CloseIcon : CheckIcon}
      color={hit ? "red.500" : "green.500"}
      mr={2}
    />
    <Text>{label}</Text>
  </Box>
);

export default Indicator;
