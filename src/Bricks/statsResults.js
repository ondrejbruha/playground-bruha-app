import "./statsResults.css";
import {useState} from "react";
export default function StatsResults({stats}){
    const [state, setState] = useState(false);

    return(
        <div className={"stats-results"}>
            <button onClick={()=>{setState(!state)}}>Update</button>
            <div>Max: {stats.max}</div>
            <div>Min: {stats.min}</div>
            <div>Mean: {stats.mean}</div>
            <div>Median: {stats.median}</div>
        </div>
    );

}