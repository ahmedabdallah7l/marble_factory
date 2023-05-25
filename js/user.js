var x=JSON.parse(localStorage.getItem("list"))


function display() {
  var cartona = "";
  for (let i = 1; i < x.length; i++) {
    cartona += `
      <tr class="alert" role="alert">
        <td>
          <p id="counter">${i}</p>
        </td>
        <td class="d-flex align-items-center justify-content-center">
          <div class="img">
            <img src="../images/PngItem_1503945.png" class="me-2" alt="">
          </div>
          <div class="pl-3 email">
            <span>${x[i].email}</span>
          </div>
        </td>
        <td>${x[i].userName}</td>
        <td class="role"><span class="active">${x[i].role}</span></td>
        <td>
          <span aria-hidden="true" title="delete" id="delete"><i class="fa-solid fa-rectangle-xmark text-danger fs-4"></i></span>
        </td>
      </tr>`;
  }
  document.getElementById("tableData").innerHTML = cartona;

  var deleteIcons = document.querySelectorAll("#delete");
  deleteIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => 
    {
      deleteProduct(index + 1);
    });
  });
}

function deleteProduct(index) {
  x.splice(index, 1);
  display();
  localStorage.setItem("list", JSON.stringify(x))
}

display();
