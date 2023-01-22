import "./sideBar.css";
import StatsSettings from "./statsSettings";
import {useState} from "react";
import AppendColumn from "./appendColumn";
import DeleteColumn from "./deleteColumn";
export default function SideBar({map, handleIndex, compute, handleTableData, tableData, handleUpdate}){
    const [statsSettings, handleStatsSettings] = useState(false);
    const [appendColumn, handleAppendColumn] = useState(false);
    const [deleteColumn, handleDeleteColumn] = useState(false);
    return(
        <div className={"side-bar"}>
            {deleteColumn ? <DeleteColumn handleTableData={handleTableData} tableData={tableData} map={map} handleClose={handleDeleteColumn}/> : null}
            {appendColumn ? <AppendColumn handleTableData={handleTableData} handleClose={handleAppendColumn} tableData={tableData}/> : null}
            {statsSettings ? <StatsSettings compute={compute} handleIndex={handleIndex} map={map} handleClose={handleStatsSettings}/> : null}
            <button onClick={()=>{handleStatsSettings(true)}}>Stats</button>
            <button onClick={()=>{handleAppendColumn(true)}}>Append column</button>
            <button onClick={()=>{handleDeleteColumn(true)}}>Delete column</button>
            <button onClick={()=>{handleUpdate[1](!handleUpdate[0])}}>Update</button>
        </div>
    );
}
