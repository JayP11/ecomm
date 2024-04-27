import React from "react";
import "./TrendingProducts.css";
import { useProductsContext } from "../../context/product_context";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const TrendingProducts = () => {
  const { trending_products: trending } = useProductsContext();
  console.log("trending_products", trending);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="TrendingProducts_main">
        <div>
          <h1>Trending Products</h1>
        </div>
        <div className="underline"></div>
      </div>
    </>
  );
};

export default TrendingProducts;
