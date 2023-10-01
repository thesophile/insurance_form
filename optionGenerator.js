


        const daySelect = document.getElementById('day');
        const yearSelect = document.getElementById('year');

        // Populate the day options (1 to 31)
        function generateDayOptions() {
            for (let day = 1; day <= 31; day++) {
                const listElement = document.createElement('LI');
                listElement.value = day;
                listElement.textContent = day;
                daySelect.appendChild(listElement);
            }
        }

        // Function to generate year options 
        function generateYearOptions() {
            const currentYear = new Date().getFullYear();
            for (let year = currentYear; year >= 1900; year--) {
                const option = document.createElement('LI');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            }
        }

        // Initial population of year options
        generateYearOptions();
        generateDayOptions();