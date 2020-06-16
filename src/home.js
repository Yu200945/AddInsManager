function sortTable(column) {
    let table = document.getElementById("addInsManager");
    let switching = true;
    let count = 0;
    let i;

    let direction = "ascending";

    while (switching) {
        switching = false;
        let rows = table.rows;
        let shouldSwitch = false;

        for (i = 1; i < rows.length - 1; i++) {

            let x = rows[i].getElementsByTagName("TD")[column];
            let y = rows[i + 1].getElementsByTagName("TD")[column];

            // By default, the first column will be sorted by ascending order.
            if (column === 0) {
                if (direction === "ascending") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            // By default, the column with numbers will be sorted by descending order.
            else {
                x = x.getElementsByTagName("DIV")[0];
                y = y.getElementsByTagName("DIV")[0];
                
                if (direction === "ascending") {
                    if (Number.parseFloat(x.innerHTML) < Number.parseFloat(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (Number.parseFloat(x.innerHTML) > Number.parseFloat(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }

        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            count++;
        }
        else {
            if(count === 0 && direction === "ascending"){
                direction = "descending";
                switching = true;
            }
        }
    }
}


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