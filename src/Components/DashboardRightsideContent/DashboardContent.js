// import React from 'react'
// import { FaUserCircle, FaPlus } from "react-icons/fa";
// import CalenderView from './CalenderView';
// import './App.css'
// const DashboardContent = () => {
//   return (
//     <div>
//         <div className='dashboard-container'>
//             <div className="header-right">
//                 <div className="user-profile">
//                     <div className="user-avatar">
//                         <FaUserCircle />
//                     </div>
//                 {/* <span className="user-name">Name</span> */}
//                 </div>
//                 <div className="user-profile">
//                     <div className="user-avatar">
//                         <button className="add-button">
//                         <FaPlus />
//                     </div>
//                 {/* <span className="user-name">Name</span> */}
//                 </div>

//                 </button>
//             </div>
//             <CalenderView/>
//         </div>
//     </div>
//   )
// }

// export default DashboardContent

import React from 'react';
import { FaUserCircle, FaPlus } from "react-icons/fa";
import CalenderView from './CalenderView';
import './App.css';
import Appointment from './Appointment';
import UpcomingSchedule from './UpComingSchedule';

const DashboardContent = () => {
  return (
    <div>
      <div className='dashboard-container'>
        <div className="header-right">
          {/* User Icon */}
          <div className="user-profile">
            <div className="user-avatar">
              <FaUserCircle />
            </div>
          </div>

          {/* Plus Button */}
          <button className="add-button">
            <FaPlus />
          </button>
        </div>

        <CalenderView />
        <Appointment/>
        <UpcomingSchedule/>
      </div>
    </div>
  );
};

export default DashboardContent;
