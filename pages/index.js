import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import { Box, Center, VStack } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Box w="100%" align="center">
      <VStack h="100vh" w="100%" maxW="container.lg">
        <Navbar />
        <Hero />
      </VStack>

      <About />
      <Education />
      <Experience />
    </Box>
  );
}
