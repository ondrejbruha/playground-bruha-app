import "./appendColumn.css";
export default function AppendColumn({handleClose, tableData, handleTableData}){
    console.log(tableData);
    const makeNois = () =>{
        fetch("api/template-data/nois", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                min: Number(document.getElementById("nois-min").value),
                max: Number(document.getElementById("nois-max").value),
                count: tableData.countOfRows
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(tableData)});
    }
    const makeLinear = () =>{
        fetch("api/template-data/linear", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                min: Number(document.getElementById("lin-min").value),
                max: Number(document.getElementById("lin-max").value),
                count: tableData.countOfRows
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(tableData)});
    }
    const makePolynomial = () =>{
        fetch("api/template-data/polynomial", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                min: Number(document.getElementById("p-min").value),
                max: Number(document.getElementById("p-max").value),
                exp: Number(document.getElementById("p-exp").value),
                count: tableData.countOfRows
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(tableData)});
    }
    const makeConst = () =>{
        fetch("api/template-data/constant", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                const: Number(document.getElementById("const-val").value),
                count: tableData.countOfRows
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(tableData)});
    }
    const makeSin = () =>{
        fetch("api/template-data/sin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                a: Number(document.getElementById("s-a").value),
                b: Number(document.getElementById("s-f").value),
                count: tableData.countOfRows
            }),
        })
            .then(response => response.json())
            .then((data)=>{tableData.appendColumn(data);handleTableData(tableData)});
    }

    return(
        <div className={"append-column"}>
            <button onClick={()=>{handleClose(false)}}>Close</button>
            <div>
                <label>NoisData: Min: <input id={"nois-min"} type={"number"}/> Max: <input id={"nois-max"} type={"number"}/></label>
                <button onClick={()=>{makeNois()}}>Append nois data</button>
            </div>
            <div>
                <label>LinData: Min: <input id={"lin-min"} type={"number"}/> Max: <input id={"lin-max"} type={"number"}/></label>
                <button onClick={()=>{makeLinear()}}>Append linear data</button>
            </div>
            <div>
                <label>Const: Value: <input id={"const-val"} type={"number"}/></label>
                <button onClick={()=>{makeConst()}}>Append const data</button>
            </div>
            <div>
                <label>PolyData: Min: <input id={"p-min"} type={"number"}/> Max: <input id={"p-max"} type={"number"}/> Exp: <input id={"p-exp"} type={"number"}/></label>
                <button onClick={()=>{makePolynomial()}}>Append polynomial data</button>
            </div>
            <div>
                <label>Sin: Ampl: <input id={"s-a"} type={"number"}/> Freq: <input id={"s-f"} type={"number"}/> </label>
                <button onClick={()=>{makeSin()}}>Append sin data</button>
            </div>
        </div>
    );
}