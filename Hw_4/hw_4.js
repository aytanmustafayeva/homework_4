const generalcard = document.getElementById("generalcard");

fetchCountries();

async function fetchCountries() {
  const data = await fetch("https://restcountries.com/v2/all").then((res) =>
    res.json()
  );
  let countriesHTML = "";
  for (let country of data) {
    countriesHTML += getCountryHTML(country);
  }
  //   console.log(countriesHTML);
  generalcard.insertAdjacentHTML("afterbegin", countriesHTML);
}

function getCountryHTML(country) {
  const { flag, name, population, region, capital } = country;
  return `
<div class="cards">
    <img src="${flag}" alt="#">
    <div class="title-ul">
      <h5 class="title">${name}</h5>
      <ul class="ul">
       <li><strong>Population:</strong> ${population}</li>
       <li class="region"><strong>Region:</strong> ${region}</li>
       <li><strong>Capital:</strong> ${capital}</li>
      </ul>
    </div>
  </div>
`;
}

const sec = document.querySelector(".sec");
const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  sec.classList.toggle("dark");
};

const filter = document.getElementById("filter");
filter.onkeyup = function searchCountries() {
  const input = document.getElementById("filter").value.toUpperCase();
  const generalcard = document.getElementById("generalcard");
  console.log(generalcard);

  const cards = generalcard.getElementsByClassName("cards");
  console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector(".title-ul h5.title");
    console.log(title);

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
};

function getSelectValue() {
  var selectedValue = document.getElementById("select").value;
  const generalcard = document.getElementById("generalcard");
  console.log(generalcard);

  const cards = generalcard.getElementsByClassName("cards");
  console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const region = cards[i].querySelector(".title-ul li.region");
    console.log(region);

    if (region.innerText.indexOf(selectedValue) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
  // console.log(selectedValue);
}
