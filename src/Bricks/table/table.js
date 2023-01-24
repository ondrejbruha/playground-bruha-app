import "./table.css"
export default function Table({tableData}){
    const makeTable = () => {
        let table = [];
        let rows = tableData.createRows();
        let counter = 0;
        for(let r of rows){
            let row = [];
            for(let d of r){
                //row.push(<td className={"index"}>{counter}</td>);
                row.push(<td>{d}</td>);
            }
            table.push(<tr>{row}</tr>);
            counter++;
        }
        return table;
    };
    const makeTableHeader = ()=>{
        let tableHeader = [];
        for(let i = 0; i < tableData.countOfColumns; i++){
            //tableHeader.push(<td>Row</td>);
            tableHeader.push(<td>Column: {i}</td>)
        }
        return tableHeader;
    }
    return(
        <div className={"table"}>
            <table>
                <thead>{makeTableHeader()}</thead>
                <tbody>
                {makeTable()}
                </tbody>
            </table>
        </div>
    );
}