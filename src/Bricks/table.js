import "./table.css"
export default function Table({tableData}){
    const makeTable = () => {
        let table = [];
        let rows = tableData.createRows();
        let counter = 0;
        for(let r of rows){
            let row = [];
            for(let d of r){
                row.push(<td>{counter}</td>);
                row.push(<td>{d}</td>);
            }
            table.push(<tr>{row}</tr>);
            counter++;
        }
        return table;
    };
    return(
        <div className={"table"}>
            <table>
                <thead></thead>
                <tbody>
                {makeTable()}
                </tbody>
            </table>
        </div>
    );
}