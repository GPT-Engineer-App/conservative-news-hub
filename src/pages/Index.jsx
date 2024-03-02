import React from "react";
import { Box, Container, Flex, Heading, Text, Image, VStack, HStack, Grid, GridItem, Link, Spacer, chakra } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegClock, FaRegEye } from "react-icons/fa";

const NewsCard = ({ title, summary, imageSrc, readTime, views }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="sm" p={4} bg="white">
      <Image src={imageSrc} borderRadius="md" />
      <VStack align="start" mt={2}>
        <Heading as="h3" size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text color="gray.600">{summary}</Text>
        <HStack fontSize="sm" color="gray.500">
          <FaRegClock />
          <Text>{readTime} min read</Text>
          <Spacer />
          <FaRegEye />
          <Text>{views} views</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction="column" gap={6}>
        {/* Header */}
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="xl" letterSpacing="tight">
            The Conservative Times
          </Heading>
          <FaRegNewspaper size="3rem" />
        </Flex>

        {/* Main news */}
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={[12, 12, 7]}>
            <NewsCard title="Local Economy Booms: Businesses Thrive" summary="The recent economic policies have shown a significant impact on the local businesses..." imageSrc="https://images.unsplash.com/photo-1480944657103-7fed22359e1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzaW5lc3N8ZW58MHx8fHwxNzA5Mzc1MzgwfDA&ixlib=rb-4.0.3&q=80&w=1080" readTime={5} views={1200} />
          </GridItem>
          <GridItem colSpan={[12, 12, 5]}>
            <NewsCard title="New Infrastructure Bill Passed" summary="The long-awaited infrastructure bill was passed last night, promising improvements..." imageSrc="https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzA5Mzc1MzgwfDA&ixlib=rb-4.0.3&q=80&w=1080" readTime={3} views={890} />
          </GridItem>
        </Grid>

        {/* Secondary news */}
        <Heading as="h2" size="lg" letterSpacing="tight" my={4}>
          More News
        </Heading>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          {Array.from({ length: 4 }).map((_, index) => (
            <GridItem key={index} colSpan={[12, 6, 3]}>
              <NewsCard title={`Headline ${index + 1}`} summary={`Summary of headline ${index + 1} with compelling details...`} imageSrc={`https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwaGVhZGxpbmUlMjAlMjQlN0JpbmRleCUyMCUyQiUyMDElN0R8ZW58MHx8fHwxNzA5Mzc1MzgxfDA&ixlib=rb-4.0.3&q=80&w=1080`} readTime={index + 2} views={300 * (index + 1)} />
            </GridItem>
          ))}
        </Grid>

        {/* Footer */}
        <Box as="footer" borderTopWidth="1px" pt={4}>
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} The Conservative Times</Text>
            <chakra.nav display="flex" gap={4}>
              <Link href="#" fontWeight="bold">
                About
              </Link>
              <Link href="#" fontWeight="bold">
                Contact
              </Link>
              <Link href="#" fontWeight="bold">
                Terms
              </Link>
            </chakra.nav>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
