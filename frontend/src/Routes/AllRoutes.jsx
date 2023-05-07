import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../Pages/AdminDashboard';
import Home from '../Pages/Homepage/Home';
import SinglePage from '../Components/Products/SingleCArd';
import { Product } from '../Pages/Product';
import AdminProducts from '../Pages/AdminProducts';
import AdminProductEdit from '../Pages/AdminProductEdit';
import AllUsers from "../AdminPage/AllUsers"



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/admindashboard' element={<AdminDashboard/>}/> */}
            <Route path="/eyeglasses/:id" element={<SinglePage />} />
            <Route path='/eyeglasses' element={<Product />} />
            <Route path='/adminproducts' element={<AdminProducts />} />
            <Route path="/allusers" element={<AllUsers/>}></Route>
            <Route path='/adminproducts/update/:id' element={<AdminProductEdit />} />
        </Routes>
    )
};

export default AllRoutes;