import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" bg="gray.50">
      <Navbar />
      <Box flex={1} py={8}>
        {children}
      </Box>
    </Box>
  );
}
