const container = document.querySelector('.country');
let crac
fetch('./data.json') // Replace 'data.json' with your actual file path
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-div');
      // productDiv.classList.add(`${country.name}`);


      const image = new Image();
      image.src = country.flag; // Set the image source
     
      productDiv.innerHTML = `
      <img class ="${country.name}" src="" alt="${country.name}">
        <h4>${country.name}</h4>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>capital:  ${country.capital}</p>
      `;

      container.appendChild(productDiv);
 const placeholderImg = productDiv.querySelector('img');
          placeholderImg.src = image.src; // Replace plac
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




