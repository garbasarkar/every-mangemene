import ProducService from "./ProducService";
import sliIm1 from "/src/images/sevices/person-site.avif";
import sliIm2 from "/src/images/sevices/clever6.avif";
import sliIm3 from "/src/images/sevices/young-3.avif";
import sliIm4 from "/src/images/sevices/people-5.avif";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-5">
        <div className="carousel w-full h-[70vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sliIm2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={sliIm1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={sliIm3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={sliIm4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <ProducService></ProducService>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
