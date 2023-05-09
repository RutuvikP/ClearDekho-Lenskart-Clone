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
import AdminNavbar from "../AdminPage/AdminNavbar";
Chart.register(...registerables);
 const AdminDashboard = () => {
     const [totalProducts, setTotalProducts] = useState(0);
     const [totalUsers, setTotalUsers] = useState(0);
     const [totaladmin,setAdmins]=useState(0);
     const [totalorders,setTotalorders]=useState([]);

     const productsData = {
        responsive:true,
         labels: ['Products'],
         datasets: [
             {
                 label: 'Total Products',
                 data: [totalProducts],
                 backgroundColor: '#3f51b5',
             },
         ],
     };

     const adminsData = {
        responsive:true,
         labels: ['Admin'],
         datasets: [
             {
                 label: 'Total Admin',
                 data: [totaladmin],
                 backgroundColor: '#C2185B',
             },
         ],
     };

     const usersData = {
        responsive:true,
         labels: ['Users'],
        datasets: [
           {
             label: 'Total Users',
             data: [totalUsers],
             backgroundColor: '#E64A19',
           },
        ],
       };

       const ordersData={
        responsive:true,
        labels:['Placed','Shipped','Delivered'],
        datasets:[
            {
                label:"Total Orders",
                data:[
                    totalorders.filter((el)=>el.status=="Placed").length,
                    totalorders.filter((el)=>el.status=="Shipped").length,
                    totalorders.filter((el)=>el.status=="Delivered").length
                ],
                backgroundColor: ['#11DAAC', '#9C27B0', '#FBC02D']
            }
        ]
       }

     useEffect(() => {
         axios.get(`${process.env.REACT_APP_BASEURL}/eyeglasses`)
             .then((res) => {
                 // console.log(res);
                 setTotalProducts(res.data.length)
             })
             .catch((err) => {
                 console.log(err);
             })
         axios.get(`${process.env.REACT_APP_BASEURL}/user`)
             .then((res) => {
                 // console.log(res);
                 setTotalUsers(res.data.length)
             })
             .catch((err) => {
                 console.log(err);
             })
         axios.get(`${process.env.REACT_APP_BASEURL}/admin`)
         .then((res)=>{
            // console.log(res);
            setAdmins(res.data.length)
         })
         .catch((err)=>{
            console.log(err);
         })
         axios.get(`${process.env.REACT_APP_BASEURL}/orders`)
         .then((res)=>{
            // console.log(res);
            setTotalorders(res.data)
         })
         .catch((err)=>{
            console.log(err);
         })
     }, [])
     return (
        <Box px={4} py={5}>
            <AdminNavbar/>
             <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={25}>
                 <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                    <Stat>
                         <StatLabel>Total Products</StatLabel>
                        <StatNumber>{totalProducts}</StatNumber>
                     </Stat>
                     <Box mt={4}>
                         <Bar data={productsData} />
                    </Box>
                 </Box>
                 <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                   <Stat>
                         <StatLabel>Total Orders</StatLabel>
                         <StatNumber>{totalorders.length}</StatNumber>
                     </Stat>
                     <Box mt={4}>
                         <Bar data={ordersData} />
                     </Box>
                 </Box>
                 <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                     <Stat>
                         <StatLabel>Total Users</StatLabel>
                         <StatNumber>{totalUsers}</StatNumber>
                     </Stat>
                     <Box mt={4}>
                         <Bar data={usersData} />
                     </Box>
                 </Box>
                 <Box bg="white" p={5} borderRadius="md" boxShadow="md">
                     <Stat>
                         <StatLabel>Total Admin</StatLabel>
                         <StatNumber>{totaladmin}</StatNumber>
                     </Stat>
                     <Box mt={4}>
                         <Bar data={adminsData} />
                     </Box>
                 </Box>
             </SimpleGrid>
         </Box>
     )
 };

 export default AdminDashboard;