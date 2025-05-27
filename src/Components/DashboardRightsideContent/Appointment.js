import React from 'react'
import { todayAppointments } from '../../Data/Appointements';
import './App.css'

const Appointment = () => {
  return (
    <div>
        <div className="today-appointments">
        {todayAppointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-info">
              <h5 className="appointment-title">{appointment.title}</h5>
              <p className="appointment-time-badge">{appointment.time}</p>
              <p className="appointment-doctor">{appointment.doctor}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appointment