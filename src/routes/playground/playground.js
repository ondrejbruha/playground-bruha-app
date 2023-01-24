import {useEffect, useState} from "react";
import Table from "../../Bricks/table/table";
import "./playground.css"
import SideBar from "../../Bricks/sideBar/sideBar";
import StatsResults from "../../Bricks/results/statsResults";
import {TableData} from "../../tableData/tableData";

export default function Playground() {
    const [update, shouldUpdate] = useState(false);
    const [tableData, setTableData] = useState(new TableData());
    const [columnIndex, setColumnIndex] = useState(0);
    const [statistics, setStatistics] = useState({});
    const [showStats, handleStats] = useState(true);
    useEffect(() => {
        fetch("api/template-data/random-old")
            .then(res => res.json())
            .then((data) => {
                let table = new TableData();
                table.appendColumn(data);
                table.createIndexColumn();
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
        fetch("api/statistics/max", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.max = data);

        fetch("api/statistics/min", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.min = data);

        fetch("api/statistics/mean", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData.getColumn(columnIndex)),
        })
            .then(response => response.json())
            .then(data => stats.mean = data);

        fetch("api/statistics/median", {
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
            <SideBar handleStats={handleStats} handleTableData={setTableData} tableData={tableData} compute={getStats} map={map} handleIndex={setColumnIndex} handleUpdate={[update, shouldUpdate]}/>
            <Table tableData={tableData}/>
            {showStats ? <StatsResults stats={statistics} handleStats={handleStats}/> : null}
        </div>
    );
}