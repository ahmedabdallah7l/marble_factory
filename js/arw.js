var openLightBox = document.querySelector("#openLight");
var lightbox = document.querySelector(".lightBoxContainer");
var closeIcon = document.querySelector(".closeIcon");
var item = document.querySelector("#addItem");
var itemCode = document.querySelector("#ItemCode");
var itemType = document.querySelector("#types");
var date = document.querySelector("#itemDate");
var addBtn = document.querySelector("#addItem");
var codeError = document.querySelector(".codeError");
var dateError = document.querySelector(".dateError");
var searchIcon = document.querySelector("#searchIcon");
var searchInput = document.querySelector("#search");
var cartona = "";
var products = [];
console.log(date);

openLightBox.addEventListener("click", () => {
  lightbox.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  lightbox.style.display = "none";
});

if (localStorage.getItem("arrivingList") !== null) {
  products = JSON.parse(localStorage.getItem("arrivingList"));
  display(products);
}

function validateItemCode() {
  const regex = /^[0-9]{6}$/;
  return regex.test(itemCode.value);
}

function validateDate() {
  const regex = /^(?!\s*$).+/;
  return regex.test(date.value);
}

function addItem() {
  let product = {
    itemCode: itemCode.value,
    itemType: itemType.value,
    itemDate: date.value,
    status: "Pending",
    nextPhase: "Not",
  };
  products.push(product);
  localStorage.setItem("arrivingList", JSON.stringify(products));
  console.log(products);
}

addBtn.addEventListener("click", () => {
  codeError.classList.toggle("d-none", validateItemCode());
  dateError.classList.toggle("d-none", validateDate());
  
  if (validateDate() && validateItemCode()) {
    addItem();
    display(products);
    clearData();
  }
});

function display(products) {
  var cartona = "";
  for (let i = 0; i < products.length; i++) {
    cartona += `
      <div class="item d-flex justify-content-between text-center align-items-center px-4 py-3 mb-2 bg-secondary bg-opacity-25 rounded-5">                   
        <div class="col-lg-3">
          <p id="Code">${products[i].itemCode}</p>
        </div>
        <div class="col-lg-3">
          <p id="type">${products[i].itemType}</p>
        </div>
        <div class="col-lg-3">
          <p id="date">${products[i].itemDate}</p>
        </div>
        <div class="col-lg-3">
          <p id="status" class="text-danger">${products[i].status}</p>
        </div>
      </div>`;
  }
  document.getElementById("item").innerHTML = cartona;
}

function clearData() {
  itemCode.value = "";
  itemDate.value = "";
}

searchIcon.addEventListener("click", () => {
  searchInput.classList.remove("d-none");
});

searchInput.addEventListener("keyup", search);

function search() {
  var searchKey = document.querySelector("#search").value;
  var searchList = [];
  
  for (var i = 0; i < products.length; i++) {
    if (products[i].itemCode.includes(searchKey) || products[i].itemType.toLowerCase().includes(searchKey.toLowerCase()) || (products[i].status.toLowerCase().includes(searchKey.toLowerCase()))) {
      searchList.push(products[i]);
    }
  }
  
  display(searchList);
}

// localStorage.removeItem("arrivingList")
