import React, { useState, useEffect } from "react";
import sell from "../../assets/images/sell.png";
import sell1 from "../../assets/images/sell1.png";
import sell3 from "../../assets/images/sell3.png";
import sh1 from "../../assets/images/sh1.png";
import sh2 from "../../assets/images/sh2.png";
import sh3 from "../../assets/images/sh3.png";
import axios from "axios";
// import { Outlet } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Sell.css";

const Sell = () => {
  // const cards = [
  //   {
  //     title: "Slider Card 1",
  //     text: "This is a description for slider card 1.",
  //     image: sh1,
  //   },
  //   {
  //     title: "Slider Card 2",
  //     text: "This is a description for slider card 2.",
  //     image: sh2,
  //   },
  //   {
  //     title: "Slider Card 3",
  //     text: "This is a description for slider card 3.",
  //     image: sh3,
  //   },
  //   {
  //     title: "Slider Card 4",
  //     text: "This is a description for slider card 4.",
  //     image: sh3,
  //   },
  //   {
  //     title: "Slider Card 5",
  //     text: "This is a description for slider card 5.",
  //     image: sh1,
  //   },
  //   {
  //     title: "Slider Card 6",
  //     text: "This is a description for slider card 6.",
  //     image: sh2,
  //   },
  // ];

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
  console.log(list);

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
    <>
      <section className="text-white d-flex flex-column flex-md-row first-section p-5">
        <div className="col-md-6">
          <h1>Selling homes creating comfort for families</h1>
          <p>
            Our agents have the experience to price, market, and sell your home
            for the best price possible, all for half the fee other brokerages
            often charge.
          </p>
        </div>
        <div className="col-md-6">
          <img src={sell1} alt="Description" className="img-fluid" />
        </div>
      </section>

      <div className="container">
        <section className="text-center p-5 second-section">
          <h2 className="mb-4">Why sell with Aftib</h2>
          <div className="row justify-content-between">
            <div className="col-md-3 secondcard">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Expertise and
                    <br /> Experience
                  </h5>
                  <p className="card-text">
                    Our seasoned agents know the market inside out, ensuring you
                    get the best deal swiftly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 secondcard">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Personalized
                    <br /> Service
                  </h5>
                  <p className="card-text">
                    We offer tailored support throughout the selling process,
                    making it seamless and stress-free for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 secondcard">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Comprehensive Marketing</h5>
                  <p className="card-text">
                    We use cutting-edge marketing strategies to maximize your
                    property's visibility and attract serious buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="p-5 third-section">
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
        </section> */}{" "}
        <Outlet />
        <section className="d-flex flex-column flex-md-row p-5 align-items-center fourth">
          <div className="col-md-6 mb-3 mb-md-0">
            <h2>Ready to get started?</h2>
            <p className="mt-3">
              We can connect you with an agent today who will help you
              understand your options for selling and answer all your questions.
            </p>
            <button className="btn mt-3" style={{ width: "200px" }}>
              Next
            </button>
          </div>
          <div className="col-md-6">
            <img
              src={sell3}
              alt="Description"
              className="img-fluid"
              width={400}
            />
          </div>
        </section>
        <section className="d-flex flex-column flex-md-row p-5 align-items-center fourth">
          <div className="col-md-6">
            <img
              src={sell1}
              alt="Description"
              className="img-fluid"
              width={400}
            />
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <h2>Sell a high-end home?</h2>
            <p className="mt-3">
              you may be eligible for Afitb Premier our highest level of sevice
              from our best agents.You'll be paired with a local expaert who has
              years of experience selling luxury homes.
            </p>
            <button className="btn mt-3" style={{ width: "200px" }}>
              Next
            </button>
          </div>
        </section>{" "}
      </div>
    </>
  );
};

export default Sell;
