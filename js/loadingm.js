const openLightBox = document.querySelector("#openLight");
const lightbox = document.querySelector(".lightBoxContainer");
const closeIcon = document.querySelector(".closeIcon");
const itemCode = document.querySelector("#ItemCode");
let products = JSON.parse(localStorage.getItem("loadingList"));
const searchIcon = document.querySelector("#searchIcon");
const codeError = document.querySelector(".codeError");
const searchInput = document.querySelector("#search");
const addBtn = document.querySelector("#addItem");
let index;

console.log(products);

function display(products) {
  let cartona = "";
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
        <div class="col-lg-3 d-flex justify-content-between align-items-center">
          <p id="status" class="text-danger">${products[i].status}</p>
          <button class="btn text-white fs-6 p-2 rounded-5 add" id="Amount-btn">Add Amount</button>
        </div>
      </div>`;
  }
  document.getElementById("item").innerHTML = cartona;
  const addAmountBtns = document.querySelectorAll("#Amount-btn");
  console.log(addAmountBtns);
  addAmountBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      lightbox.style.display = "flex";
      indexx = index;
    });
  });
}

function validateItemCode() {
  const regex = /^[0-9]$/;
  return regex.test(itemCode.value);
}

closeIcon.addEventListener("click", () => {
  lightbox.style.display = "none";
});

addBtn.addEventListener("click", () => {
  if (!validateItemCode()) {
    codeError.classList.remove("d-none");
  } else {
    codeError.classList.add("d-none");
  }
  if (validateItemCode()) {
    products[indexx].production = itemCode.value;
    products[indexx].status = "Approve";
    localStorage.setItem("loadingList", JSON.stringify(products));
    display(products);
  }
});

searchIcon.addEventListener("click", () => {
  searchInput.classList.remove("d-none");
});

searchInput.addEventListener("keyup", search);

function search() {
  const searchKey = document.querySelector("#search").value;
  const searchList = products.filter((product) => {
    const { itemCode, itemType, status } = product;
    return (
      itemCode.includes(searchKey) ||
      itemType.toLowerCase().includes(searchKey.toLowerCase()) ||
      status.toLowerCase().includes(searchKey.toLowerCase())
    );
  });
  display(searchList);
}

display(products);
