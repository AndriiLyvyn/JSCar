const accessoriesCar = [
  {
    id: 1253,
    name: "Pokrowiec na samochód",
    price: 200,
  },
  {
    id: 2253,
    name: "Apteczka",
    price: 90,
  },
  {
    id: 3247,
    name: "Gaśnica",
    price: 100,
  },
  {
    id: 5890,
    name: "Zestaw zimowych opon",
    price: 400,
  },
];

const $buyReturn = document.getElementById("buyBeturn");
const $backToHomePage = document.getElementById("backToHomePage");

const $carNameForm = document.getElementById("carNameForm");
const $carName = document.getElementById("carName");
const $carPriceForm = document.getElementById("carPriceForm");
const $imageCar = document.getElementById("imageCar");
const $carPrice = document.getElementById("carPrice");
const $listOrderAccsesori = document.getElementById("listOrderAccsesori");
const $accesotryCart = document.getElementById("accesotryCart");

const $endPaga = document.getElementById("endPaga");
const $containerForm = document.getElementById("containerForm");

const $cash = document.getElementById("cash");
const $leasing = document.getElementById("leasing");
const $radio = document.getElementsByName("payment");
const $nameImput = document.getElementById("nameImput");
const $place = document.getElementById("place");
const $date = document.getElementById("date");
const $buyBtn = document.getElementById("buyBtn");
const $errorDate = document.getElementById("errorDate");
const $methodPay = document.getElementById("methodPay");
const $carDataDelivere = document.getElementById("carDataDelivere");
const $endPage = document.getElementById("endPage");
const $backPage = document.getElementById("backPage");


const olListAccsesoriasCar = document.getElementById("ol");
const listAddAccsesoriesCar = document.getElementById("listAdd");

function getListOfAccesoru() {
  const items = listAddAccsesoriesCar.getElementsByTagName("li");
  const itemsArray = [];
  for (let item of items) {
    console.log(itemsArray);
    itemsArray.push(item.textContent);
  }
  return itemsArray;
}

function createListFromItems(itemsArray) {
  const end = document.createElement("h2");
  end.textContent = "Aksesoria do zamówienia:";
  if (itemsArray.length === 0) {
    end.textContent = "";
  } else {
    $accesotryCart.prepend(end);
    for (let itemText of itemsArray) {
      console.log(itemText);
      console.log("Elementy listy " + $listOrderAccsesori.children.length);
      const newListItem = document.createElement("li");
      newListItem.textContent = itemText;
      $listOrderAccsesori.appendChild(newListItem);
    }
  }
}

getDateOfCatinLocStor();
function getDateOfCatinLocStor() {
  const modelCar = localStorage.getItem("nameCar");
  $carNameForm.innerText = modelCar;
  $carName.innerText = modelCar;
  const priceCar = localStorage.getItem("priceCar");
  $carPrice.innerText = `${priceCar} PLN`;
  $carPriceForm.innerText = `${parseFloat(priceCar)} PLN`;
  const imageCar = localStorage.getItem("photoCar");
  $imageCar.src = imageCar;
  $imageCar.alt = modelCar;
}

formCart();
function formCart() {
  $buyReturn.addEventListener("click", () => {
    window.location.href = "homePage.html";
    localStorage.clear();
  });
}
createData();
$endPage.style.display = "none";

//Pzycisk zakupu
$buyBtn.addEventListener("click", () => {
  validateForm();
  const date = getListOfAccesoru();
  createListFromItems(date);
});

accessoriesCar.forEach((element) => {
  const listAccessory = document.createElement("li");
  const listAccessotyP = document.createElement("p");
  listAccessotyP.textContent = `${element.name}: ${element.price} PLN`;
  listAccessory.appendChild(listAccessotyP)
  olListAccsesoriasCar.appendChild(listAccessory);
});

const storedCarPrice = parseFloat(localStorage.getItem("priceCar")) || 0;
let suma = storedCarPrice;

function updatePriceDisplay(totalPrice) {
  $carPriceForm.innerText = `${totalPrice} PLN`;
  $carPrice.innerText = `${totalPrice} PLN`;
}

olListAccsesoriasCar.addEventListener("click", (e) => {
  const targetText = e.target.textContent.trim();
  const price = parseFloat(targetText.split(": ")[1].split(" PLN")[0]);
  const itemName = targetText.split(":")[0];

  const existingItem = [...listAdd.children].find((item) =>
    item.textContent.includes(itemName)
  );

  if (existingItem) {
    const quantity = parseInt(existingItem.textContent.split(" ilość ")[1]) + 1;
    existingItem.dataset.price = price;
    existingItem.innerText = `${itemName}: ${price} PLN ilość ${quantity} Suma: ${
      price * quantity
    } PLN`;
    suma += price;
  } else {
    const nList = document.createElement("li");
    nList.classList.add("task");
    nList.dataset.price = price;
    nList.innerText = `${itemName}: ${price} PLN ilość 1 Suma: ${price} PLN`;
    listAdd.appendChild(nList);
    suma += price;
  }

  updatePriceDisplay(suma);
});

listAddAccsesoriesCar.addEventListener("click", (e) => {
  const targetText = e.target.textContent.trim();
  const price = parseFloat(e.target.dataset.price);
  const quantity = parseInt(targetText.split(" ilość ")[1]);

  if (quantity > 1) {
    e.target.innerText = `${targetText.split(" ilość ")[0]} ilość ${
      quantity - 1
    } Suma: ${price * (quantity - 1)} PLN`;
    suma -= price; 
  } else {
    e.target.remove();
    suma -= price;
  }

  updatePriceDisplay(suma);
});

function getRadioBtn() {
  const notPay = document.createElement("p");
  notPay.classList.add("errorPay");
  $errorDate.innerHTML = "";
  for (let i = 0; i < $radio.length; i++) {
    if ($radio[i].checked) {
      console.log(`Wartość przycisku to ${$radio[i].value} `);
      $methodPay.innerText = $radio[i].value;
      notPay.innerHTML = "";
      return;
    }
  }
  notPay.innerHTML = "Nie wybrano metody płatności";
  $errorDate.appendChild(notPay);
  console.log("Nie wybrano metody płatności ");
}



function saveData() {
 
  const firstName = document.getElementById('nameImput').value;
  const adress = document.getElementById('place').value;
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('adress',adress );
}
window.addEventListener('load', function() {
  
  const storedFirstName = localStorage.getItem('firstName') || '';
  const storedAdress = localStorage.getItem('adress') || '';
  document.getElementById('nameImput').value = storedFirstName;
  document.getElementById('place').value = storedAdress;
  saveData();
});

document.getElementById('nameImput').addEventListener('input', saveData);
document.getElementById('place').addEventListener('input', saveData);

function getName() {
  const name = $nameImput.value.trim();

  const nameData = document.createElement("p");

  if (name === "") {
    nameData.innerText = "Nie podaleś imenia oraz nazwiska";
    $errorDate.appendChild(nameData);
  } else if (name.includes(" ")) {
    $errorDate.appendChild(nameData);
  } else {
    nameData.innerText = "W imieniu oraz nazwisku brakuję spacji";

    $errorDate.appendChild(nameData);
  }

  const place = $place.value;
  if (place === "") {
    const placeData = document.createElement("p");
    placeData.innerText = "Pole adres jest puste";
    $errorDate.appendChild(placeData);
  }
  return name;
}

showDate();
function showDate() {
  $date.addEventListener("change", () => {
    console.log(`Data dostawy to:${$date.value} roku`);
    $carDataDelivere.innerText = `${$date.value} roku`;
  });
}
function showDayDeliver() {
  const dateError = document.createElement("p");
  if ($date.value) {
    $carDataDelivere.innerText = `${$date.value} roku`;
    return $date.value;
  } else if ($date.value === "-- / -- / --") {
    dateError.innerText = "Proszę o podanie daty dostawy tutaj";
    $errorDate.appendChild(dateError);
  }

  if (!$date.value) {
    dateError.innerText = "Proszę o podanie daty dostawy ";
    $errorDate.appendChild(dateError);
  }
}

function createData() {
  const emptyOption = document.createElement("option");
  emptyOption.text = "-- / -- / --";
  emptyOption.value = "";
  $date.add(emptyOption);
  const today = new Date();

  for (let i = 0; i <= 14; i++) {
    const endDate = new Date(today);

    endDate.setDate(endDate.getDate() + i + 1);
    const yyyy = endDate.getFullYear();
    const mm = String(endDate.getMonth() + 1).padStart(2, "0");
    const dd = String(endDate.getDate()).padStart(2, "0");
    const option = document.createElement("option");
    option.text = `${dd} / ${mm} / ${yyyy}`;
    option.value = `${dd}.${mm}.${yyyy}`;

    $date.add(option);
  }
}

function validateForm() {
  const paymentMethod = getRadioBtn();
  const name = getName();
  const place = $place.value;
  const selectedDate = showDayDeliver();
  console.log(paymentMethod);
  console.log(name);
  console.log(place);
  console.log(`Data dostawy ${selectedDate}`);

  if (
    !paymentMethod === null ||
    name === "" ||
    place === "" ||
    selectedDate === undefined
  ) {
    return;
  }

  if ($containerForm.style.display === "block") {
    $containerForm.style.display = "none";
    $endPage.style.display = "block";
  }

  $containerForm.style.display = "none";

  $endPage.style.display = "block";
  
}

$backToHomePage.addEventListener("click", () => {
  window.location.href = "homePage.html";
  localStorage.clear();
});
