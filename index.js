// 1. The live achievments count
// 2. Reset btn
// Localstorage
// Do dark mode propperly


productA = {
    emoji: "💰",
    revenue: 6000,
    commission: 600
},

productB = {
    emoji: "🔥",
    revenue: 600,
    commission: 60
}



const firstProduct = document.querySelector(".product-a")
const secondProduct = document.querySelector(".product-b")
const salesContainer = document.querySelector(".sales-container")
const statsRevenue = document.querySelector(".stats-revenue")
const statsComission = document.querySelector(".stats-comission")
const salesCount = document.querySelector(".sales-count")
const achievmentsContainer = document.querySelector(".achievments-container")
const achievmentsCount = document.querySelector(".achievments-count")
const resetStats = document.querySelector(".reset-stats")
const colorMode = document.querySelector(".color-mode")
const holder = document.querySelector(".holder")
const parentContainer = document.querySelector(".parent-container")


firstProduct.addEventListener("click", productASales)
secondProduct.addEventListener("click", productBSales)
resetStats.addEventListener("click", resetAnalytics)
colorMode.addEventListener("click", switchColor)

let totals = {
    totalSales: 0,
    totalAchievments: 0,
    totalRevenue: 0,
    totalComission: 0,
}

localStorage.setItem("key", JSON.stringify(totals))

if (localStorage.getItem("key")) {
    dataFromLocalStorage = JSON.parse(localStorage.getItem("key"))
    totals.totalSales = dataFromLocalStorage.totalSales
    totals.totalRevenue = dataFromLocalStorage.totalRevenue
    totals.totalComission = dataFromLocalStorage.totalComission
    
}


function productASales() {
        salesContainer.textContent += productA.emoji  
        totals.totalSales += 1
        salesCount.textContent = "Live sales:" + " " + totals.totalSales
        localStorage.setItem("key", JSON.stringify(totals))
        productAData()
}
function productBSales() {
        salesContainer.textContent += productB.emoji 
        totals.totalSales += 1
        salesCount.textContent = "Live sales:" + " " + totals.totalSales
        localStorage.setItem("key", JSON.stringify(totals))
        productBData()
}

function productAData() {
        totals.totalRevenue += productA.revenue
        statsRevenue.textContent = `$` + totals.totalRevenue
        totals.totalComission += productA.commission
        statsComission.textContent = `$` + totals.totalComission
        localStorage.setItem("key", JSON.stringify(totals))
        incrementAchievments()
} 

function productBData() { 
        totals.totalRevenue += productB.revenue
        statsRevenue.textContent = `$` + totals.totalRevenue
        totals.totalComission += productB.commission
        statsComission.textContent = `$` + totals.totalComission
        localStorage.setItem("key", JSON.stringify(totals))
        incrementAchievments()
}

function incrementAchievments() {
    let achievements = []

    if (totals.totalSales >= 1) {
        achievements.push("🛎️")
        achievmentsContainer.textContent = achievements[0]
    }   
    if (totals.totalRevenue >= 18000) {   
        achievements.push("💰")
        achievmentsContainer.textContent += achievements[1]
    } 
    if (totals.totalSales >= 15) {
        achievements.push("🏆")
        achievmentsContainer.textContent += achievements[2]
    }
    achievmentsCount.textContent = "Live achievements:" + " " + achievements.length
}

function resetAnalytics() {
    totals.totalSales = 0
    totals.totalAchievments = 0
    totals. totalRevenue = 0
    totals. totalComission = 0
    achievements = []
    salesContainer.textContent = ""
    salesCount.textContent = "Live sales:"
    statsRevenue.textContent = ""
    statsComission.textContent = ""
    achievmentsContainer.textContent = ""
    achievmentsCount.textContent = "Live achievements:"
}

let darkMode = false;

function switchColor() {
  if (!darkMode) {
    holder.style.backgroundColor = "#292929";
    holder.style.color = "white";
    parentContainer.style.backgroundColor = "#181c2c";
    firstProduct.style.backgroundColor = "#b3b3b3";
    secondProduct.style.backgroundColor = "#b3b3b3";
    salesContainer.style.backgroundColor = "#666666";
    achievmentsContainer.style.backgroundColor = "#666666";
    statsComission.style.backgroundColor = "#666666";
    statsRevenue.style.backgroundColor = "#666666";
    darkMode = true;
  } else {
    holder.style.backgroundColor = "";
    holder.style.color = "";
    parentContainer.style.backgroundColor = "";
    firstProduct.style.backgroundColor = "";
    secondProduct.style.backgroundColor = "";
    salesContainer.style.backgroundColor = "";
    achievmentsContainer.style.backgroundColor = "";
    statsComission.style.backgroundColor = "";
    statsRevenue.style.backgroundColor = "";
    darkMode = false;
  }
}
