const open = document.getElementById("trashOp"); 
const close = document.getElementById("trashCl")

function trash() {
    for(let i=0; i < 4; i++){
        let div = document.getElementById("trash");
        let img = document.createElement("img");
        img.id = "trash-"+(i+1);
        img.src = "images/trash.jpg";
        img.draggable = "true";
        img.ondrag="onDragStart(event);"
        let left = Math.floor(Math.random()*1200);
        let top = Math.floor(Math.random()*800);
        img.style.position = "fixed";
        img.style.width = "150px";
        img.style.height = "150px";
        img.style.left = left + "px";
        img.style.top = top + "px";
        img.style.cursor = "grab";
        div.appendChild(img);
    }
}

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragLeave(event){
    open.style.display = "none";
    close.style.display = "block";
}

function onDragOver(event) {
    event.preventDefault();
    open.style.display = "block";
    close.style.display = "none";
}

function onDrop(event) {
    const data = event.dataTransfer.getData("text");
    console.log(data);
    const draggableElemnt = document.getElementById(data);
    draggableElemnt.style.display = "none";
    open.style.display = "none";
    close.style.display = "block";
    event.dataTransfer.clearData();
}