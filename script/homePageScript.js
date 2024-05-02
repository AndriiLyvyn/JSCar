const $filterForm = document.getElementById("filterForm");

//
const carCart = document.getElementById("carCart");
const carImage = document.getElementById("carImage");
const carName = document.getElementById("carName");
const carPrice = document.getElementById("carPrice");
const carAge = document.getElementById("carAge");
const carMileage = document.getElementById("carMileage");
const carPower = document.getElementById("carPower");
const btnBuyCar = document.getElementById("btnBuyCar");
const listCars = document.getElementById("listCars");

const $displayCarts = document.getElementById("displayCarts");

function fetchJSONdate() {
  return new Promise((resolve, reject) => {
    fetch("cars.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Wystąpił problem z pobraniem pliku JSON");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
craftCart();

function craftCart() {
  fetchJSONdate().then((date) => {
    console.log("Dane JSON:", date);
    displayCart(date);
  });
}

function displayCart(data) {
  data.forEach((element) => {
    const carCart = document.createElement("div");
    carCart.classList.add("carCart");

    const image = document.createElement("img");
    image.src = element.image;
    image.alt = element.name;
    image.classList.add("carImage");

    const carInfo = document.createElement("section");
    carInfo.classList.add("carInfo");
    const h2 = document.createElement("h2");
    h2.innerHTML = `Marka: <span id="carName_${element.id}">${element.name}</span>`;

    const price = document.createElement("p");
    price.innerHTML = `Cena: <span id="carPrice_${element.id}">${element.price} PLN</span>`;

    const age = document.createElement("p");
    age.innerHTML = `Wiek auta: <span id="carAge_${element.id}">${element.age} lat</span>`;

    const mileage = document.createElement("p");
    mileage.innerHTML = `Przebieg auta: <span id="carMileage_${element.id}">${element.carMileage} </span>`;

    const power = document.createElement("p");
    power.innerHTML = `Moc silnika: <span id="carPower_${element.id}">${element.power} </span>`;

    const buyButton = document.createElement("button");
    buyButton.classList.add("btnBuyCar");
    buyButton.innerText = "Kup";

    buyButton.addEventListener("click", () => {
      console.log(element.name);
      window.location.href = "formPage.html";
      localStorage.setItem("priceCar", element.price);
      localStorage.setItem("nameCar", element.name);
      localStorage.setItem("photoCar", element.image);
    });

    carInfo.appendChild(h2);
    carInfo.appendChild(price);
    carInfo.appendChild(age);
    carInfo.appendChild(mileage);
    carInfo.appendChild(power);

    carCart.appendChild(image);

    carCart.appendChild(carInfo);
    carCart.appendChild(buyButton);

    $displayCarts.appendChild(carCart);
  });
}
