import { upcomingAppointments } from '../../Data/Appointements';
import './App.css'
const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-details">
        <h5 className="appointment-name">{appointment.title}</h5>
        <div className="icon-appointment">{appointment.icon}</div>
      </div>
      <p className="appointment-schedule">{appointment.time}</p>
    </div>

  )
}

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>

      {upcomingAppointments.map((dayGroup) => (
        <div key={dayGroup.id} className="schedule-day-group">
          <h4 className="schedule-day">{dayGroup.day}</h4>
          <div className="day-appointments">
            {dayGroup.appointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
