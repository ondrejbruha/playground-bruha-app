export class TableData{
    #columns
    #names
    constructor(data) {
        this.columns = [];
        if(data){
            for(let d of data){
                this.columns.push(d);
            }
        }
        this.update();
    }
    get columns(){
        return this.#columns;
    }
    set columns(val){
        this.#columns = val;
    }
    appendColumn(column){
        this.columns.push(column);
        this.update();
    }
    creteIndexColumn(){
        let indexColumn = [];
        for(let i = 0; i < this.countOfRows; i++){
            indexColumn.push(i);
        }
        this.appendColumn(indexColumn);
        this.countOfColumns = this.columns.length;
    }
    update(){
        this.countOfColumns = this.columns ? this.columns.length : 0;
        this.countOfRows = 0;
        for(let c of this.columns){
            this.countOfRows = Math.max(this.countOfRows, c.length);
        }

    }
    createRows(){
        let rows = [];
        for(let i = 0; i < this.countOfRows; i++){
            let row = [];
            for(let j = 0; j <this.countOfColumns; j++){
                row.push(this.columns[j][i]);
            }
            rows.push(row);
        }
        return rows;
    }
    getColumn(i){
        return this.columns[i];
    }
}