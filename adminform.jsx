import sell3 from "../../assets/images/sell3.png";
import { FaHome, FaChartBar, FaUserAlt } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import "./adminform.css";
export default function AdminForm() {
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
    <div className="admin-form">
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
      </div>
      <div className="adminform-side">
        <div className="admin-info-img">
          <h3>Admin</h3>{" "}
          <div className="admin-info-con">
            <img src={sell3} alt="" srcset="" /> <p>Edit</p>
          </div>{" "}
        </div>{" "}
        <form className="adminFromE">
          <div className="Adminform-cards">
            <label>Username:</label>
            <input type="text" defaultValue={adminData.username} />
          </div>
          <div className="Adminform-cards">
            <label>Company Email:</label>
            <input type="email" defaultValue={adminData.companyEmail} />
          </div>
          <div className="Adminform-cards">
            <label>Password:</label>
            <input type="password" defaultValue={adminData.password} />
          </div>
          <div className="Adminform-cards">
            <label>Language:</label>
            <input type="text" defaultValue={adminData.language} />
          </div>
          <div className="Adminform-cards">
            <label>Country:</label>
            <input type="text" defaultValue={adminData.country} />
          </div>
          <div className="Adminform-cards">
            <label>State:</label>
            <input type="text" defaultValue={adminData.state} />
          </div>
          <div className="Adminform-cards">
            <label>Mobile Number:</label>
            <input type="tel" defaultValue={adminData.mobileNumber} />
          </div>
          <div className="Adminform-cards">
            <label>Admin ID:</label>

            <input type="tel" defaultValue={adminData.adminId} />
          </div>
        </form>{" "}
        <button className="admin-info-btn">Save</button>
      </div>
    </div>
  );
}
