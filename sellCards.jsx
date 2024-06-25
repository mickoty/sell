import React, { useState, useEffect } from "react";
import sell from "../../assets/images/sell.png";
import sell1 from "../../assets/images/sell1.png";
import sell3 from "../../assets/images/sell3.png";
import sh1 from "../../assets/images/sh1.png";
import sh2 from "../../assets/images/sh2.png";
import sh3 from "../../assets/images/sh3.png";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export default function Sellcards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [list, setList] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth <= 768 ? 1 : 3);
    };
    const getAlllisting = async () => {
      try {
        const response = await axios.get(
          `https://aftib-6o3h.onrender.com/listing/getListings/1`
        );
        console.log("Fetched default properties:", response.data.listings); // Debugging line
        setList([...response.data.listings]);
      } catch (error) {
        console.log(error);
      }
    };
    getAlllisting();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const maxSlideIndex = Math.ceil(list.length / slidesToShow) - 1;
  // console.log(list.length);
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? maxSlideIndex : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === maxSlideIndex ? 0 : prevSlide + 1
    );
  };
  const renderCards = () => {
    return list
      .slice(
        currentSlide * slidesToShow,
        currentSlide * slidesToShow + slidesToShow
      )
      .map((list) => (
        <div key={list.id} className="card m-2 view" style={{ width: "18rem" }}>
          {" "}
          <Link to={`/Sell/${list._id}`}>
            <img src={list.images[0]} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{list.title}</h5>
              <p className="card-text">{list.location}</p>
              <button className="btn">Learn More</button>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2">
                {list.size} sqt
              </small>
              <small className="flex-fill text-center border-end py-2">
                {list.bedrooms} Beds
              </small>
              <small className="flex-fill text-center py-2">
                {list.bathrooms} Baths
              </small>
            </div>
          </Link>
        </div>
      ));
  };
  return (
    <section className="p-5 third-section">
      <h2 className="text-start mb-2">View my listed properties</h2>
      <div className="carousel-wrapper">
        <button
          className="carousel-control-prev"
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          <FaArrowAltCircleLeft className="arrow" />
        </button>
        <div className="carousel">
          <div className="carousel-inner">{renderCards()}</div>{" "}
        </div>
        <button
          className="carousel-control-next"
          onClick={handleNext}
          disabled={currentSlide === maxSlideIndex}
        >
          <FaArrowAltCircleRight className="arrow" />
        </button>
      </div>
    </section>
  );
}
