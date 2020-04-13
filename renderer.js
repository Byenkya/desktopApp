const container = document.getElementById("container");

var num = [3,4,5,9,15,21,25,26,27,33,39,45,51,57,63];
function makeBusStructure(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c=1; c<(rows * cols) + 1; c++){
        let cell = document.createElement("div");
        if(!num.includes(c)){
            cell.innerHTML = "<button onclick='tap()' id=" + c + " style='width:100%;border-radius: 6px;border-color:white;background-color:#ccc;'>" + c + "</button>" ;
            container.appendChild(cell).className = "grid-item";
        }else{
            cell.innerText = "-";
            cell.id = c;
            container.appendChild(cell).className = "grid-item-none";
        }
    }
}

function tap(){
    console.log("??????????????????");
}

makeBusStructure(11, 6);

