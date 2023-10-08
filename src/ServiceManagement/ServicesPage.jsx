import siteImage from "/src/images/person-site.avif";
import imags1 from "/src/images/sevices/team-service1.avif";
import imags2 from "/src/images/sevices/service2-61.avif";
import imags3 from "/src/images/sevices/young-3.avif";
import imags4 from "/src/images/sevices/team-4.avif";
import imags5 from "/src/images/sevices/people-5.avif";
import imags6 from "/src/images/sevices/clever6.avif";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";

const ServicesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div className="max-w-6xl mx-auto px-5">
      <div className=" flex flex-col md:flex-row justify-between items-center mb-20 mt-5 gap-5">
        <div data-aos="fade-right">
          <p className="text-[#E91E63]">COMPANY CEO</p>
          <h1 className="text-3xl md:text-5xl font-semibold  mt-2 mb-4">
            <span className="text-[#E91E63]">Video</span> Conference
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            similique quod ipsum accusantium <br /> ex doloribus ipsam autem.
            Reiciendis delectus sunt quod voluptas expedita <br />
            nihil maiores, voluptatibus itaque illo?
          </p>
          <button className=" mt-5 px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
            View More
          </button>
        </div>
        <div data-aos="fade-left">
          <img src={siteImage} alt="" />
        </div>
      </div>
      <div className="mb-20">
        <Slider {...settings}>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags1} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags2} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags3} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags4} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags5} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags6} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags2} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags1} alt="" />
          </div>
          <div>
            <img className="gap-5 h-[230px] ml-5 rounded" src={imags5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServicesPage;
