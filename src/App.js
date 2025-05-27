import './App.css';
import DashboardContent from './Components/DashboardRightsideContent/DashboardContent';
import CenterContent from './Components/DashBoardCenterContent/CenterContent'
import SideBar from './Components/SideBar';
function App() {
  return (
    <div className="App">
      <div className="app-flex">
        <div className="sidebar"><SideBar /></div>
        <div className="header"><CenterContent /></div>
        <div className="dashboard"><DashboardContent /></div>
      </div>
    </div>
  );
}

export default App;
