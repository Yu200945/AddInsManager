function computeTable(){
    let table = document.getElementById("addInsManager");
    let cols = table.column;
    let length = document.getElementById("addInsManager").rows[0].cells.length;
    for(let i = 1; i < length; i++){
        computeTableColumnTotal(i);
    }
}

function computeTableColumnTotal(column) {
    let table = document.getElementById("addInsManager");
    let rows = table.rows;
    let total = 0;

    for (let i = 1; i < rows.length; i++) {
        let x = rows[i].getElementsByTagName("TD")[column].getElementsByTagName("DIV")[0];
        let cur = parseInt(x.innerHTML);
        total += cur;
    }
    switch (column) {
        case 1:
            document.getElementById("cpuTotal").innerHTML = total;
            break;
        case 2:
            document.getElementById("memoryTotal").innerHTML = total;
            break;
        default:
            break;
    }
}