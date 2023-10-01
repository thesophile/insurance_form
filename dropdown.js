const dropContainers = document.querySelectorAll('.dropContainer');


dropContainers.forEach(dropContainer => {

    const list = dropContainer.querySelector('.list');
    const selectedMonth = dropContainer.getElementsByClassName("selectedMonth")[0];


    dropContainer.addEventListener('click', ()=>{
        list.style.opacity = '1';
        list.style.visibility="visible";
    })

    // Close the dropdown when a list item is clicked
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.stopPropagation();
            selectedMonth.textContent = event.target.textContent; //set Text

            list.style.opacity = '0'; //Hide list
            list.style.visibility="hidden";

            //move the label up 
            const label = dropContainer.querySelector('label');
            if (label) {
              label.style.top = '0px'; 
              label.style["font-size"] = '10px'; 
            }
        }
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!dropContainer.contains(event.target) && !list.contains(event.target)) {
        list.style.opacity = '0';
        list.style.visibility="hidden";
        }
    });
});


// Toggle the dropdown when the toggle is clicked
// toggle.addEventListener('click', () => {
//   list.style.display = list.style.display === 'block' ? 'none' : 'block';
// });




