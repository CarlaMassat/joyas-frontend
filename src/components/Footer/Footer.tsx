import { FaInstagram } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 ">
      <div className="container">
        {/*  brand info section*/}
        <div
          className="grid md:grid-cols-4 md:gap-4 py-5
        border-t-2 border-gray-300/10 text-white"
        >
          <div className="py-8 px-4 space-y-4">
            <div
              className="text-2xl flex items-center gap-2
            font-bold"
            >
              <GiDiamonds className="text-violet-600" />
              <p className="text-white">Rafi</p>
              <p className="text-white">Joyas</p>
            </div>
            <p>
              Entregando Elegancia y Satisfacción, <br /> Un Cliente a la Vez.
            </p>
            <div
              className="flex items-center justify-start 
            gap-5 !mt-6"
            >
              <NavLink to="https://maps.app.goo.gl/cDAdmukfy8ZmbRiZA">
                <HiLocationMarker className="text-xl" />
              </NavLink>

              <NavLink to="https://www.instagram.com/rafi.joyas/">
                <FaInstagram className="text-xl" />
              </NavLink>
            </div>
          </div>

          {/* Footer Links*/}

          <div
            className="grid grid-cols-2 md:grid-cols-3
        md:col-span-3 md:ml-14"
          >
            <div className="flex flex-col py-8 px-4 gap-2 ">
              <h1 className="sm:text-xl text-xl
              font-bold sm:text-left text-justify mb-2">Links de Interés</h1>
              
              <NavLink className="hover:text-purple-500"
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              >
                Inicio
              </NavLink >

              <NavLink to="/products" className="hover:text-purple-500">
              
              Productos</NavLink>

              <NavLink to="/categories" className="hover:text-purple-500">
              
              Categorias</NavLink>
            </div>
            
            <div className="flex flex-col py-8 px-4 gap-2 ">
              <h1 className="sm:text-xl text-xl
              font-bold sm:text-left text-justify mb-2">Sobre nosotros</h1>
              
              <NavLink className="hover:text-purple-500"
                to="/company"
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              >
                Nuestra Compañía
              </NavLink >

              <NavLink to="/culture" className="hover:text-purple-500">
              
             Nuestra Cultura</NavLink>

              <NavLink to="/contact" className="hover:text-purple-500">
              
              Contáctanos</NavLink>
            </div>

            <div className="flex flex-col py-8 px-4 gap-2 ">
              <h1 className="sm:text-xl text-xl
              font-bold sm:text-left text-justify mb-2">Información</h1>
              
              <NavLink className="hover:text-purple-500"
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
              >
               Preguntas frecuentes
              </NavLink >

              <NavLink to="/" className="hover:text-purple-500">
              
              Política de privacidad</NavLink>

              <NavLink to="/" className="hover:text-purple-500">
              
              Cambios y devoluciones</NavLink>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
