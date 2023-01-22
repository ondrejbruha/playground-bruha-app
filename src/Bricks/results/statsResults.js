import "./statsResults.css";
export default function StatsResults({stats, handleStats}){
    return(
        <div className={"stats-results"}>
            <button onClick={()=>{handleStats(false)}}>Hide</button>
            <div>Max: {stats.max}</div>
            <div>Min: {stats.min}</div>
            <div>Mean: {stats.mean}</div>
            <div>Median: {stats.median}</div>
        </div>
    );

}