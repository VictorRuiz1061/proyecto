document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('dropdownRadioButton');
    const filterDropdown = document.getElementById('dropdownRadio');
    const filterRadios = document.querySelectorAll('input[name="filter-radio"]');
    const tableRows = document.querySelectorAll('tbody tr');

    filterButton.addEventListener('click', function() {
        filterDropdown.classList.toggle('hidden');
    });

    filterRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const days = parseInt(this.value, 10);
            const today = new Date();
            const filterDate = new Date(today.setDate(today.getDate() - days));

            tableRows.forEach(row => {
                const rowDate = new Date(row.dataset.date); 
                if (rowDate >= filterDate) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });

            filterButton.innerText = this.nextElementSibling.innerText;

            filterDropdown.classList.add('hidden');
        });
    });
});

/* -----------------para materiales modal------------------- */
function openModal() {
    document.getElementById('materialModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('materialModal').classList.add('hidden');
}

/* -----------------para usuarios modal------------------- */
function openModal() {
    document.getElementById('userModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('userModal').classList.add('hidden');
}