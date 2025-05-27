import { GiLoveInjection } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

export const calendarAppointments = {
  "2021-10-15": ["09:00", "11:00"],
  "2021-10-18": ["13:00"],
  "2021-10-22": ["15:00"],
  "2021-10-25": ["09:00", "14:00","20:00"],
}

export const upcomingAppointments = [
  {
    id: 1,
    day: "On Thursday",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "09:00 AM",
        type: "checkup",
        icon:<GiLoveInjection />,
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "11:00 AM",
        type: "specialist",
        icon: <FaEye />,
      },
    ],
  },
  {
    id: 2,
    day: "On Saturday",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "10:00 AM",
        type: "specialist",
        icon: <FaHeart />,
      },
      {
        id: 4,
        title: "Neurologist",
        time: "02:00 PM",
        type: "specialist",
        icon: <FaUserDoctor />,
      },
    ],
  },
]

export const todayAppointments = [
  {
    id: 1,
    title: "Dentist",
    doctor: "Dr. Smith",
    time: "10:00 - 11:00",
    type: "dental",
  },
  {
    id: 2,
    title: "Physiotherapy Appointment",
    doctor: "Dr. Johnson",
    time: "02:00 - 3:00",
    type: "therapy",
  },
]
