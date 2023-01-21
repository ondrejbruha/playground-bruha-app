import {useEffect, useState} from "react";
import Table from "../../Bricks/table";
import LinePlot from "../../Bricks/linePlot";
import {ResponsiveContainer} from "recharts";
import "./playground.css"
import SideBar from "../../Bricks/sideBar";
import {TableData} from "../../table/table";

export default function PlayGround() {
    const [tableData, setTableData] = useState(new TableData());
    useEffect(() => {
        fetch("template-data/random")
            .then(res => res.json())
            .then((data) => {
                let table = new TableData();
                table.appendColumn(data);
                setTableData(table);
            });
    }, []);

    return (
        <div className={"play-ground"}>
            <SideBar/>
            <Table tableData={tableData}/>
        </div>
    );
}