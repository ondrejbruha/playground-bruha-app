import "./statsSettings.css";
import LinePlot from "../../plots/linePlot";
import {useState} from "react";
export default function StatsSettings({compute,map, handleClose, handleIndex, tableData}){
    const [graph, handleGraph] = useState(false);
    let options = [];
    for(let m of map){
        options.push(<option>{m}</option>)
    }
    const showGraph = ()=>{
        let x = tableData.getColumn(document.getElementById("x-graph").selectedIndex);
        let y = tableData.getColumn(document.getElementById("y-graph").selectedIndex);
        let data = {x: x, y: y};
        return(
            <LinePlot handleClose={handleGraph} data={data}/>
        );
    }
    return(
        <div className={"stats-settings"}>
            <select onChange={(e)=>{handleIndex(e.target.selectedIndex)}}>
                {options}
            </select>
            <button onClick={()=>{compute()}}>Compute stats</button>
            <div>X:
                <select id={"x-graph"}>
                {options}
                </select>
            </div>
            <div>Y:
                <select id={"y-graph"}>
                    {options}
                </select>
            </div>
            <button onClick={()=>{handleGraph(true)}}>Make graph</button>
            <button onClick={()=>{handleClose(false)}}>Close</button>
            {graph ? showGraph() : null}
        </div>
    );
}