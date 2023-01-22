import {useEffect, useState} from "react";
import Table from "../../Bricks/table";
import "./playground.css"
import SideBar from "../../Bricks/sideBar";
import StatsResults from "../../Bricks/statsResults";
import {TableData} from "../../table/table";

export default function PlayGround() {
    const [update, shouldUpdate] = useState(false);
    const [tableData, setTableData] = useState(new TableData());
    const [columnIndex, setColumnIndex] = useState(0);
    const [statistics, setStatistics] = useState({});
    useEffect(() => {
        fetch("template-data/random")
            .then(res => res.json())
            .then((data) => {
                let table = new TableData();
                table.appendColumn(data);
                setTableData(table);
            });
    }, []);
    let countOfColumns = tableData.countOfColumns;
    let map = [];
    for(let i = 0; i < countOfColumns; i++){
        map.push(i);
    }

    const getStats = async ()=>{
        let stats = {};
        fetch("statistics/max", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.max = data);

        fetch("statistics/min", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.min = data);

        fetch("statistics/mean", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.mean = data);

        fetch("statistics/median", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.median = data);

        setStatistics(stats);
    }



    return (
        <div className={"play-ground"}>
            <SideBar handleTableData={setTableData} tableData={tableData} compute={getStats} map={map} handleIndex={setColumnIndex} handleUpdate={[update, shouldUpdate]}/>
            <Table tableData={tableData}/>
            <StatsResults stats={statistics}/>
        </div>
    );
}