import UseFetch from "../../Hooks/UseFetch";
import { useParams } from 'react-router-dom' ;
import HelloUser from "../../components/HelloUser";
import BarChartActivities from "../../components/BarChartActivities";
import DataCard from "../../components/DataCard";
import LineChartSessions from "../../components/LineChartSessions";
import RadarChartSession  from "../../components/RadarChartSession";
import PourcentPieChart from "../../components/PourcentPieChart";

import energy from "../../assets/img/energy.svg";
import chicken from "../../assets/img/chicken.svg";
import apple from "../../assets/img/apple.svg";
import burger from "../../assets/img/burger.svg";

// Render dashboard
function Dashboard() {

  const userId = useParams().id;
  const baseURL =`http://localhost:3000/user/${userId}`;
  const ActivityURL = `http://localhost:3000/user/${userId}/activity`;
  const SessionsURL = `http://localhost:3000/user/${userId}/average-sessions`;
  const PerformanceURL = `http://localhost:3000/user/${userId}/performance`;
  
  let userInfos = UseFetch(baseURL);
  let userActivities = UseFetch(ActivityURL);
  let userSessions = UseFetch(SessionsURL);
  let userPerformances = UseFetch(PerformanceURL);

  // Error case
  let returnContent = (errorStatus , component) => {
    if(errorStatus !== "false") {
      return ( <div className="error-message">Oups nous n'avons pas pu charger vos données</div> )
    }
    else { return ( component ) } 
  }

  return (  
    <div className="main-dashboard">
      <div className="container container-lg">
        <div className='dashboard-header'>     
          {userSessions.error && returnContent(userSessions.error , <HelloUser result = {userInfos} ></HelloUser>)}    
        </div>

        <div className="datas-container">       
          <div className="charts-container">
            <div className="chart-activity">
              {userActivities.error && returnContent(userActivities.error , <BarChartActivities result = {userActivities.result} ></BarChartActivities>)}
            </div> 

            <div className="charts-row">
              <div className="col-card lineChart">
              {userSessions.error && returnContent(userActivities.error, <LineChartSessions result = {userSessions.result} ></LineChartSessions>)}
              </div>

              <div className="col-card radarChart">
              {userPerformances.error && returnContent(userPerformances.error, <RadarChartSession result = {userPerformances.result}></RadarChartSession>)}
              </div>

              <div className="col-card pieChart">
              {userInfos.error && returnContent(userInfos.error, <PourcentPieChart result = {userInfos.result}></PourcentPieChart>)}
              </div>
            </div> 
 
          </div>
              
          <div className="aside-datas">
            {userInfos.error && returnContent(userInfos.error, <DataCard name="Calories" unit="kCal" result = {userInfos.result} icon= {energy} ></DataCard>)}

            {userInfos.error && returnContent(userInfos.error, <DataCard name="Proteines" unit="g" result = {userInfos.result} icon={chicken} ></DataCard>)}

            {userInfos.error && returnContent(userInfos.error, <DataCard name="Glucides" unit="g" result = {userInfos.result} icon={apple} ></DataCard>)}
                
            {userInfos.error && returnContent(userInfos.error, <DataCard name="Lipides" unit="g" result = {userInfos.result} icon={burger} ></DataCard>)} 
          </div> 
        </div>  
      </div>
    </div>
  
  )
}

export default Dashboard;