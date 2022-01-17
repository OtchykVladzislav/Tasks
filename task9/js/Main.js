'use strict'


let editStudentId = undefined
var selectedRow = null
const pagination_element = document.getElementById('pagination');
var current_page = 1;
var rows = 1;

//Pressing event (add)
function onFormSubmit(){
    let formData = readFormData()
    addEventToJsonFile(formData);
    clearInfo();
}
//Pressing event (editing)
document.getElementById('edit').onclick = () =>{
    editStudentId ? onEdit() : alert('Select student for edition!');
    editStudentId = undefined;
    clearInfo();
}

//Personal conclusion
function DisplayList (items, rows_per_page, page) {
	page--;
	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = JSON.parse(paginatedItems[i]);
		createRow(item);
	}
}

//Creating pages button
function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}
//Function when clicking on the page
function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, rows, current_page);
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');
		button.classList.add('active');
        getFile();
	});

	return button;
}
//Reading data from the form
function readFormData(){
    var FormData = {};
    FormData["firstName"] = document.getElementById('firstName').value
    FormData["secondName"] = document.getElementById('secondName').value
    FormData["age"] = document.getElementById('age').value
    FormData["speciality"] = document.getElementById('speciality').value
    return FormData;
}
//Cleaning form
function clearInfo(){
    document.getElementById('firstName').value = ""
    document.getElementById('secondName').value = ""
    document.getElementById('age').value = ""
    document.getElementById('speciality').value = ""
}
//Data output for editing
function editInfo(td){
    selectedRow = td.parentElement.parentElement;
    editStudentId = selectedRow.cells[0].innerHTML;
    document.getElementById('firstName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('secondName').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
    document.getElementById('speciality').value = selectedRow.cells[4].innerHTML;
}
//Error correction
function onEdit(){
    fetch('http://localhost:3000/edit', {
        method: 'POST',
        body: JSON.stringify({
            'listId' : editStudentId,
            'firstName' : document.getElementById('firstName').value.toString(),
            'secondName' : document.getElementById('secondName').value.toString(),
            'age' : document.getElementById('age').value.toString(),
            'speciality' : document.getElementById('speciality').value.toString()
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => {
        getFile();
    })
    .catch(err => {
        console.log(err)
    })
}
//Delete data from file
function onDelete(listId){
    fetch('http://localhost:3000/delete', {
        method: 'POST',
        body: JSON.stringify({
            'listId' : listId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        getFile();
    })
    .catch(err => {
        console.log(err)
    })
}
//Add data to json file
function addEventToJsonFile(formData){
    fetch('http://localhost:3000/files', {
        method: 'POST',
        body: JSON.stringify({
            'listId' : Date.now(),
            'firstName' : formData["firstName"],
            'secondName' : formData["secondName"],
            'age' : formData["age"],
            'speciality' : formData["speciality"]
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        while(document.querySelector('.row').firstChild){
            document.querySelector('.row').removeChild(document.querySelector('.row').firstChild)
        }
        getFile();
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
}
// Data output to the table (with pagination)
function getFile() {
    fetch('http://localhost:3000/getInfo',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        const row = document.querySelector('.row');
        if (!response.students){
            const div = document.createElement('div')
            div.innerText = 'Файл пустой'
            div.style.textAlign = "center"
            row.appendChild(div)
        }
        else{
            const students = JSON.parse(response.students)
            while(row.firstChild){
                row.removeChild(row.firstChild)
            }
            DisplayList(students, rows, current_page);
            SetupPagination(students, pagination_element, rows);
        }
    })
}
//Creating a string in the table
function createRow(student){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = student.listId;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = student.firstName;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = student.secondName;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = student.age;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = student.speciality;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML =  `<button class="oper" onclick="onDelete(${student.listId})">Delete</button>
                        <button class="oper" onclick="editInfo(this)">Select</button>`;
}