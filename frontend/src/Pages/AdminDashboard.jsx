import { useEffect, useState } from "react";
import axios from 'axios';
import { Bar, Doughnut, Pie, PolarArea, Radar, Scatter,Bubble } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"


import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
} from '@chakra-ui/react';

Chart.register(...registerables);

const AdminDashboard = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    const productsData = {
        labels: ['Products'],
        datasets: [
            {
                label: 'Total Products',
                data: [totalProducts],
                backgroundColor: '#3f51b5',
            },
        ],
    };

    const usersData = {
        labels: ['Users'],
        datasets: [
          {
            label: 'Total Users',
            data: [totalUsers],
            backgroundColor: '#FBC02D',
          },
        ],
      };

    useEffect(() => {
        axios.get("http://localhost:8080/eyeglasses")
            .then((res) => {
                // console.log(res);
                setTotalProducts(res.data.length)
            })
            .catch((err) => {
                console.log(err);
            })

        axios.get("http://localhost:8080/user")
            .then((res) => {
                // console.log(res);
                setTotalUsers(res.data.length)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <Box px={4} py={5}>
            <Heading as="h1" size="lg" mb={5}>
                Welcome Admin
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={5}>
                <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                    <Stat>
                        <StatLabel>Total Products</StatLabel>
                        <StatNumber>{totalProducts}</StatNumber>
                    </Stat>
                    <Box mt={4} m={'auto'}>
                        <Bar data={productsData} />
                    </Box>
                </Box>
                {/* <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                    <Stat>
                        <StatLabel>Total Orders</StatLabel>
                        <StatNumber>{totalOrders.length}</StatNumber>
                    </Stat>
                    <Box mt={4}>
                        <Doughnut data={ordersData} />
                    </Box>
                </Box> */}
                <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                    <Stat>
                        <StatLabel>Total Users</StatLabel>
                        <StatNumber>{totalUsers}</StatNumber>
                    </Stat>
                    <Box mt={4} m={'auto'}>
                        <Bar data={usersData} />
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    )
};

export default AdminDashboard;