var products = JSON.parse(localStorage.getItem("arrivingList"));
var searchIcon = document.querySelector("#searchIcon");
var searchInput = document.querySelector("#search");

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
        <div class="col-lg-3 d-flex justify-content-between align-items-center">
          <p id="status" class="text-danger">${products[i].status}</p>
          <button class="btn bg-success text-white fs-6  p-2 rounded-5" id="Approve">Approve</button>
          <button class="btn bg-danger p-2 fs-6 text-white rounded-5" id="deny" >Deny</button>
        </div>
      </div>`;
  }
  document.getElementById("item").innerHTML = cartona;

  var approveBtn = document.querySelectorAll("#Approve");
  var denyBtn = document.querySelectorAll("#deny");

  approveBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      products[index].status = "Approve";
      localStorage.setItem("arrivingList", JSON.stringify(products));
      display(products);
    });
  });

  denyBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      products[index].status = "Deny";
      localStorage.setItem("arrivingList", JSON.stringify(products));
      display(products);
    });
  });
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

display(products);
