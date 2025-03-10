//Task 2 - Adding Employee Cards Dynamically

function createEmployeeCard(name, position){
    
    let divEmpContainer = document.getElementById('employeeContainer');
    // Making box to place employee cards

    const employeeCard = document.createElement('div');
    employeeCard.setAttribute('class','employee-card');
    // Making new card for the employees

    const empName = document.createElement('h2');
    empName.setAttribute('class', 'employee-name');
    empName.textContent = name;
    employeeCard.append(empName);
    // Putting employee name to cards

    const empPosition = document.createElement('p');
    empPosition.setAttribute('class', 'employee-position');
    empPosition.textContent = position;
    employeeCard.append(empPosition);
    // Putting employee position

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-btn');
    removeBtn.textContent = 'Remove';
    employeeCard.append(removeBtn);
    // Making a button to remove employee card
}


