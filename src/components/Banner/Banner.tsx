import { IBanner } from "../../types/types";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

export const Banner = ({ image, title, subtitle }: IBanner) => {
  return (
    <div className="container">
      <div
        className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14 rounded-lg"
      >
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={image}
            alt=""
            className="w-[300px] md:max-w-[400px]
                xl:min-w-[450px] h-full object-cover
                rounded-lg"
          />
        </div>

        <div
          className="flex flex-col justify-center
               text-center md:text-left space-y-4 lg:max-w-[500px]"
        >
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold
                font-playfair"
          >
            {title}
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center
                md:justify-start"
          >
            <button className="primary-btn">Conoce más</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
