import {CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line} from "recharts";
import "./linePlot.css";
export default function LinePlot({data, handleClose}){
    let x = data.x;
    let y = data.y;
    let dtoPlt = [];
    let len = Math.max(x.length, y.length);
    let makeReData = ()=>{
        for(let i = 0; i < len; i++){
            dtoPlt.push({
                x: x[i],
                y: y[i]
            });
        }
    };
    makeReData();
    return(
        <div className={"line-plot"}>
            <LineChart data={dtoPlt} height={300} width={500}>
                <CartesianGrid/>
                <XAxis dataKey={"x"} stroke={"#ffffff"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey={"y"}></Line>
            </LineChart>
            <button onClick={()=>{handleClose(false)}}>Close</button>
        </div>
    );
}