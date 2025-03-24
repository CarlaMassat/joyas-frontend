import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";



export const Layout = () => {
  return ( 
    <>
    <Navbar/>
    <main className="container mx-auto py-16">
      <Outlet />
      </main>
      <Footer/>
    </>

  )
}

