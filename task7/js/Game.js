const open = document.getElementById("trashOp"); 
const close = document.getElementById("trashCl");
const div = document.getElementById("trash");
let element;
//garbage is located randomly(4 elements)
function trash() {
    for(let i=0; i < 4; i++){
        let img = document.createElement("img");
        div.appendChild(img);
        img.src = "images/trash.jpg";
        img.id = "trash-"+(i+1);
        //Indicates whether the element can be dragged
        img.setAttribute('draggable','true');
        //the user started dragging the element
        img.addEventListener('dragstart',function(event){element = event.target.id;})
        let left = Math.floor(Math.random()*1200);
        let top = Math.floor(Math.random()*800);
        img.style.position = "absolute";
        img.style.width = "150px";
        img.style.height = "150px";
        img.style.left = left + "px";
        img.style.top = top + "px";
        img.style.cursor = "grab";
    }
}

//the dragged item leaves a valid drop target.
function onDragLeave(event){
    open.style.display = "none";
    close.style.display = "block";
}
//the item is dragged over a valid target
function onDragOver(event) {
    event.preventDefault();
    open.style.display = "block";
    close.style.display = "none";
}
//the element has been dropped into the allowable drop zone
function onDrop(event) {
    document.getElementById(element).style.display = "none";
    open.style.display = "none";
    close.style.display = "block";
}