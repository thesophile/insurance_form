const dropContainers = document.querySelectorAll('.dropContainer');



dropContainers.forEach(dropContainer => {
    console.log(dropContainer);
    const list = dropContainer.querySelector('.list');
    console.log(list);


    dropContainer.addEventListener('click', ()=>{
        list.style.opacity = '1';
    })

    // Close the dropdown when a list item is clicked
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
        //   toggle.textContent = event.target.textContent;
        list.style.opacity = '0';
        }
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!dropContainer.contains(event.target) && !list.contains(event.target)) {
        list.style.opacity = '0';
        }
    });
});


// Toggle the dropdown when the toggle is clicked
// toggle.addEventListener('click', () => {
//   list.style.display = list.style.display === 'block' ? 'none' : 'block';
// });




