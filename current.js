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
    flew = data;
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
    countries.innerHTML += `<div class= eachdiv>
    <a href=${local}>
                <img src=${country.flags.svg} alt=${country.name} class= image >
                <h4>${country.name}</h4>
                <p><strong>${country.population}:</strong> figures</p>
                <p><strong>Region:</strong> ${country?.region}</p>
                <p><strong>capital:</strong> ${country?.capital} </p>
            </div>
            </a>
        </div>`
    
}

let dropdown = document.querySelectorAll("li")
function filterbyRegion (){
// dropdown.innerHTML = ""
dropdown.forEach((element)=>{
    element.addEventListener("click", ()=>{
        countries.innerHTML = ""
        console.log(element.textContent)
        let checkValue = element.textContent
        flew.forEach((data)=>{
            if (checkValue == data.region){
                console.log(data)
                display(data)
            }
        })
        


    })
})

}

const region = []
filterbyRegion()