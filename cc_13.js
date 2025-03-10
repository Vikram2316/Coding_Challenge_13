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

// Task 3: Converting NodeLists to Arrays for Bulk Updates 

function createBulkEmpStyleUpdate(){

    const employeeCards = document.querySelectorAll('.employee-card');
    // Selecting all employee cards on page

    const arrEmployees = Array.from(employeeCards);
    arrEmployees.forEach((emp) => {
        setEmployeeCardStyle(emp);
    })
}   // Making cards into an array and styling 


function setEmployeeCardStyle(currentCard){
    currentCard.style.border = '2px solid white';
    currentCard.style.backgroundColor = 'lightblue';
} // Styling the card (creativity)


// Task 4: Implementing Removal of Employee Cards with Event Bubbling 

removeBtn.addEventListener('click', (event) => {

    employeeCard.remove();
    // Removing card from page

    event.stopPropagation();
}); // Preventing propogation

employeeCard.addEventListener('click', () => {
    console.log('Employee Card Clicked:', empName.textContent);
}); // Logging a message when employee card is clicked

