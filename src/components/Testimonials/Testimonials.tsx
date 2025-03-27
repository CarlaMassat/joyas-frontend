import { getReviews } from "../../api/ProjectAPI";
import { IReview } from "../../types/types";
import { useEffect, useState } from "react";
import Slider from "react-slick";
export const Testimonials = () => {
  const setting = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [review, setReview] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getReviews();
       
        let uniqueId: string[] = [];
        const uniqueReviews = fetchedReviews.filter((review) =>{
          if (!uniqueId.includes(review._id)) {
            uniqueId = [...uniqueId, review._id]
            return true;
          }
            return false;
        })

        setReview(uniqueReviews);
      } catch (error) {
        console.error("Error al obtener las reseñas:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div
          className="text-left mb-10 max-w-[500px] space-y-2
       mr-auto"
        >
          <h1 className="text-4xl font-bold">
            Lo que nuestros clientes dicen sobre su experiencia
          </h1>
        </div>
        <div>

            <Slider {...setting}>
              {review.map((data) => (
                <div key={data._id} className="my-6">
                  <div
                    className="flex flex-col gap-4 p-8
                shadow-lg mx-4 rounded-xl  bg-stone-100 min-h-[350px] justify-between"
                  >
                    <div
                      className="flex justify-start
                items-center gap-5"
                    >
                      <div>
                        <p className="text-xl font-bold text-black 80">
                          {data.title}
                        </p>
                      </div>
                    </div>
                    <div className="py-6 space-y-4 flex flex-col justify-end ">
                      <p className="text-sm text-gray-500 flex-grow">
                        {data.description}
                      </p>
                      <p className="pt-4 ">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
         
        </div>
      </div>
    </div>
  );
};
