import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { home_url } from "../../utils/constants";

const HomeBanner = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(home_url, {
        headers: {
          Accept: "application/x.mm.v1+json",
        },
      });
      setData(response.data.records.slider);
      // console.log("hom", response.data.records.slider);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Slider {...settings}>
        {data.map((image) => {
          const { image_full_path } = image;
          return (
            <div className="home_hero_img_main" key="">
              <img
                src={image_full_path}
                alt="images"
                // className="personn-img"
                className="home_hero_img_inner"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeBanner;
