import "./sideBar.css";
import StatsSettings from "../buttons/statistics/statsSettings";
import {useState} from "react";
import AppendColumn from "../buttons/appendColumns/appendColumn";
import DeleteColumn from "../buttons/deleteColumns/deleteColumn";
import ComputeColumn from "../buttons/computeColumn/computeColumn";
export default function SideBar({map, handleIndex, compute, handleTableData, tableData, handleUpdate, handleStats}){
    const [statsSettings, handleStatsSettings] = useState(false);
    const [appendColumn, handleAppendColumn] = useState(false);
    const [deleteColumn, handleDeleteColumn] = useState(false);
    const [computeColumn, handleComputeColumn] = useState(false);
    return(
        <div className={"side-bar"}>
            {computeColumn ? <ComputeColumn handleTableData={handleTableData} tableData={tableData} map={map} handleClose={handleComputeColumn}/> : null}
            {deleteColumn ? <DeleteColumn handleTableData={handleTableData} tableData={tableData} map={map} handleClose={handleDeleteColumn}/> : null}
            {appendColumn ? <AppendColumn handleTableData={handleTableData} handleClose={handleAppendColumn} tableData={tableData}/> : null}
            {statsSettings ? <StatsSettings compute={compute} handleIndex={handleIndex} map={map} handleClose={handleStatsSettings}/> : null}
            <button onClick={()=>{handleStatsSettings(true)}}>Stats</button>
            <button onClick={()=>{handleAppendColumn(true)}}>Append column</button>
            <button onClick={()=>{handleDeleteColumn(true)}}>Delete column</button>
            <button onClick={()=>{handleComputeColumn(true)}}>Compute column</button>
            <button onClick={()=>{handleStats(true)}}>Show Stats</button>
            <button onClick={()=>{handleUpdate[1](!handleUpdate[0])}}>Update</button>
        </div>
    );
}
