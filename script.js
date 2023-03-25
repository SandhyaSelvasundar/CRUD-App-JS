var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["regnum"] = document.getElementById("regnum").value;
    formData["stuname"] = document.getElementById("stuname").value;
    formData["dept"] = document.getElementById("dept").value;
    formData["year"] = document.getElementById("year").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.regnum;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.stuname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.dept;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.year;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("regnum").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stuname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dept").value = selectedRow.cells[2].innerHTML;
    document.getElementById("year").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.regnum;
    selectedRow.cells[1].innerHTML = formData.stuname;
    selectedRow.cells[2].innerHTML = formData.dept;
    selectedRow.cells[3].innerHTML = formData.year;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("regnum").value = '';
    document.getElementById("stuname").value = '';
    document.getElementById("dept").value = '';
    document.getElementById("year").value = '';
    selectedRow = null;
}
