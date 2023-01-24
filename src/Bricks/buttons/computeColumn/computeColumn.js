import "./computeColumn.css";
import {TableData} from "../../../tableData/tableData";

export default function ComputeColumn({map, handleClose, handleTableData, tableData}){
    let options = [];
    for(let m of map){
        options.push(<option>{m}</option>)
    }
    let operations = [<option>+</option>, <option>-</option>, <option>*</option>, <option>/</option>];
    const compute = ()=>{
        let a = document.getElementById("compute-column1").selectedIndex;
        let b = document.getElementById("compute-column2").selectedIndex;
        let op = document.getElementById("compute-operation").selectedIndex;
        const columnA = tableData.getColumn(a);
        const columnB = tableData.getColumn(b);
        if(op === 0){
            plus(columnA,columnB);
        }
        else if(op === 1){
            minus(columnA, columnB);
        }
        else if(op ===2){
            multiply(columnA, columnB);
        }
        else if(op === 3){
            divide(columnA, columnB);
        }
    }
    const plus = (a,b)=>{
        fetch("api/compute/plus", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                a: a,
                b: b
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(new TableData(tableData.columns))});
    }
    const minus = (a,b)=>{
        fetch("api/compute/minus", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                a: a,
                b: b
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(new TableData(tableData.columns))});
    }
    const multiply = (a,b)=>{
        fetch("api/compute/multiply", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                a: a,
                b: b
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(new TableData(tableData.columns))});
    }
    const divide = (a,b)=>{
        fetch("api/compute/divide", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                a: a,
                b: b
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(new TableData(tableData.columns))});
    }
    const spectrum = ()=>{
        fetch("api/compute/spectrum", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(document.getElementById("spectrum").selectedIndex)),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(new TableData(tableData.columns))});
    }
    const fFilter = ()=>{
        fetch("api/compute/fourier-filter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: tableData.getColumn(document.getElementById("fourier-filter").selectedIndex),
                edge: document.getElementById("edge").selectedIndex
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(new TableData(tableData.columns))});
    }
    return(
        <div className={"compute-column"}>
            <select id={"compute-column1"}>
                {options}
            </select>
            <select id={"compute-operation"}>
                {operations}
            </select>
            <select id={"compute-column2"}>
                {options}
            </select>
            <button onClick={()=>{compute()}}>Compute</button>
            <select id={"spectrum"}>
                {options}
            </select>
            <button onClick={()=>{spectrum()}}>Compute spectrum</button>
            <select id={"fourier-filter"}>
                {options}
            </select>
            <label>Edge: <input type={"number"} id={"edge"}/></label>
            <button onClick={()=>{fFilter()}}>Compute fourier filter</button>
            <button onClick={()=>{handleClose(false)}}>Close</button>
        </div>
    );
}