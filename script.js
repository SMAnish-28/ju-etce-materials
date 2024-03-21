document.addEventListener('DOMContentLoaded', function () {
    const categories = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
    const semesters = [
        ['1st Sem', '2nd Sem'],
        ['3rd Sem', '4th Sem'],
        ['5th Sem', '6th Sem'],
        ['7th Sem', '8th Sem']
    ];

    const categoriesDiv = document.getElementById('categories');
    const semestersDiv = document.getElementById('semesters');

    // Create category dropdowns
    categories.forEach((category, index) => {
        const select = document.createElement('select');
        select.id = `category${index + 1}`;
        select.classList.add('category-select');
        select.addEventListener('change', function () {
            displaySemesters(select.value);
        });

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = category;
        defaultOption.disabled = true;
        defaultOption.selected = true;
        select.appendChild(defaultOption);

        categoriesDiv.appendChild(select);
    });

    // Populate category dropdowns
    categories.forEach((category, index) => {
        const select = document.getElementById(`category${index + 1}`);
        const semesterOptions = semesters[index];

        semesterOptions.forEach((semester, semIndex) => {
            const option = document.createElement('option');
            option.value = semester;
            option.text = semester;
            select.appendChild(option);
        });
    });

    // Function to display semesters for a given category
    function displaySemesters(selectedSemester) {
        semestersDiv.innerHTML = ''; // Clear previous content

        const semesterText = document.createElement('p');
        semesterText.textContent = `Selected Semester: ${selectedSemester}`;
        semestersDiv.appendChild(semesterText);
    }
});
