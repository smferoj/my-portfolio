import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonial.css";

// import Swiper core and required modules
import { Pagination,  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Voluptua dolor sed ipsum dolores dolore et, dolor kasd labore sit sit rebum, lorem voluptua dolores takimata amet, diam et.",
  },

  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Voluptua dolor sed ipsum dolores dolore et, dolor kasd labore sit sit rebum, lorem voluptua dolores takimata amet, diam et.",
  },

  {
    avatar: AVTR3,
    name: "Kawani Depite",
    review:
      "Voluptua dolor sed ipsum dolores dolore et, dolor kasd labore sit sit rebum, lorem voluptua dolores takimata amet, diam et.",
  },

  {
    avatar: AVTR4,
    name: "Aleem Dar",
    review:
      "Voluptua dolor sed ipsum dolores dolore et, dolor kasd labore sit sit rebum, lorem voluptua dolores takimata amet, diam et.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonials">
      <h5>Review from clients</h5>
      <h2>Tesitimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{
          clickable: true,
        }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review"> {review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
