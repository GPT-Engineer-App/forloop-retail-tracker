import { Box, Flex, Heading, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Table, Thead, Tbody, Tr, Th, Td, Checkbox, CheckboxGroup, Stack, Stat, StatLabel, StatNumber, StatGroup, useColorModeValue, Image, Link, Spacer } from "@chakra-ui/react";
import { FaChartLine, FaTags, FaDollarSign, FaStore } from "react-icons/fa";

const Index = () => {
  // Mock data for the table
  const productData = [
    {
      ean: "DE: 0761040097215",
      id: "123456",
      title: "Lindor tablet milk 100 g",
      inSale: "20%",
      retailer: "Retailer A",
      country: "Czechia",
      url: "#",
      avgPrice: "50,00 CZK",
      minPrice: "45,00 CZK",
      maxPrice: "55,00 CZK",
      date: "2023-03-10",
    },
    // More mock data entries...
  ];

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex bg="blue.500" color="white" p={4} alignItems="center">
        <Heading size="md">Forloop</Heading>
        <Spacer />
        <Select placeholder="Main page" variant="outline" borderColor="white" color="white" size="sm" w="auto" />
        <Select placeholder="Retailer View" variant="outline" borderColor="white" color="white" size="sm" ml={2} w="auto" />
      </Flex>

      {/* Product Selection */}
      <Flex p={4} borderBottom="1px" borderColor="gray.200">
        <Box>
          <Select placeholder="Lindor tablet milk 100 g">{/* Product options */}</Select>
          <Text fontSize="sm">EAN: DE: 0761040097215</Text>
          <Text fontSize="sm">Series: Lindor</Text>
        </Box>
        {/* Additional Filters */}
        {/* ... */}
      </Flex>

      {/* Country/Retailer Selection */}
      <Tabs variant="soft-rounded" colorScheme="green" mt={4}>
        <TabList>
          <Tab>Austria</Tab>
          <Tab>Czechia</Tab>
          {/* More countries */}
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Content for each country */}
            <CheckboxGroup colorScheme="green">
              <Stack direction="row">
                <Checkbox>Retailer A</Checkbox>
                <Checkbox>Retailer B</Checkbox>
                {/* More retailers */}
              </Stack>
            </CheckboxGroup>
          </TabPanel>
          {/* More TabPanels for each country */}
        </TabPanels>
      </Tabs>

      {/* Line Chart Placeholder */}
      <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" mt={4}>
        <FaChartLine size="5em" />
        <Text>Line chart placeholder</Text>
      </Box>

      {/* Data Table */}
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>EAN</Th>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>% in sale</Th>
            <Th>Retailer</Th>
            <Th>Country</Th>
            <Th>URL</Th>
            <Th>Avg. sales price</Th>
            <Th>Min. sales price</Th>
            <Th>Max. sales price</Th>
            <Th>Senate Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productData.map((product, index) => (
            <Tr key={index}>
              <Td>{product.ean}</Td>
              <Td>{product.id}</Td>
              <Td>{product.title}</Td>
              <Td>{product.inSale}</Td>
              <Td>{product.retailer}</Td>
              <Td>{product.country}</Td>
              <Td>
                <Link href={product.url} isExternal>
                  Link
                </Link>
              </Td>
              <Td>{product.avgPrice}</Td>
              <Td>{product.minPrice}</Td>
              <Td>{product.maxPrice}</Td>
              <Td>{product.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Summary Cards */}
      <StatGroup mt={4}>
        <Stat>
          <StatLabel># Retailers</StatLabel>
          <StatNumber>4</StatNumber>
          <FaStore />
        </Stat>
        <Stat>
          <StatLabel>Avg. price</StatLabel>
          <StatNumber>66,76 CZK</StatNumber>
          <FaDollarSign />
        </Stat>
        <Stat>
          <StatLabel># Stores with promotions</StatLabel>
          <StatNumber>0,0%</StatNumber>
          <FaTags />
        </Stat>
      </StatGroup>

      {/* Footer */}
      <Flex as="footer" p={4} justifyContent="center" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">© 2023 Loop Technologies. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
