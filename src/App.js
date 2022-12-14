// import logo from './logo.svg';cd 
import './App.css';
import Dashbord from './Component/ExalTechS/Dashbord/Dashbord';
import Navigation from "./Component/ExalTechS/Navigation/Navigation"
import Carousel from "./Component/ExalTechS/Carousel/CustomCarousel" 
import Courses from './Component/ExalTechS/Courses/Courses';
import Footer from "./Component/ExalTechS/Footer/Footer"
import { useState } from 'react';

function App() {
  const[show,setShow]=useState(false)
  return (
    <div className="App">
      <button style={{backgroundColor:"red"}} onClick={()=>setShow(!show)}>Dashboard</button>
    {show && <Dashbord/>}
    <hr></hr>
    <Navigation/>
    <hr></hr>
    <Carousel/>
    <hr/>
    <Courses/>
    <hr/>
    <Footer/>
    </div>
  );
}

export default App;
