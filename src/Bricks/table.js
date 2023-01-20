import "./table.css"
export default function Table({data}){
    const makeTable = () => {
        let table = [];
        for (let d of data) {
            let tr = [];
            for(let t of d){
                tr.push(
                    <td>{t}</td>
                );
            }
            table.push(
                <tr>
                    {tr}
                </tr>
            );
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