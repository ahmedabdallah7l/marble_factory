let arrivingPhase=document.getElementById("arrivingPhase")
let cuttingPhase=document.querySelector("#cuttingPhase")
let loadingPhase=document.querySelector("#loadingPhase")
let arrivingList=JSON.parse(localStorage.getItem("arrivingList"))
let cuttingList=JSON.parse(localStorage.getItem("cuttingList"))
let loadingList=JSON.parse(localStorage.getItem("loadingList"))
console.log(arrivingList)
console.log(loadingList)
console.log(cuttingList)
let arrivingContainer=""
let cuttingContainer=""
let loadingContainer=""
let firstType=document.querySelector(".firstType")
let secondType=document.querySelector(".secondType")
let thirdType=document.querySelector(".thirdType")
let forthType=document.querySelector(".forthType")
let fifthType=document.querySelector(".fifthType")
let firstTypeContainer=""
let secondTypeContainer=""
let thirdTypeContainer=""
let forthTypeContainer=""
let fifthTypeContainer=""
let carrara=[]
let staruary=[]
let emperador=[]
let crema =[]
let calacatta=[]
let today = new Date().toISOString().slice(0, 10)


console.log(arrivingPhase)
for (let i = 0; i <arrivingList.length; i++) {
    arrivingContainer+=`  <div class="col-md-12  fs-6">
                      <div class="item cardOne text-white  d-flex flex-column justify-content-between border-0">
                        <div class="cardIcon"><i class="fa-solid fa-bolt fs-2"></i></div>
                        <p  class="fw-semibold"> Item code:<span class="fw-lighter">${arrivingList[i].itemCode}</span></p>
                        <p  class="fw-semibold">Item type: <span class="fw-lighter">${arrivingList[i].itemType}</span></p>
                        <p  class="fw-semibold">item status: <span class="fw-lighter">${arrivingList[i].status}</span></p>
                        <p  class="fw-semibold">Item date: <span class="fw-lighter">${arrivingList[i].itemDate}</span></p>
                      </div>
                    </div>`

    
}
arrivingPhase.innerHTML=arrivingContainer

for (let i = 0; i <cuttingList.length; i++) {
    cuttingContainer+=`  <div class="col-md-12  fs-6">
                      <div class="item cardTwo text-white  d-flex flex-column justify-content-between border-0">
                        <div class="cardIcon"><i class="fa-solid fa-bolt fs-2"></i></div>
                        <p  class="fw-semibold"> Item code:<span class="fw-lighter">${cuttingList[i].itemCode}</span></p>
                        <p  class="fw-semibold">Item type: <span class="fw-lighter">${cuttingList[i].itemType}</span></p>
                        <p  class="fw-semibold">item status: <span class="fw-lighter">${cuttingList[i].status}</span></p>
                        <p  class="fw-semibold">Item date: <span class="fw-lighter">${cuttingList[i].itemDate}</span></p>
                      </div>
                    </div>`

    
}
cuttingPhase.innerHTML=cuttingContainer

for (let i = 0; i <loadingList.length; i++) {
    loadingContainer+=`  <div class="col-md-12  fs-6">
                      <div class="item cardThree text-white  d-flex flex-column justify-content-between border-0">
                        <div class="cardIcon"><i class="fa-solid fa-bolt fs-2"></i></div>
                        <p  class="fw-semibold"> Item code:<span class="fw-lighter">${loadingList[i].itemCode}</span></p>
                        <p  class="fw-semibold">Item type: <span class="fw-lighter">${loadingList[i].itemType}</span></p>
                        <p  class="fw-semibold">item status: <span class="fw-lighter">${loadingList[i].status}</span></p>
                        <p  class="fw-semibold">Item date: <span class="fw-lighter">${loadingList[i].itemDate}</span></p>
                      </div>
                    </div>`

    
}
loadingPhase.innerHTML=loadingContainer

function recordProduction() {

    for (let i = 0; i <loadingList.length; i++) 
    {
         let type=loadingList[i].itemType
        if(type=="CARRARA MARBLE")
        {
            let quantity=loadingList[i].production
            let date=loadingList[i].itemDate
            let formattedDate = new Date(date).toLocaleDateString();
            carrara.push({ date: formattedDate, quantity: quantity });
        }
        else if(type=="Statuary MARBLE"){
            let quantity=loadingList[i].production
            let date=loadingList[i].itemDate
            let formattedDate = new Date(date).toLocaleDateString();
            staruary.push({ date: formattedDate, quantity: quantity });
        }
        else if(type=="Emperador MARBLE"){
            let quantity=loadingList[i].production
            date=loadingList[i].itemDate
            let formattedDate = new Date(date).toLocaleDateString();
            staruary.push({ date: formattedDate, quantity: quantity });
        }
        else if(type=="Crema Marfil MARBLE"){
            let quantity=loadingList[i].production
            let date=loadingList[i].itemDate
            let formattedDate = new Date(date).toLocaleDateString();
            crema.push({ date: formattedDate, quantity: quantity });
        }
        else if(type=="Calacatta MARBLE"){
            let quantity=loadingList[i].production
             let date=loadingList[i].itemDate
            let formattedDate = new Date(date).toLocaleDateString();
            calacatta.push({ date: formattedDate, quantity: quantity });
        }

    }

  }
  recordProduction()

  console.log(calacatta)
  console.log(carrara)
  console.log(crema)
  console.log(emperador)
  console.log(staruary)


  console.log(today)
  function displayDailyProduction(date,productionData) {
    const formattedDate = new Date(date).toLocaleDateString();
    const dailyProduction = productionData.reduce((sum, data) => {
   if (data.date === formattedDate) {

     return sum + data.quantity;
   }
   return sum;
 }, 0);
  return +dailyProduction
    
   }

   x=displayDailyProduction(today,crema)
   console.log(typeof(x))
   


   function displayWeeklyProduction(date,productionData) {
    const currentDate = new Date(date);
    const currentWeekStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - (currentDate.getDay() >= 6 ? (currentDate.getDay() - 6) : (1 + currentDate.getDay()))
    ).toLocaleDateString();
  
    const weeklyProduction = productionData.reduce((sum, data) => {
      if (new Date(data.date) >= new Date(currentWeekStart)) {
        return sum + data.quantity;
      }
      return sum;
    }, 0);
  
    return +weeklyProduction
  }

  function displayMonthlyProduction(date,productionData) {
    const currentDate = new Date(date);
    const currentMonthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).toLocaleDateString();
  
    const monthlyProduction = productionData.reduce((sum, data) => {
      if (new Date(data.date) >= new Date(currentMonthStart)) {
        return sum + data.quantity;
      }
      return sum;
    }, 0);
  
   return +monthlyProduction
  }

  function displayYearlyProduction(date,productionData) {
    const currentDate = new Date(date);
    const currentYearStart = new Date(currentDate.getFullYear(), 0, 1).toLocaleDateString();
  
    const yearlyProduction = productionData.reduce((sum, data) => {
      if (new Date(data.date) >= new Date(currentYearStart)) {
        return sum + data.quantity;
      }
      return sum;
    }, 0);
  
    return +yearlyProduction;
  }


  let firstProductionDaily= displayDailyProduction(today,carrara)
  let firstProductionWeekly=displayWeeklyProduction(today,carrara)
  let firstProductionMonthly=displayDailyProduction(today,carrara)
  let firstProductionYearly=displayYearlyProduction(today,carrara)
  let secondProductionDaily= displayDailyProduction(today,staruary)
  let secondProductionWeekly=displayWeeklyProduction(today,staruary)
  let secondProductionMonthly=displayDailyProduction(today,staruary)
  let secondProductionYearly=displayYearlyProduction(today,staruary)
  let thirdProductionDaily= displayDailyProduction(today,calacatta)
  let thirdProductionWeekly=displayWeeklyProduction(today,calacatta)
  let thirdProductionMonthly=displayDailyProduction(today,calacatta)
  let thirdProductionYearly=displayYearlyProduction(today,calacatta)
  let forthProductionDaily= displayDailyProduction(today,emperador)
  let forthProductionWeekly=displayWeeklyProduction(today,emperador)
  let forthProductionMonthly=displayDailyProduction(today,emperador)
  let forthProductionYearly=displayYearlyProduction(today,emperador)
  let fifthProductionDaily= displayDailyProduction(today,crema)
  let fifthProductionWeekly=displayWeeklyProduction(today,crema)
  let fifthProductionMonthly=displayDailyProduction(today,crema)
  let fifthProductionYearly=displayYearlyProduction(today,crema)
  
 
  console.log(displayMonthlyProduction(today,crema));

 console.log(displayYearlyProduction(today,crema))
    firstTypeContainer+=`
    <div class="daily">
        <h4 class="mb-3">Daily</h4>
        <p>${firstProductionDaily}</p>
    </div>
    <div class="weekly">
     <h4 class="mb-3">weekly</h4>
     <p>${firstProductionWeekly}</p>
    </div>
    <div class="monthly">
     <h4 class="mb-3">monthly</h4>
     <p>${firstProductionMonthly}</p>
    </div>
    <div class="yearly">
     <h4 class="mb-3">Yeraly</h4>
     <p>${firstProductionYearly}</p>
    </div>
 </div>
 `


firstType.innerHTML=firstTypeContainer
 


secondTypeContainer+=`
<div class="daily">
    <h4 class="mb-3">Daily</h4>
    <p>${secondProductionDaily}</p>
</div>
<div class="weekly">
 <h4 class="mb-3">weekly</h4>
 <p>${secondProductionWeekly}</p>
</div>
<div class="monthly">
 <h4 class="mb-3">monthly</h4>
 <p>${secondProductionMonthly}</p>
</div>
<div class="yearly">
 <h4 class="mb-3">Yeraly</h4>
 <p>${secondProductionYearly}</p>
</div>
</div>
`


secondType.innerHTML=secondTypeContainer


  

 

thirdTypeContainer+=`
<div class="daily">
    <h4 class="mb-3">Daily</h4>
    <p>${thirdProductionDaily}</p>
</div>
<div class="weekly">
 <h4 class="mb-3">weekly</h4>
 <p>${thirdProductionWeekly}</p>
</div>
<div class="monthly">
 <h4 class="mb-3">monthly</h4>
 <p>${thirdProductionMonthly}</p>
</div>
<div class="yearly">
 <h4 class="mb-3">Yearly</h4>
 <p>${thirdProductionYearly}</p>
</div>
</div>
`


thirdType.innerHTML=thirdTypeContainer



forthTypeContainer+=`
<div class="daily">
    <h4 class="mb-3">Daily</h4>
    <p>${forthProductionDaily}</p>
</div>
<div class="weekly">
 <h4 class="mb-3">weekly</h4>
 <p>${forthProductionWeekly}</p>
</div>
<div class="monthly">
 <h4 class="mb-3">monthly</h4>
 <p>${forthProductionMonthly}</p>
</div>
<div class="yearly">
 <h4 class="mb-3">Yearly</h4>
 <p>${forthProductionYearly}</p>
</div>
</div>
`


forthType.innerHTML=forthTypeContainer



fifthTypeContainer+=`
<div class="daily">
    <h4 class="mb-3">Daily</h4>
    <p>${fifthProductionDaily}</p>
</div>
<div class="weekly">
 <h4 class="mb-3">weekly</h4>
 <p>${fifthProductionWeekly}</p>
</div>
<div class="monthly">
 <h4 class="mb-3">monthly</h4>
 <p>${fifthProductionMonthly}</p>
</div>
<div class="yearly">
 <h4 class="mb-3">Yearly</h4>
 <p>${fifthProductionYearly}</p>
</div>
</div>
`


fifthType.innerHTML=fifthTypeContainer