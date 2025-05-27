import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import HealthStatusCards from "./HealthStatusCards";
import HumanAnatonamy from "./HumanAnatonamy";
import Activity from "./Activity";

const Header = () => {
  return (
    <header className="header">
      <div className="header-center">
        <div className="header-centering">
            <div className="search-container">
            <IoSearch className="search-icon" size={20} />
            <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="header-right">
                <button className="icon-button">
                <FaBell size={20} />
                </button>
            </div>
        </div>
        <div>
            <div className="header-row">
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div>
                    <label for="time-filter">This Week</label>
                    <select id="time-filter">
                    </select>
                </div>
            </div>
            <div className="atmony-healt-section">
                <div><HumanAnatonamy/></div>
                <div><HealthStatusCards/></div>

            </div>
            <div>
                <Activity/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header