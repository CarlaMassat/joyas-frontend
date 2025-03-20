import { FaPlay } from "react-icons/fa";
import HeroImg from '../../assets/hero.jpeg'


export const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1
      md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}

        <div className="flex flex-col justify-center
        p-14 md:py-0 font-playfair">

          <div className="text-center md:text-left
          space-y-6">

          <h1 className="text-4xl lg:text-5xl font-bold
          leading-relaxed xl:leading-normal">
            Regalate amor a ti misma, una joya que {" "}
            <span className="text-indigo-600 font-semibold">siempre brillará</span>
            {" "}
          </h1>

          <p className="text-gray-600 xl:max-w-[500px]">
          Cada joya es un reflejo de la confianza y el estilo de quien la luce.
          </p>

          {/* button section */}

          <div className="flex justify-center 
          items-center gap-8 md:justify-start !mt-4">
            <button className="primary-btn flex
            items-center gap-2">
              {" "}
              Ordena Ahora
            </button>

            <button className="flex justify-center
            items-center gap-2">
            
            <FaPlay/> Ver Ahora
            </button>
          </div>

          </div>
          
        </div>

        {/* Hero Image */}

        <div className="flex justify-center
        items-center">
        <img src={HeroImg} alt="Logo" 
        className="w-[350px] md:w-[550px] xl:w-
        [700px] drop-shadow" />
        </div>
      </div>
    </section>
  );
};
