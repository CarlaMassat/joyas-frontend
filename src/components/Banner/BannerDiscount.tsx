import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

export const BannerDiscount = () => {
  return (
    <div className="container my-14">
      <div
        className="bg-[#f9f9f9] py-14 md:py-24 flex 
        justify-center items-center rounded-xl"
      >
        {/* brand info*/}
        <div
          className="flex flex-col justify-center text-center
        space-y-8 lg:px-44"
        >
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold"
          >
            Obtén un 15% de descuento en tu primer pedido, ¿Estás listo para
            comprar?
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=""
          >
            Nos aseguraremos de que encuentres las joyas más finas y de la más
            alta calidad, perfectas para cada ocasión especial.
          </motion.p>

          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn">Descubre más</button>
            <button className="primary-btn">Conéctate con Nosotros</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
