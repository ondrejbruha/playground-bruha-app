import "./deleteColumn.css";
import {TableData} from "../../../tableData/tableData";

export default function DeleteColumn({map, handleClose, handleTableData, tableData}){
    let options = [];
    for(let m of map){
        options.push(<option>{m}</option>)
    }
    const deleteColumn = ()=>{
        let i = document.getElementById("delete-column").selectedIndex;
        let table = tableData;
        let columns = table.deleteColumn(i);
        if(columns){
            handleTableData(new TableData(columns));
        }

    }
    return(
        <div className={"delete-column"}>
            <select id={"delete-column"}>
                {options}
            </select>
            <button onClick={()=>{deleteColumn()}}>Confirm deletation</button>
            <button onClick={()=>{handleClose(false)}}>Close</button>
        </div>
    );
}