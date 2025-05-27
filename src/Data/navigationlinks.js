import {
  MdDashboardCustomize,
  MdHistory,
  MdCalendarToday,
  MdAccessTime,
  MdBarChart,
  MdMessage,
  MdHelp,
  MdSettings
} from "react-icons/md";

export const generalItems = [
  { id: 1, name: "Dashboard", icon: <MdDashboardCustomize />, active: false },
  { id: 2, name: "History", icon: <MdHistory />, active: false },
  { id: 3, name: "Calendar", icon: <MdCalendarToday />, active: false },
  { id: 4, name: "Appointments", icon: <MdAccessTime />, active: false },
  { id: 5, name: "Statistics", icon: <MdBarChart />, active: false },
];

export const toolsItems = [
  { id: 1, name: "Chat", icon: <MdMessage />, active: false },
  { id: 2, name: "Support", icon: <MdHelp />, active: false },
  { id: 3, name: "Setting", icon: <MdSettings />, active: false },
];
