import { Hero } from "../components/Hero/Hero";
import BgImage from '../assets/background.jpg'
import { Jewelery } from "../components/Jewelery/Jewelery";


export const HomePage = () => {

  const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment:'fixed',
    borderRadius: '20px',
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <Hero />
        </div>
        <Jewelery/>
      </div>
    </>
  );
};
