import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Flex, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import Banner from "../theme/components/marketplace/Banner";
const MarketPlace = () => {
    return (
        <Layout title={"NFT MarketPlace"} pagename={"MarketPlace"}>
            <Grid
                gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
                gap={{ base: "20px", xl: "20px" }}
                display={{ base: "block", xl: "grid" }}
            >
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
                    w="100%"
                    h="300px"
                    mb={"20px"}
                >
                    <Banner />
                    <SimpleGrid columns={[1, 3]} spacing={"20px"} mt={"20px"}>
                        <Box w="100%" h="300px" bg="red"></Box>
                        <Box w="100%" h="300px" bg="red"></Box>
                        <Box w="100%" h="300px" bg="red"></Box>
                    </SimpleGrid>
                </Flex>
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
                    w="100%"
                    h="300px"
                    bg="red"
                ></Flex>
            </Grid>
        </Layout>
    );
};
export default MarketPlace;
