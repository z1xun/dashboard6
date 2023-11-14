import React from 'react';
import { MoonIcon } from '@chakra-ui/icons';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import MiniStatistics from '../components/home/MiniStatistics';
import IconBox from '../components/icon/IconBox';

const boxBg = 'secondary.500';

const Home = () => {
    return (
        <Layout title="DashBoard" pagename="DashBoard">
            {/*  columns={{ sm: 1, md: 2, lg: 3, '2xl': 6 }} */}
            <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={'20px'}>
                <MiniStatistics name="Earnings" value="$350.4" startCont={<IconBox bg={boxBg} icon={<MoonIcon />} />} />
                <MiniStatistics
                    name="Spend this month"
                    value="$642.39"
                    startCont={<IconBox w="20px" h="20px" bg={boxBg} icon={<MoonIcon />} />}
                />
                <MiniStatistics name="Sales" value="$574.34" growth="+23%" />
                <MiniStatistics
                    name="Your balance"
                    value="$1,000"
                    endCont={
                        <Flex
                            w={'56px'}
                            h={'56px'}
                            bg={'gray.100'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderRadius={'50%'}
                        >
                            <MoonIcon />
                        </Flex>
                    }
                />
                <MiniStatistics name="New Tasks" value="154" />
                <MiniStatistics name="Total Projects" value="2935" />
            </SimpleGrid>
        </Layout>
    );
};

export default Home;
