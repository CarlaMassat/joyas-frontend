import { useEffect, useState } from "react";
import { ICategory } from "../../types/types";
import { getCategories } from "../../api/ProjectAPI";
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

  return (
    <div className="container my-12 md:my-16">
          {/* Tabs button section */}
      <div className="flex space-x-4 mb-4 p-6">
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
            className={`py-2 px-4 rounded ${
              activeTab === category.name
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* <div className="category-list">
                {filteredCategories.map((category) => (
                    <div key={category._id}>
                        <h3>{category.name}</h3> 
                    </div>
                ))}
            </div> */}
    </div>
  );
};
