
import { useEffect, useState } from "react";
import { ICategory } from "../../types/types";
import { getCategories } from "../../api/ProjectAPI";
import AceroBlanco from "../../assets/Acero blanco/acero blanco-1.jpeg";
import AceroDorado1 from "../../assets/Acero dorado/Acero dorado-1.jpeg";
import EnchapadoOro1 from "../../assets/Enchapado oro/enchapado oro-1.jpeg";
import Plata1 from "../../assets/Plata/plata-1.jpeg";
import PlataDorada1 from "../../assets/Plata dorada/plata dorada-1.jpeg";
import { motion } from "framer-motion";

export const TabComp = () => {
  const [tab, setTab] = useState<ICategory[]>([]);
  const [activeTab, setActiveTab] = useState("Todos");

  const filteredCategories =
    activeTab === "Todos"
      ? tab
      : tab.filter((category) => category.name === activeTab);

  useEffect(() => {
    const getCategoryData = async () => {
      const fetchedCategories = await getCategories();
      setTab(fetchedCategories);
    };

    getCategoryData();
  }, []);


  const imageMap: Record<string, string[]> = {
    "Acero blanco": [AceroBlanco,],
    "Acero dorado": [AceroDorado1],
    "Enchapado oro": [EnchapadoOro1],
    Plata: [Plata1,],
    "Plata dorada": [PlataDorada1],
  };

  return (
    <div className="container my-12 md:my-16">
      {/* Tabs button section */}
      <div className="flex flex-wrap space-x-2 mb-4 p-6">
        <button
          onClick={() => setActiveTab("Todos")}
          className={`py-2 px-4 rounded ${
            activeTab === "Todos"
              ? "bg-violet-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Todos
        </button>

        {tab.map((category) => (
          <button
            key={category._id}
            onClick={() => setActiveTab(category.name)}
            className={`py-2 px-3 mx-1 my-1 rounded text-sm ${
              activeTab === category.name
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tabs Card section */}

      <div className="grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-6" >
        {filteredCategories.map((category) => (
          <motion.div 
          id= {category._id}
          key={category._id}
          initial={{opacity: 0, x: 10}}
          whileInView={{opacity: 1, x: 0}}
          className="p-4 border rounded shadow-sm
          space-y-2" >
            {(imageMap[category.name] || []).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${category.name} - ${index + 1}`}
                className="h-[240px] w-full object-cover"
              />
            ))}
            <p className="text-xl font-semibold text-slate-900">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
