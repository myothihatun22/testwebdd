// global 
let totalPrice = 0;
// for object items img and prices 
const itemImages = {
    1: "Sources PHOTO/erke-Jacket-1.jpg",
    2: "Sources PHOTO/erke-Jacket-2.jpg",
    3: "Sources PHOTO/ERKE-WOMENS-jacket.jpg",
    4: "Sources PHOTO/erke-jacket-4.jpg",
    5: "Sources PHOTO/erke-jacket-5.jpg",
    6: "Sources PHOTO/erke-black-shoe-2.jpg",
    7: "Sources PHOTO/erke-shoes-5.jpg",
    8: "Sources PHOTO/erke-black-shoe-3.jpg",
    9: "Sources PHOTO/erke-shoes-6.jpg",
    10: "Sources PHOTO/erke-shoe-b-1.jpg",
    11: "Sources PHOTO/erke-shoes-7.webp",
    12: "Sources PHOTO/images.jpg",
    13: "Sources PHOTO/erke-tshirts.jpg",
    14:"Sources PHOTO/erke-tshirts-2.jpg",
    15: "Sources PHOTO/erke-tshirts-3.jpg",
    16: "Sources PHOTO/erke-tshirts-4.jpg",
    17: "Sources PHOTO/erke-bagpack-3.jpg",
    18: "Sources PHOTO/erke-bagpack-4.jpg",
    19: "Sources PHOTO/erkebagpack-2.jpg",
    20: "Sources PHOTO/bagpack.jpg",
    21: "Sources PHOTO/ERKE-MENS-WINTER-KNITTED-CROPPED-PANT-.jpg",
    22: "Sources PHOTO/erke-pant-2.jpg",
    23: "Sources PHOTO/erke-pant-4.jpg",
    24: "Sources PHOTO/erke-pants-3.jpg",
  };
const itemprices = {
    1: "price : $23.4",
    2: "price : $20.9",
    3: "price : $29.9",
    4: "price : $24",
    5: "price : $23.4",
    6: "price : $10.9",
    7: "price : $29.9",
    8: "price : $24",
    9: "price : $23.4",
    10: "price : $10.9",
    11: "price : $29.9",
    12: "price : $24",
    13: "price : $23.4",
    14:"price : $10.9",
    15: "price : $29.9",
    16: "price : $24",
    17: "price : $23.4",
    18: "price : $10.9",
    19: "price : $29.9",
    20: "price : $24",
    21: "price : $23.4",
    22: "price : $10.9",
    23: "price : $29.9",
    24: "price : $24",
  };
const prices = {
    1: 23.4,
    2: 20.9,
    3:  29.9,
    4: 24,
    5:  23.4,
    6:  10.9,
    7: 29.9,
    8: 24,
    9: 23.4,
    10: 10.9,
    11: 29.9,
    12: 24,
    13: 23.4,
    14: 10.9,
    15: 29.9,
    16: 24,
    17: 23.4,
    18: 10.9,
    19: 29.9,
    20: 24,
    21: 23.4,
    22: 10.9,
    23: 29.9,
    24: 24,
  };
const sizes = {
    1:sm,
    2:m,
    3:lg,
    4:xl,
  };
 // for Detail item function ...          
function displayCard(item) {
  let displayAllImg = document.getElementById("modalImg");
  let prices = document.getElementById("prices");
  
 
  if (itemImages[item]) {
    displayAllImg.src = itemImages[item];
  } else {
    console.log("Image not found for the selected item!");
  }
  if (itemprices[item]) {
    prices.textContent = itemprices[item];
  } else {
    console.log("Image not found for the selected item!");
  }
}

// add to card function 
function addCarts() {
    let newImg = document.createElement('img');
    let displayCarts = document.getElementById("displayCarts");
    let rowdiv = document.createElement("div");
    let containerDiv = document.createElement("div");
    let newtext = document.createElement('span');
    let countDisplay = document.createElement('span');
    let allItemTotal = document.getElementById("allItemTotal");
    let countInput = document.getElementById("countInput").value;
    let errorCarts = document.getElementById("errorCarts");
    let PurchaseBtn = document.getElementById("PurchaseBtn");
    PurchaseBtn.classList.add("purchaseDFlex");
    displayCarts.appendChild(containerDiv);
    containerDiv.appendChild(rowdiv);
    containerDiv.appendChild(newImg);
    containerDiv.style.display = "inline-flex";
    containerDiv.style.flexDirection = "row-reverse";
    containerDiv.style.justifyContent = "space-between";
    rowdiv.appendChild(newtext);
    rowdiv.appendChild(countDisplay);
    newImg.width = '150';
    newtext.style.textAlign = 'end';
    countDisplay.style.textAlign = 'end';
    newtext.style.fontSize = '20px';
    rowdiv.style.display ='flex' ;
    rowdiv.style.flexDirection = 'column'; 
    rowdiv.style.justifyContent = 'center';
   
    if (itemImages[item]) {
     newImg.src = itemImages[item];
    } else{
    alert("Image not found for the selected item!");
    }
    if (itemprices[item]) {
    prices[item] = prices[item] * countInput;
    newtext.textContent = "price $ "+ prices[item] ;
    countDisplay.textContent = "Quality : " +countInput ;
    errorCarts.textContent = "";
    totalPrice += prices[item];
    }else{
    alert("error");
    }
    allItemTotal.textContent = "Total price: $" + totalPrice.toFixed(2);
}