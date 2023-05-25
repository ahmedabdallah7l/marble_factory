var products = JSON.parse(localStorage.getItem("cuttingList"));
var searchIcon = document.querySelector("#searchIcon");
var searchInput = document.querySelector("#search");
console.log(products);

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
          <button class="btn bg-danger text-white fs-6 p-2 rounded-5" id="endOperation">End Operation</button>
        </div>
      </div>`;
  }
  document.getElementById("item").innerHTML = cartona;
  
  var endOperationBtn = document.querySelectorAll("#endOperation");
  console.log(endOperationBtn);
  
  endOperationBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (products[index].status !== "pending") {
        products[index].status = "Approve";
        localStorage.setItem("cuttingList", JSON.stringify(products));
        display(products);
      }
    });
  });
}

display(products);

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

// localStorage.removeItem("cuttingList")
