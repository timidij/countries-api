console.log("connected")

var countries = []
var dropdownMenu = document.querySelector("dropdown-menu")
const region = ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];
const sel = document.getElementById("sel")
let item = document.querySelector(".items")
// const sel = document.querySelector("")
// region.map((reg)=>{
//     let flew = document.createElement("option")
//     flew.innerText = reg;
   
//     sel.appendChild(flew)
// })
// item.textContent+="hekkp"
let countryName = null
function displayItems (country){
    item.innerHTML = " "
   country.forEach(country=>{
     countryName = encodeURIComponent(country.name);
     let htmlContent = `
    <div class="few">
    <a href="details.html?country=${countryName}" >
    <img src=${country.flag}>
    <div class="fewdetails">
    <h3>${country.name}</h3>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>capital: ${country.capital}</p>
</div>
    </a>
    </div>
    ` 
    item.innerHTML += htmlContent
   })  
    
}


fetch("./data.json")
.then(response=>response.json())
.then(data =>{
    countries = data
    displayItems(countries)
})


//filter by Region
// function filterRegion(region){
// const filteredCountries = countries.filter(country => country.region === region)
// displayItems(filteredCountries)
// }


region.forEach(ray=>{
    const rive = document.createElement("option")
    rive.innerText = ray
    rive.value = ray
    sel.appendChild(rive)
    // console.log(ray)
})

sel.addEventListener("change", function(){
    let op= sel.value;
    // filterRegion(op)
    console.log(op)
    const filteredCountries = countries.filter(countr => countr.region === op)
displayItems(filteredCountries)
})



// Event listener for country link clicks
item.addEventListener("click", function(event) {
    if (event.target.classList.contains("country-link")) {
      const clickedCountryName = event.target.dataset.countryName;
      window.location.href = `details.html?country=${clickedCountryName}`; // Load new page with encoded name
    }
  });