import React from "react";
import './App.css'
import AppStore from './Components/AppStore/AppStore'
import Banner from './Components/banner/Banner'
import Hero from './Components/hero/Hero'
import Navbar from './Components/navbar/Navbar'
import Services from './Components/services/Services'
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Components/testimonial/Testimonial";
import Footer from "./Components/footer/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className='dark:bg-gray-900 dark:text-white'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App
