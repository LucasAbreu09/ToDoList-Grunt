document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('submit', function addTable(e) {
        e.preventDefault();

        //pegar valor no campo
        let text = document.getElementById('activite').value;
        let time = document.getElementById('time').value;

        //inserir nova linha
        var table = document.getElementById('table');
        var newLine = table.insertRow();

        //inserir texto/nome da atividade
        var newCell1 = newLine.insertCell();
        newCell1.innerHTML = text;

        //inserir a entreda do campo de tempo
        var newCell2 = newLine.insertCell();
        newCell2.innerHTML = time + 'H';

        //adiciona div com label e checkbox
        var newCell3 = newLine.insertCell();

        //colocar div
        var checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('checkbox');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'concluido';

        // inserir label e checkbox
        var label = document.createElement('label');
        label.innerHTML = 'Done';
        label.classList.add('done');
        label.setAttribute('for', 'concluido');

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        newCell3.appendChild(checkboxDiv);

        //limpar inputs
        document.getElementById('activite').value = '';
        document.getElementById('time').value = '';
    });
});

//ler os novos campos inseridos e trocar as cores quando marcado ou não
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('table');
    table.addEventListener('change', function(event) {
        const target = event.target;
        if (target.matches('.checkbox input[type="checkbox"]')) {
            const checkbox = target;
            const label = checkbox.nextElementSibling;
            if (checkbox.checked) {
                label.style.backgroundColor = '#59C5B3';
            } else {
                label.style.backgroundColor = '#BF5846';
            }
        }
    });
});
