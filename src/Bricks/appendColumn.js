import "./appendColumn.css";
export default function AppendColumn({handleClose, tableData, handleTableData}){
    console.log(tableData);
    const makeNewData = () =>{
        let len = tableData.countOfRows;
        let newColumn = [];
        for(let i = 0; i < len; i++){
            newColumn.push(Math.random());
        }
        return newColumn;
    }
    const handleAppend = (column)=>{
        console.log(tableData);
        tableData.appendColumn(column);
         let table = tableData;
        handleTableData(table);
    }
    return(
        <div className={"append-column"}>
            <button onClick={()=>{handleClose(false)}}>Close</button>
            <button onClick={()=>{handleAppend(makeNewData())}}>Append random data</button>
        </div>
    );
}