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
    countryContainer.innerHTML = "";

    let countryList = countries;

  //  let countryFirsTen = countryList.slice(0,10)
    let countryFirsTen = countryList
    
   countryFirsTen.map((country) => {
     //  console.log(country);
     const { name, flags, cca2 } = country;

     const singleCountry = document.createElement("div");
     singleCountry.classList.add(
       "col-12",
       "col-sm-6",
       "col-md-4",
       "col-xl-3",
       "p-2"
     );

     const info = `
         <div data-bs-toggle="modal" data-bs-target="#exampleModal"
          onclick="loadCountryDetail('${cca2}')" title="Click to see details" class="card p-2 bg-dark">
            <a class="text-decoration-none text-white" href="#">
            <img src="${flags.png}" style="height:130px" class="mx-auto w-100 ps-2 pe-2" alt="" />
            <div class="pt-3">
                <h6 style="letter-spacing:2px;" class="text-center ">${name.common} </h6>
            </div>
            </a>
           
         </div>
    `;
     singleCountry.innerHTML = info;

     return countryContainer.appendChild(singleCountry);
   });
}



const loadCountryDetail = (code) => {
    const url = "https://restcountries.com/v3.1/alpha/"+code;
    fetch(url)
    .then(res => res.json())
    .then(data => {
       displayCountryDetails(data)
    })
    .catch(err => {
        console.log(err);
    })
}



const displayCountryDetails = (data) => {
  console.log(data[0]);
  const { name, flags } = data[0];
  const modalConent = document.getElementById("modal_content");
  modalConent.innerHTML = "";
  const modalInfo = document.createElement("div");

  const info = `
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row bg-dark text-white pt-2 pb-2">
            <div class="col-6"> <img src="${flags?.png}" alt="${name?.common}" class="img-fluid"  /> </div>
            <div class="col-6"> <h6>Language:  </h6> </div>
        </div>
        <h1 > ${name?.common} </h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
   `;

  modalInfo.innerHTML = info;

  modalConent.appendChild(modalInfo);
};




loadData()