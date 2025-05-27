import React from 'react'
import {healthIndicators } from '../../Data/HealthData'
import humanAnatonamy from '../assests/humananatomy.png'
const HumanAnatonamy = () => {
  return (
    <div>
     <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="human-body">
          <img src={humanAnatonamy} className="anatomy-image" />
          {healthIndicators.map((indicator) => (
            <div
              key={indicator.id}
              className="health-indicator"
              style={{
                top: indicator.position.top,
                left: indicator.position.left,
                backgroundColor: indicator.color,
              }}
            >
              <div className="indicator-dot"></div>
              <div className="indicator-label">{indicator.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default HumanAnatonamy