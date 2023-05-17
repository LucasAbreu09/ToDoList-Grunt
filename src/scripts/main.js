document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('submit', function addTable(e) {
        e.preventDefault();

        let text = document.getElementById('activite').value;
        let time = document.getElementById('time').value;

        var table = document.getElementById('table');
        var newLine = table.insertRow();

        var newCell1 = newLine.insertCell();
        newCell1.innerHTML = text;

        var newCell1 = newLine.insertCell();
        newCell1.innerHTML = time + 'H';

        var newCell3 = newLine.insertCell();
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newCell3.appendChild(checkbox);

        document.getElementById('activite').value = '';
        document.getElementById('time').value = '';
    }) 

    addTable();
})