document.addEventListener('DOMContentLoaded', function () {
    // Get all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    // Attach click event listener to each radio button
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            // Get the index of the selected column
            const columnIndex = Array.from(radioButton.parentNode.parentNode.children).indexOf(radioButton.parentNode);

            // Remove the 'selected-column' class from all cells
            const allCells = document.querySelectorAll('td');
            allCells.forEach(function (cell) {
                cell.classList.remove('selected-column');
            });

            // Check if the radio button is checked
            if (radioButton.checked) {
                // Add the 'selected-column' class to the cells in the selected column
                const selectedCells = document.querySelectorAll('td:nth-child(' + (columnIndex + 1) + ')');
                selectedCells.forEach(function (cell) {
                    cell.classList.add('selected-column');
                });
            }
        });
    });
});