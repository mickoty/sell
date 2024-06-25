import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import sell from "../../assets/images/sell.png";
import sell1 from "../../assets/images/sell1.png";
import sell3 from "../../assets/images/sell3.png";
import sh1 from "../../assets/images/sh1.png";
import sh2 from "../../assets/images/sh2.png";
import sh3 from "../../assets/images/sh3.png";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Selldetails() {
  const params = useParams().id;
  console.log(params);
  const [allList, setallList] = useState([]);
  const [houseDetails, sethouseDetails] = useState(null);
  const convertDate = function convertEpochToDate(timeEpoch) {
    const date = new Date(timeEpoch);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const getAlllisting = async () => {
    try {
      const response = await axios.get(
        `https://aftib-6o3h.onrender.com/listing/getListings/1`
      );
      console.log("Fetched default properties:", response.data.listings); // Debugging line
      setallList([...response.data.listings]);
      const sellDetails = response.data.listings.filter(
        (list) => list._id === params
      );
      sethouseDetails(sellDetails[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAlllisting();
  }, []);
  console.log(houseDetails);
  console.log(allList);
  return (
    <div>
      {houseDetails ? (
        // Render the component with the housedeatails data
        <div>
       
          <div className="container">
            <section className="text-center p-5 second-section">
         
            
              <div>
                <h2 className="text-start mb-2"> listed properties</h2>{" "}
                <section className="d-flex flex-column flex-md-row p-5 align-items-center fourth">
                  <div className="col-md-6">
                    <img
                      src={houseDetails.images[0]}
                      alt="Description"
                      className="img-fluid"
                      width={500}
                    />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <h2> {houseDetails.title} </h2>{" "}
                    <p className="mt-3">{houseDetails.location}</p>
                    <span className="mt-3">
                      {houseDetails.furnished ? "Furnished" : "Not Furnished"}
                    </span>
                    <p className="mt-3">
                      {convertDate(houseDetails.listingDate)}
                    </p>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        {houseDetails.size} sqt
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        {houseDetails.bedrooms} Beds
                      </small>
                      <small className="flex-fill text-center py-2">
                        {houseDetails.bathrooms} Baths
                      </small>{" "}
                    </div>{" "}
                    <p className="mt-3">{houseDetails.ownersContact.phone}</p>{" "}
                    <p className="mt-3">{houseDetails.price}</p>
                    <Link to="/sell">
                      <button className="btn mt-3" style={{ width: "200px" }}>
                        back
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
              <div class="container my-5 border border-1 border-dark">
                <div class="">
                  <p class="text-justify">{houseDetails.description}</p>
                </div>

                <div class="house-d">
                  {houseDetails.balcony ? (
                    <p>
                      <FaCheck /> balcony
                    </p>
                  ) : (
                    <p>
                      <FaTimes /> balcony
                    </p>
                  )}{" "}
                  {houseDetails.garage ? (
                    <p>
                      <FaCheck />
                      garage
                    </p>
                  ) : (
                    <p>
                      <FaTimes />
                      garage
                    </p>
                  )}{" "}
                  {houseDetails.Security ? (
                    <p>
                      <FaCheck /> Security
                    </p>
                  ) : (
                    <p>
                      <FaTimes /> Security
                    </p>
                  )}{" "}
                  {houseDetails.Internet ? (
                    <p>
                      <FaCheck /> Internet
                    </p>
                  ) : (
                    <p>
                      <FaTimes /> internet
                    </p>
                  )}{" "}
                  {houseDetails.lift ? (
                    <p>
                      <FaCheck /> Lift
                    </p>
                  ) : (
                    <p>
                      <FaTimes />
                      Lift
                    </p>
                  )}{" "}
                  {houseDetails.Cabletv ? (
                    <p>
                      <FaCheck /> Cable TV
                    </p>
                  ) : (
                    <p>
                      <FaTimes /> Cable TV
                    </p>
                  )}{" "}
                  {houseDetails.AC ? (
                    <p>
                      <FaCheck /> Air conditioning
                    </p>
                  ) : (
                    <p>
                      <FaTimes />
                      Air conditioning
                    </p>
                  )}{" "}
                  {houseDetails.RoofTerrace ? (
                    <p>
                      <FaCheck />
                      Roof Terrace
                    </p>
                  ) : (
                    <p>
                      <FaTimes /> Roof Terrace
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
