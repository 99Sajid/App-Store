import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom';
function App() {
  

  return (
    <>
      <div className='w-[90%] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
