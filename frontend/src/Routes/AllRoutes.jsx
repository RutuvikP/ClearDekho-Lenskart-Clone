import {Routes,Route} from 'react-router-dom';
import SinglePage from '../Pages/SinglePage';
import Home from '../Pages/Homepage/Home';
import AdminDashboard from '../Pages/AdminDashboard';



const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/SinglePage" element={<SinglePage />} />
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
        </Routes>
    )
};

export default AllRoutes;