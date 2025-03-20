import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";

export const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold bg-violet-300 text-white py-10 m-6 rounded-3xl flex flex-col justify-center items-center gap-10 relative">
            {/* Botón para cerrar el menú */}
            <button
              className="absolute top-4 right-6 text-4xl"
              onClick={() => setOpen(false)}
            >
              <FaWindowClose />
            </button>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-xl py-2 ${
                  isActive ? "text-gray-100" : "text-gray-600"
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block text-xl py-2 ${
                  isActive ? "text-gray-100" : "text-gray-600"
                }`
              }
            >
              Productos
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `block text-xl py-2 ${
                  isActive ? "text-gray-100" : "text-gray-600"
                }`
              }
            >
              Categorías
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
