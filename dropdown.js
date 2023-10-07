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






const input_containers = document.querySelectorAll('.text-container');

input_containers.forEach(function(input_container){
    const myInput = input_container.getElementsByTagName('input')[0];
    const myLabel = input_container.getElementsByTagName('label')[0];

    myInput.addEventListener('focus', () => {
        myLabel.style.top = '0'; // Move the label up when focused
        myLabel.style.fontSize = '10px';
      });
      
      myInput.addEventListener('blur', () => {
        if (!myInput.value) {
          myLabel.style.top = '5px'; // Move the label down if input is empty on blur
          myLabel.style.fontSize = '14px';
        }
      });

});


