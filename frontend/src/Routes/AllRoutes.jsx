import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import SinglePage from '../Pages/SinglePage';



const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/SinglePage" element={<SinglePage />} />
            
        </Routes>
    )
};

export default AllRoutes;