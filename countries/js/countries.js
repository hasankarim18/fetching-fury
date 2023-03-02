console.log('countries.js');

const loadData = ()=> {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayCountries(data);
    })
    .catch((err)=> {
        console.log(err);
    })
}


const displayCountries = (countries)=> {
    const countryContainer = document.getElementById("country_container");    


   countries.map(country => {
    console.log(country);
        const {name, flags} = country
        const singleCountry = document.createElement("div");
        singleCountry.classList.add("col-12", "col-sm-6","col-md-4", "col-xl-3", "p-2");

        const info = `
         <div class="card p-2">
            <img src="${flags.png}" style="width:" class="mx-auto" alt="" />
            <div class="pt-3">
                <h4>${name.common} </div>
            </div>
         </div>
    `;
        singleCountry.innerHTML = info;

       return countryContainer.appendChild(singleCountry)
   })
}






loadData()