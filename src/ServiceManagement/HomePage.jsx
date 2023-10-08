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

const HomePage = () => {
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
    <div className="max-w-6xl mx-auto mt-5">
      <div>
        <div className="space-y-6 mb-20">
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md"
          >
            <div className="w-40">
              <h1 className="text-blue-500 text-xl">Monday</h1>
              <p>02:30 PM</p>
            </div>
            <div>
              <a className="text-blue-600 hover:text-red-600 text-" href="#">
                Business Conference
              </a>
              <p
                className="text-lg text-blue-600 hover:text-red-600 text-"
                href="#"
              >
                World of Business Opportunities Management.
              </p>
            </div>
            <div>
              <p>Business Consultent.</p>
              <a className="text-blue-600 text-lg hover:text-red-600" href="#">
                Mildred Perkins
              </a>
            </div>
            <div>
              <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
                Details
              </button>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md"
          >
            <div className="w-40">
              <h1 className="text-blue-500 text-xl">Sunday</h1>
              <p>07:30 PM</p>
            </div>
            <div>
              <a className="text-blue-600 hover:text-red-600 text-" href="#">
                Business Conference
              </a>
              <p
                className="text-lg text-blue-600 hover:text-red-600 text-"
                href="#"
              >
                World of Business Opportunities Management.
              </p>
            </div>
            <div>
              <p>Business Consultent.</p>
              <a className="text-lg text-blue-600 hover:text-red-600" href="#">
                Mildred Perkins
              </a>
            </div>
            <div>
              <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
                Details
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md"
          >
            <div className="w-40">
              <h1 className="text-blue-500 text-xl">Monday</h1>
              <p>03:00 PM</p>
            </div>
            <div>
              <p className="text-blue-600 hover:text-red-600 text-" href="#">
                Business Conference
              </p>
              <a className="text-blue-600 text-lg hover:text-red-600" href="#">
                A Spectrum of Opportunities
              </a>
            </div>
            <div>
              <p>Product Management</p>
              <a className="text-lg text-blue-600 hover:text-red-600" href="#">
                Brandon Day
              </a>
            </div>
            <div>
              <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
                Details
              </button>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md"
          >
            <div className="w-40">
              <h1 className="text-blue-500 text-xl">Friday</h1>
              <p>10:20 PM</p>
            </div>
            <div>
              <a className="text-blue-600 hover:text-red-600 text-" href="#">
                Business Conference
              </a>
              <p className="text-blue-600 hover:text-red-600 text-lg" href="#">
                World of Business Opportunities Management.
              </p>
            </div>
            <div>
              <p>Business Consultent.</p>
              <a className="text-blue-600 text-lg hover:text-red-600" href="#">
                Mildred Perkins
              </a>
            </div>
            <div>
              <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="text-center">
        <div data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">
            How <span className="text-[#E91E63]">to be a popular</span>{" "}
            Enterpreneur!
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem
            corporis iure ad quod <br />
            laboriosam dolor blanditiis aperiam impedit! Vero maiores ratione
            accusantium <br /> quos consequuntur eos cumque facere!
          </p>
        </div>
        <div className="radial-progress mr-5" style={{ "--value": 10 }}>
          10%
        </div>
        <div className="radial-progress mr-5" style={{ "--value": 35 }}>
          35%
        </div>
        <div className="radial-progress mr-5" style={{ "--value": 60 }}>
          60%
        </div>
        <div className="radial-progress mr-5" style={{ "--value": 80 }}>
          80%
        </div>
        <div className="radial-progress mr-5" style={{ "--value": 100 }}>
          100%
        </div>
      </div>
      <div className="mt-20 mb-20">
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

export default HomePage;
