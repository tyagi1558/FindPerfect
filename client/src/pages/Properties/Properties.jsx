import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  // Filter data based on type, city, or address
  const filteredProperties = data.filter(property =>
    property.type.toLowerCase().includes(filter.toLowerCase()) ||
    property.city.toLowerCase().includes(filter.toLowerCase()) ||
    property.address.toLowerCase().includes(filter.toLowerCase())
  );

  // Slider settings
  const sliderSettings = {
    navigation: true,
  };

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        {/* Display searched properties */}
        {filter && filteredProperties.length > 0 && (
  <div className="paddings innerWidth r-container">
    <div className="flexColStart r-head">
      <span className="primaryText">Your Searched Properties</span>
    </div>
    <div className="property-container">
  {filteredProperties.slice(0, 8).map((card, i) => (
    <div className="property-card" key={i}>
      <PropertyCard card={card} />
    </div>
  ))}
</div>

  </div>
)}


       {/* Display other sections only if no search filter is applied */}
{!filter && (
  <div className="grid-container">
    {/* Future Projects Section */}
    <div className="grid-item">
      <div className="flexColStart r-head">
        <span className="primaryText">Future Projects</span>
      </div>
      <div className="properties-container">
        {data
          .filter(property => property.type.toLowerCase() === "feature project")
          .slice(0, 4)
          .map((card, i) => (
            <PropertyCard key={i} card={card} />
          ))}
      </div>
    </div>

    {/* Sale Properties Section */}
    <div className="grid-item">
      <div className="flexColStart r-head">
        <span className="primaryText">Popular Residencies for Sale</span>
      </div>
      <div className="properties-container">
        {data
          .filter(property => property.type.toLowerCase() === "sale")
          .slice(0, 4)
          .map((card, i) => (
            <PropertyCard key={i} card={card} />
          ))}
      </div>
    </div>

    {/* Rent Properties Section */}
    <div className="grid-item">
      <div className="flexColStart r-head">
        <span className="primaryText">Popular Residencies for Rent</span>
      </div>
      <div className="properties-container">
        {data
          .filter(property => property.type.toLowerCase() === "rent")
          .slice(0, 4)
          .map((card, i) => (
            <PropertyCard key={i} card={card} />
          ))}
      </div>
    </div>

    {/* Ploat Properties Section */}
    <div className="grid-item">
      <div className="flexColStart r-head">
        <span className="primaryText">Popular Residencies for Ploat</span>
      </div>
      <div className="properties-container">
        {data
          .filter(property => property.type.toLowerCase() === "ploat")
          .slice(0, 4)
          .map((card, i) => (
            <PropertyCard key={i} card={card} />
          ))}
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Properties;
