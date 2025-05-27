const Activity = () => {
  const weeklyData = [
    { day: "Mon", appointments: 2 },
    { day: "Tue", appointments: 1 },
    { day: "Wed", appointments: 3 },
    { day: "Thu", appointments: 2 },
    { day: "Fri", appointments: 1 },
    { day: "Sat", appointments: 0 },
    { day: "Sun", appointments: 1 },
  ]

  const maxAppointments = Math.max(...weeklyData.map((d) => d.appointments))

  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>

      <div className="activity-chart">
        {weeklyData.map((data, index) => (
          <div key={index} className="chart-bar-container">
            <div
              className="chart-bar"
              style={{
                height: `${(data.appointments / maxAppointments) * 100}%`,
              }}
            ></div>
            <span className="chart-label">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activity
