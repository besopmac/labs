// let button = document.querySelector('.event-button');

// button.addEventListener('click', function() {
//     console.log('was clicked!');
// });

// event delegation
let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log(`You have clicked on button number ${event.target.innerText}`);
    } else {
        console.log(`You don't clicked any button yet.`);
    }

    event.stopPropagation();
})