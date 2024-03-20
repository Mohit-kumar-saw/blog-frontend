import React, { useEffect, useState } from "react";
import { category } from "../../data/data";
import "./category.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-scroll";

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [covers, setCovers] = useState([]);

  useEffect(() => {
    setCovers(category);
  }, []);

  return (
    <div className="category">
      <div className="content">
        <Slider {...settings}>
          {covers.map((item, index) => (
            <div className="boxs" key={item.id}>
              <Link
                to={`category-${index}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className="box">
                  <img className="category-img" src={item.cover} alt="" />
                  <div className="overlay">
                    <p className="title">{item.category}</p>
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
