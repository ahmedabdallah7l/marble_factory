var users = [];
var x = 42;
var firstName = document.querySelector("input[name='fName']");
var userName = document.querySelector("input[name='userName']");
var lastName = document.querySelector("input[name='lName']");
var email = document.querySelector("input[name='Email']");
var phone = document.querySelector("input[name='Phone']");
var password = document.querySelector("input[name='password']");
var role = document.getElementById("roles");
var rePassword = document.querySelector("input[name='re-password']");
var add = document.querySelector(".btn");
var firstNameError = document.querySelector("#firstName-error");
var lastNameError = document.querySelector("#lastName-error");
var emailError = document.querySelector("#email-error");
var userNameError = document.querySelector("#userNmae-error");
var passError = document.querySelector("#password-error");
var matchingPasswordError = document.querySelector("#matchingPassword");
var phoneError = document.querySelector("#phone-error");

users[0] = {
  firstName: "Bojack",
  lastName: "Horseman",
  userName: "Weird_Ward",
  email: "WowoManger1@gmail.com",
  phone: "011166778899",
  password: "Password#ward1",
  rePassword: "Password#ward1",
  role: "General Manger"
};

var form = document.querySelector("#myForm");

if (localStorage.getItem("list") != null) {
  users = JSON.parse(localStorage.getItem("list"));
} else {
  users[0] = {
    firstName: "Bojack",
    lastName: "Horseman",
    userName: "Weird_Ward",
    email: "WowoManger1@gmail.com",
    phone: "011166778899",
    password: "Password#ward1",
    rePassword: "Password#ward1",
    role: "General Manger"
  };
}

function addUsers() {
  var user = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    rePassword: rePassword.value,
    role: role.value
  };
  users.push(user);
  localStorage.setItem("list", JSON.stringify(users));
}

function validateFirstName() {
  var regex = /^[a-zA-Z ,.'-]+$/;
  return regex.test(firstName.value);
}

function validateLastName() {
  var regex = /^[a-zA-Z ,.'-]+$/;
  return regex.test(lastName.value);
}

function validateUserName() {
  var regex = /[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]/;
  var found = false;
  
  for (var i = 0; i < users.length; i++) {
    if (users[i].userName == userName.value) {
      found = true;
      break;
    }
  }
  
  return regex.test(userName.value) && !found;
}

function validateEmail() {
  var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  var found = false;
  
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email.value) {
      found = true;
      break;
    }
  }
  
  return regex.test(email.value) && !found;
}

function validatePassword() {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password.value);
}

function validateTelephone() {
  var regex = /^01[0125][0-9]{8}$/;
  var found = false;
  
  for (var i = 0; i < users.length; i++) {
    if (users[i].phone == phone.value) {
      found = true;
      break;
    }
  }
  
  return regex.test(phone.value) && !found;
}

function matchingPassword() {
  return password.value === rePassword.value;
}

add.addEventListener("click", function() {
  if (!validateTelephone()) {
    phoneError.classList.remove("d-none");
  } else {
    phoneError.classList.add("d-none");
  }
  
  if (!validatePassword()) {
    passError.classList.remove("d-none");
  } else {
    passError.classList.add("d-none");
  }
  
  if (!matchingPassword()) {
    matchingPasswordError.classList.remove("d-none");
  } else {
    matchingPasswordError.classList.add("d-none");
  }
  
  if (!validateFirstName()) {
    firstNameError.classList.remove("d-none");
  } else {
    firstNameError.classList.add("d-none");
  }
  
  if (!validateLastName()) {
    lastNameError.classList.remove("d-none");
  } else {
    lastNameError.classList.add("d-none");
  }
  
  if (!validateUserName()) {
    userNameError.classList.remove("d-none");
  } else {
    userNameError.classList.add("d-none");
  }
  
  if (!validateEmail()) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
  }
  
  if (validatePassword() && matchingPassword() && validateTelephone() && validateFirstName() && validateLastName() && validateEmail() && validateUserName()) {
    addUsers();
    console.log("done");
    form.submit();
  }
});
