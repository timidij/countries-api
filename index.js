console.log("file linked")

// fetch("./data.json").then((data)=>console.log(data.parse))
let dear= null
let coun = document.querySelector(".country")
// country.innerHTML= "Nigeria"
fetch('./data.json')
  .then(response => response.json())
  .then(obj => {
    obj.map((country,index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
        <p>${country.name}</p>
        <img src= {country.flags}/>
        `;
        console.log(country.flag)
        coun.appendChild(productDiv)
    });
  })

// console.log(dear)