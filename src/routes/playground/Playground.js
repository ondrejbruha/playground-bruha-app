import {useEffect, useState} from "react";
import Table from "../../Bricks/table";
import LinePlot from "../../Bricks/linePlot";
import {ResponsiveContainer} from "recharts";
import "./playground.css"

export default function PlayGround() {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetch("template-data/random")
            .then(res =>res.json() )
            .then(data => setTableData(data));
    }, []);


    return (
        <div className={"play-ground"}>
            <Table data={tableData}/>
            <div className={"graph-container"}>
                <ResponsiveContainer width={'99%'} height={"99%"}>
                    <LinePlot data={tableData}></LinePlot>
                </ResponsiveContainer>

            </div>
        </div>
    );
}