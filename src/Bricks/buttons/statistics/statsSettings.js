import "./statsSettings.css";
export default function StatsSettings({compute,map, handleClose, handleIndex}){
    let options = [];
    for(let m of map){
        options.push(<option>{m}</option>)
    }
    return(
        <div className={"stats-settings"}>
            <select onChange={(e)=>{handleIndex(e.target.selectedIndex)}}>
                {options}
            </select>
            <button onClick={()=>{compute()}}>Compute</button>
            <button onClick={()=>{handleClose(false)}}>Close</button>
        </div>
    );
}