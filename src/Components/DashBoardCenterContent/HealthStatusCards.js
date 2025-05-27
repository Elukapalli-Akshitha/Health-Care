// import { healthStatusCards } from "../../Data/HealthData";


// const HealthStatusCards = () => {
//   return (
//     <div className="health-status-cards">
//       {healthStatusCards.map((card) => {
//         return (
//           <div key={card.id} className="health-card">
//             <div className="health-card-icon">
//               { <IconComponent size={24} />}
//             </div>
//             <div className="health-card-content">
//               <h4 className="health-card-title">{card.title}</h4>
//               <p className="health-card-date">{card.date}</p>
//             </div>
//             <div className={`health-card-status ${card.status}`}></div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HealthStatusCards;


import { GiLungs } from "react-icons/gi";
import { FaTooth, FaBone } from "react-icons/fa6";
import { healthStatusCards } from "../../Data/HealthData";
import './App.css'

// Map icon string names to actual components
const iconMap = {
  GiLungs,
  FaTooth,
  FaBone,
};

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map((card) => {
        const IconComponent = iconMap[card.icon];
        return (
          <div key={card.id} className="health-card">
            <div className="card-header">
              <IconComponent size={24} />
              <h4 className="health-card-title">{card.title}</h4>
            </div>
            <p className="health-card-date">{card.date}</p>
            <div className={`health-card-status ${card.status}`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
