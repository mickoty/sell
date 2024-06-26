import sell3 from "../../assets/images/sell3.png";
import { FaHome, FaChartBar, FaUserAlt } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import "./admin-info.css";
export default function AdminIn() {
  const adminData = {
    username: "JohnDoe123",
    companyEmail: "john.doe@example.com",
    password: "mySecurePassword123!",
    language: "English",
    country: "United States",
    state: "California",
    mobileNumber: "+1 (555) 1234567",
    adminId: "A001",
  };
  return (
    <div className="admin-info">
      {" "}
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
      <div className="admin-info-side">
        <div className="admin-info-img">
          <h3>Admin</h3>{" "}
          <div className="admin-info-con">
            <img src={sell3} alt="" srcset="" />
          </div>
        </div>
        <div className="admin-info-card">
          <div className="admin-cards">
            {" "}
            <p>Username</p> <p>{adminData.username}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>companyEmail</p> <p>{adminData.companyEmail}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>Password</p> <p>{adminData.password}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>language</p> <p>{adminData.language}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>countary</p> <p>{adminData.country}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>State</p> <p>{adminData.state}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>mobile number</p> <p>{adminData.mobileNumber}</p>
          </div>{" "}
          <div className="admin-cards">
            {" "}
            <p>Admin ID</p> <p>{adminData.adminId}</p>
          </div>{" "}
        </div>{" "}
        <button className="admin-info-btn">Edit</button>
      </div>
    </div>
  );
}
