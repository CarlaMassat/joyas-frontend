import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";



export const Layout = () => {
  return (
    // Aca va el Header
     // Aca va el Navbar- Listo
      // Aca va el Footer- 
     
    <>
    <Navbar/>

    <main className="container mx-auto py-16">
      <Outlet />
      </main>
    </>

    // Aca va el  <Outlet />
  )
}

