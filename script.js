// const form = document.querySelector('#myForm');
// const inputField = document.querySelector('#name');

// form.addEventListener('submit', function(event) {
//     if (inputField.value.trim() === '') {
//         event.preventDefault();
//         alert('Please enter a value');
//     }  else {
//         alert('Form submitted successfully');
//     };
// });

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('firstName').value;
let surname = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let queryGen = document.getElementById('general').value;
let querySup = document.getElementById('support').value;
let message = document.getElementById('text').value;
let checkBox = document.getElementById('agree').value;

document.getElementById('output').innerHTML = `First name: ${name} <br> Surname: ${surname} <br>
Email: ${email} <br> General Enquiry: ${queryGen}  <br> Support Request: ${querySup} <br>
Message: ${message} <br> Check Box: ${checkBox}`;

    
});

