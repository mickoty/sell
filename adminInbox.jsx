import "./Box.css";
import sell1 from "../../assets/images/sell1.png";
import sell3 from "../../assets/images/sell3.png";
import { FaHome, FaChartBar, FaUserAlt } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
export default function box() {
  const dummyObject = {
    username: "johnsmith",
    companyEmail: "john.smith@example.com",
    role: "Marketing Manager",
    agencyLicense: "ABC123",
    expiringDate: "2025-12-31",
  };
  const RenderEle = () => {
    return (
      <section className="ag-list">
        <div className="listed-img">
          <img src={sell3} className="listed-photo" alt="" srcset="" />
        </div>
        {/* the dummy data was plenty you can map and render it once */}
        <div className="listedInfo">
          <h3>semi-detached duplex</h3>
          <p>victoria island lagos </p>{" "}
          <div className="list-info">
            {" "}
            <small className="house-card house-card1">bedroom</small>
            <small className="house-card house-card1 ">bathrooms</small>
            <small className="house-card"> sqt</small>
          </div>{" "}
        </div>
        <button className="list-btn">view Property </button>
      </section>
    );
  };
  return (
    <div className="whole-page">
      <div className="nav-header">
        <nav className="nav-center">
          <div className="admin-header">
            <div className="admin-img">
              <img src={sell3} alt="" srcset="" />
            </div>
            <h3>price Range </h3>
            <p>admin</p>
          </div>
          <ul>
            <li className="nav-links">
              <div className="link">
                <div className="nav-icons">
                  <FaUserAlt />
                </div>
                <a href="#">Admin </a>
              </div>
            </li>
            <li className="nav-links">
              <div className="link">
                <div className="nav-icons">
                  <FaHome />
                </div>
                <a href="#">Manage User </a>
              </div>
            </li>{" "}
            <li className="nav-links">
              <div className="link">
                <div className="nav-icons">
                  <FaChartBar />
                </div>
                <a href="#">Dashboard </a>
              </div>
            </li>
            <li className="nav-links">
              <div className="link">
                <div className="nav-icons">
                  <TiSpanner />
                </div>
                <a href="#">setting </a>
              </div>
            </li>
          </ul>
          <div className="nav-btn">
            <button className="">logout</button>
          </div>
        </nav>
      </div>{" "}
      <div className="agent">
        <div className="contact">
          {" "}
          <div className="Agent-img">
            <img src={sell1} alt="" srcset="" />
          </div>
          <div className="Agent-info">
            <div className="agent-cards">
              {" "}
              <p>Username</p> <p>{dummyObject.username}</p>
            </div>
            <div className="agent-cards">
              {" "}
              <p>Company email</p> <p>{dummyObject.companyEmail}</p>
            </div>{" "}
            <div className="agent-cards">
              {" "}
              <p>Role</p>
              <p>{dummyObject.role}</p>
            </div>{" "}
            <div className="agent-cards">
              {" "}
              <p>Agent License</p> <p>{dummyObject.agencyLicense}</p>
            </div>{" "}
            <div className="agent-cards">
              {" "}
              <p>expepirting Date</p>
              <p>{dummyObject.expiringDate}</p>
            </div>
          </div>
        </div>
        <div className="agent-view">
          <h3>view agent listed properties </h3>
          <div className="agent-v">
            <div className="agent-listing">
              {RenderEle()}
              {RenderEle()}
              {RenderEle()} {RenderEle()}
              {RenderEle()}
              {RenderEle()}
            </div>
            <div className="agent-filter">
              <div className="center-agent">
                <div class="first-div">
                  <select>
                    <option value="">Location</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                  <select>
                    <option value="">Property</option>
                    <option value="property1">Property 1</option>
                    <option value="property2">Property 2</option>
                    <option value="property3">Property 3</option>
                  </select>
                  <select>
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                  <select>
                    <option value="">Bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div className="price">
                  <p>price range </p>{" "}
                  <div class="second-div">
                    <select>
                      <option value="">Min</option>
                      <option value="min1">Min 1</option>
                      <option value="min2">Min 2</option>
                      <option value="min3">Min 3</option>
                    </select>
                    <select>
                      <option value="">Max</option>
                      <option value="max1">Max 1</option>
                      <option value="max2">Max 2</option>
                      <option value="max3">Max 3</option>
                    </select>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
