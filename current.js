let countries = document.querySelector(".countrylist")
let local = window.location.href
let flew;
const fileData = fetch("./data.json")
.then((response)=>{
    return response.json()
   
})
.then((data=>{
    // console.log(data)
    countries.innerHTML = ""
   data.forEach(element => {
       display(element)
       
    // console.log(element.name)
   });

}))


function display (country){
    // console.log(country.name)
   const url = "http://127.0.0.1:5500/info.html?"
   const obj = {
    name: country.name
   }
   const searchParams = new URLSearchParams(obj)
    let query = searchParams.toString()
    local = url+ query
    countries.innerHTML += `<div class= eachdiv>f
    <a href=${local}>
                <img src=${country.flags.svg} alt=${country.name} >
                <h4>${country.name}</h4>
                <p><strong>${country.population}:</strong> figures</p>
                <p><strong>Region:</strong> ${country?.region}</p>
                <p><strong>capital:</strong> ${country?.capital} </p>
            </div>
            </a>
        </div>`
    
}


