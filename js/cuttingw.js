var products = JSON.parse(localStorage.getItem("arrivingList")) || [];
var cuttingList = JSON.parse(localStorage.getItem("cuttingList")) || [];

console.log(products);

for (let i = 0; i < products.length; i++) {
  if (products[i].status === "Approve" && products[i].nextPhase === "Not") {
    let existingItem = cuttingList.find(item => item.itemCode === products[i].itemCode);
    if (existingItem) {
      existingItem.status = "pending";
    } else {
      let newItem = {
        itemCode: products[i].itemCode,
        itemType: products[i].itemType,
        itemDate: products[i].itemDate,
        status: "pending",
        nextPhase: "Not"
      };
      cuttingList.push(newItem);
    }
    products[i].nextPhase = "done";
  }
}

localStorage.setItem("arrivingList", JSON.stringify(products));
localStorage.setItem("cuttingList", JSON.stringify(cuttingList));

display(cuttingList);

var searchIcon = document.querySelector("#searchIcon");
var searchInput = document.querySelector("#search");

function display(cuttingList) {
  var cartona = "";
  for (let i = 0; i < cuttingList.length; i++) {
    cartona += `
      <div class="item d-flex justify-content-between text-center align-items-center px-4 py-3 mb-2 bg-secondary bg-opacity-25 rounded-5">                   
        <div class="col-lg-3">
          <p id="Code">${cuttingList[i].itemCode}</p>
        </div>
        <div class="col-lg-3">
          <p id="type">${cuttingList[i].itemType}</p>
        </div>
        <div class="col-lg-3">
          <p id="date">${cuttingList[i].itemDate}</p>
        </div>
        <div class="col-lg-3 d-flex justify-content-between align-items-center">
          <p id="status" class="text-danger">${cuttingList[i].status}</p>
          <button class="btn bg-success text-white fs-6 p-2 rounded-5 operation-btn">Start operation</button>
        </div>
      </div>`;
  }
  document.getElementById("item").innerHTML = cartona;

  var operationBtns = document.querySelectorAll(".operation-btn");
  operationBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      cuttingList[index].status = "in progress";
      localStorage.setItem("cuttingList", JSON.stringify(cuttingList));
      display(cuttingList);
    });
  });
}

searchIcon.addEventListener("click", () => {
  searchInput.classList.remove("d-none");
});

searchInput.addEventListener("keyup", search);

function search() {
  var searchKey = searchInput.value.toLowerCase();
  var searchList = cuttingList.filter(item =>
    item.itemCode.includes(searchKey) ||
    item.itemType.toLowerCase().includes(searchKey) ||
    item.status.toLowerCase().includes(searchKey)
  );
  display(searchList);
}
