import { Hero } from "../components/Hero/Hero";
import BgImage from "../assets/background.jpg";
import { Jewelery } from "../components/Jewelery/Jewelery";
import { Banner } from "../components/Banner/Banner";
import Img1 from "../assets/2.jpg";
import Img2 from "../assets/3.jpeg";
import { IBanner } from "../types/types";
import { useEffect, useState } from "react";
import { getBanners } from "../api/ProjectAPI";
import { TabComp } from "../components/Tab/TabComp";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { BannerDiscount } from "../components/Banner/BannerDiscount";


export const HomePage = () => {
  const [banner, setBanner] = useState<IBanner[]>([]);
  const images = [Img1, Img2];

  useEffect(() => {
    const bannersData = async () => {
      const fetchedBanners = await getBanners();

      setBanner(fetchedBanners);
    };

    bannersData();
  }, []);

  const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    borderRadius: "20px",
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <Hero />
        </div>
        <Jewelery />
        {banner.map((banner, index) => (
          <Banner
            key={banner._id}
            _id={banner._id}
            image={images[index]}
            title={banner.title}
            subtitle={banner.subtitle}
            link={banner.link}
          />
        ))}

        <TabComp/>
        <Testimonials/>
        <BannerDiscount/>
      </div>
    </>
  );
};
