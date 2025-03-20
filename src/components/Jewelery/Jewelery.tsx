import { useEffect, useState } from "react";
import { getServices } from "../../api/ProjectAPI"; 
import { IService } from "../../types/types";
import { CiCreditCard2 } from "react-icons/ci"; 
import { BiStore } from "react-icons/bi"; 
import { FaWhatsapp } from "react-icons/fa"; 
import {motion} from 'framer-motion';
import { SlideLeft } from '../../utility/animation';


export const Jewelery = () => {
  const [service, setService] = useState<IService[]>([]);

  useEffect(() => {
    const getServicesData = async () => {
      const fetchedServices = await getServices();
      setService(fetchedServices);
    };

    getServicesData();
  }, []);

  return (
    <div>
      <div className="container py-24">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 gap-6 font-playfair"
        >
          <div className="space-y-4 p-6">
            <h1
              className="text-3xl md:text-4xl
            font-bold"
            >
              Nuestra colección exclusiva
            </h1>
            <p className="text-gray-600">
              Descubre piezas únicas, elaboradas con materiales de la más alta
              calidad
            </p>
          </div>

          {
      service.map((service) =>(
        <motion.div
      
         variants={SlideLeft(service.delay)} 
        initial='hidden'
        whileInView='visible'
        key={service._id} className="space-y-4 p-6 bg-[#fbfbfb]
        hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]">
          
          <div>
          {service.title.includes("Atencion personalizada") && <BiStore size={50} />}
          {service.title.includes('Pagos') && <CiCreditCard2 size={50}/>}
          {service.title.includes("Whatsapp") && <FaWhatsapp size={50} />}
          </div>
          
          <h2 className="text-xl font-semibold">{service.title}</h2>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
        </div>
      </div>
    </div>
  );
};
