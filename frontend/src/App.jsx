import "./App.css";
import Navbar from "./Components/Navbar";

import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/login/Login";
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      {/* <Signup /> */}
      {/* <Login/> */}
     
    </div>
  );
}

export default App;
