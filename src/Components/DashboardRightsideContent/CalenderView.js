// import React from 'react'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { calendarAppointments } from '../../Data/Appointements';
// import './App.css'

// const CalenderView = () => {
//   const daysInMonth = Array.from({ length: 7 }, (_, i) => i +20)
//   const currentMonth = "October 2021"

//   const getAppointmentsForDay = (day) => {
//     const dateKey = `2021-10-${day.toString().padStart(2, "0")}`
//     return calendarAppointments[dateKey] || []
//   }
//   return (
//     <div className="calendar-section-wrapper">
//         <div className="calendar-header">
//           <h3 className="calendar-title">{currentMonth}</h3>
//         <div className="calendar-nav">
//           <button className="calendar-nav-btn">
//             <FaChevronLeft size={16} />
//           </button>
//           <button className="calendar-nav-btn">
//             <FaChevronRight size={16} />
//           </button>
//         </div>
//         <div className="calendar-grid">
//           <div className="calendar-weekdays">
//           {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//             <div key={day} className="weekday">
//               {day}
//             </div>
//           ))}
//           </div>

//         <div className="calendar-days">
//           {daysInMonth.map((day) => {
//             const appointments = getAppointmentsForDay(day)
//             return (
//               <div key={day} className="calendar-day">
//                 <span className="day-number">{day}</span>
//                 {appointments.map((time, index) => (
//                   <div key={index} className="appointment-time">
//                     {time}
//                   </div>
//                 ))}
//               </div>
//             )
//           })}
//         </div>
//       </div>

  
//       </div>
//     </div>
//   )
// }

// export default CalenderView

import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { calendarAppointments } from '../../Data/Appointements';
import './App.css'

const CalenderView = () => {
  const daysInMonth = Array.from({ length: 7 }, (_, i) => i + 20);
  const currentMonth = "October 2021";

  const getAppointmentsForDay = (day) => {
    const dateKey = `2021-10-${day.toString().padStart(2, "0")}`;
    return calendarAppointments[dateKey] || [];
  };

  return (
    <div className="calendar-section-wrapper">
      {/* Left Side: Header + Calendar Grid */}
      <div className="calendar-content">
        <div className="calendar-header">
          <h3 className="calendar-title">{currentMonth}</h3>
          <div className="calendar-nav">
            <button className="calendar-nav-btn">
              <FaChevronLeft size={10} />
            </button>
            <button className="calendar-nav-btn">
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>

        {/* ✅ Move calendar-grid outside header but inside content */}
        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-days">
            {daysInMonth.map((day) => {
              const appointments = getAppointmentsForDay(day);
              return (
                <div key={day} className="calendar-day">
                  <span className="day-number">{day}</span>
                  {appointments.map((time, index) => (
                    <div key={index} className="appointment-time">
                      {time}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderView;
