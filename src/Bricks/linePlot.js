import {CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line} from "recharts";

export default function LinePlot({data}){
    let reData = [];
    let makeReData = ()=>{
        for(let d of data){
            reData.push({
                x: d[0],
                y: d[1]
            });
        }
    };
    makeReData();
    return(
        <LineChart data={reData} height={500} width={500}>
            <CartesianGrid/>
            <XAxis dataKey={"x"} stroke={"#ffffff"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Line dataKey={"y"}></Line>
        </LineChart>
    );
}