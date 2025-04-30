let countryData = [];

const region = ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];
const dropDown = document.querySelector(".dropdown")
const listOfCountry = document.querySelector(".countrylist")
const search = document.getElementById('searchWords')
let dataOfcountry = [];

const displayingCountries =(country)=>{
    listOfCountry.innerHTML = ''
    country.forEach(country => {
        const nameOfCountry = encodeURIComponent(country.name);
        const htmlContent = `
        <div>
        <a href ="detail.html?country=${nameOfCountry}" class ="linktoCountry">
        
        <div class = "counter">
        <img src = ${country.flag} class = "images">
        <div class = "crave">
        <h5>population :${country.population}</h5>
        <h5>Region: ${country.region}</h5>
        <h5>capital: ${country.capital}</h5>

        </div>
        
        
        </div>
        
        
        
        </a>
        
        </div> `

    listOfCountry.innerHTML += htmlContent;
    });
}


fetch('./data.json')
.then(response => response.json())
.then(data=>{
    dataOfcountry=data;
    displayingCountries(dataOfcountry)
})


//to add regions to the dropdown
region.forEach(region => {
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');
    linkItem.className = 'dropdown-item';
    linkItem.href = '#';
    linkItem.textContent = region;
    linkItem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));
        linkItem.classList.add('active');

        filterByRegion(region);
    });
    listItem.appendChild(linkItem);
    dropdownMenu.appendChild(listItem);
});


//for filtered region








