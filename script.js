
const buttons = document.querySelectorAll('.order-btn');
function showPopup() {
  alert('This feature will be available soon');
}
buttons.forEach(button => {
  button.addEventListener('click', showPopup);
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('Subscription successful! Thank you for subscribing.');
    form.reset();
  });
});

const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {      
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || password === "" || address === "" || phone === "") {
    alert("All fields are required");
    return false;
  }

  if (phone.length !== 10) {
    alert("Phone number must be 10 digits");
    return false;
  }

  if (/\d/.test(name)) {
    alert("Name cannot contain digits");
    return false;
  }

  if (!/\d/.test(password) || password.length < 8) {
    alert("Password must contain at least one number and be at least 8 characters long");
    return false;
  }

  alert("Registerd Successfully");
  form.reset();
});
