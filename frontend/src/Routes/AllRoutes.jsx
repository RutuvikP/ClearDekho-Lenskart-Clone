import {Routes,Route} from 'react-router-dom';
import AdminDashboard from '../Pages/AdminDashboard';
import Home from '../Pages/Homepage/Home';
import SinglePage from '../Components/Products/SingleCArd';
import { Product } from '../Pages/Product';
import Cart from '../Pages/Cart';






const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
            <Route path="/eyeglasses/:id" element={<SinglePage />} />
            <Route path='/eyeglasses' element={<Product />} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    )
};

export default AllRoutes;