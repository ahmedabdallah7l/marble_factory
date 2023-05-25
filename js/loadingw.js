
var products = JSON.parse(localStorage.getItem("cuttingList")) || [];
var loadingList = JSON.parse(localStorage.getItem("loadingList")) || [];

console.log(products)
console.log(loadingList)
for (let i = 0; i < products.length; i++) {
  if (products[i].status === "Approve" && products[i].nextPhase === "Not") {
    let existingItem = loadingList.find(item => item.itemCode === products[i].itemCode);
    if (existingItem) {
        console.log("")
      existingItem.status = "pending";
    } else {
      let newItem = {
        itemCode: products[i].itemCode,
        itemType: products[i].itemType,
        itemDate: products[i].itemDate,
        status: "pending",
        production:""
      };
      loadingList.push(newItem);
    }
    products[i].nextPhase = "done";
  }
}

localStorage.setItem("loadingList", JSON.stringify(loadingList));
localStorage.setItem("cuttingList", JSON.stringify(products));


display(loadingList);

var searchIcon = document.querySelector("#searchIcon");
var searchInput = document.querySelector("#search");

function display(loadingList) {
  var cartona = "";
  for (let i = 0; i < loadingList.length; i++) {
    cartona += `
      <div class="item d-flex justify-content-between text-center align-items-center px-4 py-3 mb-2 bg-secondary bg-opacity-25 rounded-5">                   
        <div class="col-lg-3">
          <p id="Code">${loadingList[i].itemCode}</p>
        </div>
        <div class="col-lg-3">
          <p id="type">${loadingList[i].itemType}</p>
        </div>
        <div class="col-lg-3">
          <p id="date">${loadingList[i].itemDate}</p>
        </div>
        <div class="col-lg-3 d-flex justify-content-between align-items-center">
          <p id="status" class="text-danger">${loadingList[i].status}</p>
          <button class="btn bg-success text-white fs-6 p-2 rounded-5 loading">loading</button>
        </div>
      </div>`;
  }
  document.getElementById("item").innerHTML = cartona;

  var loadingBtns= document.querySelectorAll(".loading");
  loadingBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {

      loadingList[index].status = "in progress";
      localStorage.setItem("loadingList", JSON.stringify(loadingList));
      display(loadingList);
    });
  });
}

searchIcon.addEventListener("click", () => {
  searchInput.classList.remove("d-none");
});

searchInput.addEventListener("keyup", search);

function search() {
  var searchKey = searchInput.value.toLowerCase();
  var searchList = loadingList.filter(item =>
    item.itemCode.includes(searchKey) ||
    item.itemType.toLowerCase().includes(searchKey) ||
    item.status.toLowerCase().includes(searchKey)
  );
  display(searchList);
}


