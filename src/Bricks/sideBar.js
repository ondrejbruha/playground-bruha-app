import "./sideBar.css";
import StatsSettings from "./statsSettings";
import {useState} from "react";
export default function SideBar({map, handleIndex, compute}){
    const [statsSettings, handleStatsSettings] = useState(false);
    return(
        <div className={"side-bar"}>
            {statsSettings ? <StatsSettings compute={compute} handleIndex={handleIndex} map={map} handleClose={handleStatsSettings}/> : null}
            <button onClick={()=>{handleStatsSettings(true)}}>Stats</button>
        </div>
    );
}
