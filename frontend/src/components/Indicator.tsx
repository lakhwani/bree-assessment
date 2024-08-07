import { Box, VStack, Icon, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface InterfaceProps {
  hit: boolean;
  nameHit: boolean;
  dobHit: boolean;
  countryHit: boolean;
}

export default function Indicator(props: InterfaceProps) {
  return (
    <Box>
      <VStack>
        <IndicatorItem hit={false} label={"Bread"}></IndicatorItem>
      </VStack>
    </Box>
  );
}

interface IndicatorItemProps {
  label: string;
  hit: boolean;
}

export function IndicatorItem({ hit, label }: IndicatorItemProps) {
  return (
    <Box display="flex" alignItems="center">
      <Text mr={2}>{label}</Text>
      <Icon
        as={hit ? CloseIcon : CheckIcon}
        color={hit ? "red.500" : "green.500"}
      />
    </Box>
  );
}
