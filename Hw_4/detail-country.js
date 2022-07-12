const sec = document.querySelector(".sec");
const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  sec.classList.toggle("dark");
};

const details = document.getElementById("details");

fetchCountries();

async function fetchCountries() {
  const data = await fetch("https://restcountries.com/v2/all?&limit=1").then(
    (res) => res.json()
  );
  let countriesHTML = "";
  for (let country of data) {
    countriesHTML += getCountryHTML(country);
  }
  //   console.log(countriesHTML);
  details.insertAdjacentHTML("afterbegin", countriesHTML);
}

function getCountryHTML(country) {
  const {
    flag,
    name,
    nativeName,
    population,
    subregion,
    region,
    capital,
    borders,
    currencies,
    languages,
  } = country;
  return `
  <div class="detail1">
  <img src="${flag}" alt="" />
  <div class="titleul">
    <div>
        <h5 class="title">${name}</h5>
    <ul class="firstul">
        <li>Native: ${nativeName}</li>
        <li>Name: ${name}</li>
        <li>Population: ${population}</li>
        <li>Sub Region: ${subregion}</li>
        <li>Region: ${region}</li>
        <li>Capital: ${capital}</li>
        <li>Border: ${borders}</li>
    </div>
        <div class="secondul">
            <label>Top level Domain:</label>
            <ul class="2ul">
            <li>Currencies: ${currencies}</li>
            <li>Languages: ${languages}</li>
            </ul>
        </div>
    </ul>
  </div>
</div>
`;
}
