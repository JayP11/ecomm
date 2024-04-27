import React from "react";
import "./Homepage.css";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import CategoryHome from "../../components/categoryHome/CategoryHome";
import TrendingProducts from "../../components/trendingProducts/TrendingProducts";

const Homepage = () => {
  return (
    <div className="Homepage_main">
      <HomeBanner />
      <CategoryHome />
      <TrendingProducts />
    </div>
  );
};

export default Homepage;
