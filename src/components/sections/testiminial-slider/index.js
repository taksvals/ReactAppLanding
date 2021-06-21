import React, { useState } from "react";
import TestiminialItem from "../../reusable/testiminial-item";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <a
        className="prev"
        onClick={prevSlide}
      >&#8592;</a>
      <a
        className="next"
        onClick={nextSlide}
      >&#8594;</a>

      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <TestiminialItem name={slide.name} position={slide.position} imgLink={slide.imgLink}/>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;