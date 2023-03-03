


const loadPhones = async (search, dataLimit)=> {
    const url = " https://openapi.programming-hero.com/api/phones?search="+search;

     const phoneContainer = document.getElementById("phone_container");
     phoneContainer.innerHTML = "";
      const errorEl = document.getElementById("error");
      errorEl.innerHTML = "";
      showSpinner(true)
//  console.log(dataLimit);
  try { 
    const res = await fetch(url)
    const data = await res.json()
       if (data.status === true) {

         const errorEl = document.getElementById("error");
         errorEl.classList.add('d-none')
          showPhones(data,dataLimit);
          showSpinner(false)

    //    processSearch(data, 10)

       } else if (data.status === false) {
        // console.log(data);
          showAll(false);
          showSpinner(false);
          noDataFound(data);
       }  
  

  } catch (error) {
     showSpinner(false);
   showErrorMessage(error)
  } 
}

// show phones
const showPhones = (data, dataLimit)=> {
    const phoneContainer = document.getElementById("phone_container");
    // phoneContainer.innerHTML = ""

    let phones = data.data

   // console.log(phones.length);
    console.log('length::: ',phones.length);
     console.log(dataLimit);
    if( dataLimit && phones.length > 10 ){
      phones = phones.slice(0 ,10)
        showAll(true);
    }else {
      showAll(false)
      phones = phones
    }
    
    phones.forEach(phone => {
      //  console.log(phone);
        const { phone_name,brand, image, slug} = phone;
      //
      //console.log(phoneContainer);
      const phoneInfo = document.createElement('div')
      phoneInfo.className = "col-12 col-sm-6 col-md-4 col-xl-3 p-2";
      const info = `
              <div onclick="loadPhoneDetails('${slug}')"
               data-bs-toggle="modal" data-bs-target="#phoneModal" title="Click to see details" class="card bg-dark text-wihte p-2 cursor-pointer">
                <img src="${image}" alt="${phone_name}" class="w-50 mx-auto">
                <div>
                  <div class=" text-center card-title mt-2 text-white"> ${phone_name} </div>
                </div>
              </div>
      `;
      phoneInfo.innerHTML = info;
   ///   console.log(phoneInfo);
      phoneContainer.appendChild(phoneInfo)
    });
}

/*********************
 * Show phone detail using modal * 
 */

const loadPhoneDetails = (slug)=> {
    console.log(slug);
}

const showPhoneDetails = (data)=>{

}


/*********************
 * Show phone detail using modal * 
 */

/******************************************Search functionality */
// process search 

const processSearch = (dataLimit)=> {
 const searchField = document.getElementById("searchText");
 const searchText = searchField.value;
 loadPhones(searchText, dataLimit);

}

const searchPhone = ()=> {
 processSearch(10)
   
}

 document.getElementById("searchText").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchPhone()
    }
 });

document.getElementById("searchBtn").addEventListener("click", searchPhone);


/******************************************Search functionality */

/****show all start  */
// not the best way to show all
const showAll = (isShow) => {
   const showAll = document.getElementById("show_more"); 

   if(isShow){
    showAll.classList.remove('d-none');
   }else {
    showAll.classList.add('d-none');
   }

}

document.getElementById("btn_show_all").addEventListener('click', ()=> {
  processSearch()
   
})

/****show all end */

/*******************************************************************show and hide spinner start */
const showSpinner = (status)=> {
  
  const spinnerEl = document.getElementById("spinner_container");
  if(status === true){
    spinnerEl.classList.remove("d-none");
  }else {
    spinnerEl.classList.add("d-none");
  }
}

/******************************************************************* show and hide spinner end */

const showErrorMessage = (error)=> {
    const errorEl = document.getElementById("error");
    errorEl.innerHTML = "";
    const errorInfo = document.createElement('div');
     errorEl.classList.remove("d-none");
    const info = `
        <div class="alert alert-danger text-center fs-3 fw-bold text-danger mt-5 "> ${error} !!!</div>
    `;
    errorInfo.innerHTML = info 
    errorEl.appendChild(errorInfo)
   // console.log(error);
}

const noDataFound = (data) => {
  //  const phoneContainer = document.getElementById("phone_container");
  //  phoneContainer.innerHTML = "";

  const errorEl = document.getElementById("error");
  errorEl.classList.remove('d-none')
 // errorEl.innerHTML = "";

  const errorInfo = document.createElement("div");
  const info = `
        <div class="alert alert-warning text-center fs-3 fw-bold text-info mt-5 ">
             No phone found for this search. Please search again!!!
         </div>
    `;
  errorInfo.innerHTML = info;
  errorEl.appendChild(errorInfo);
 // console.log(data);
};


// process search 



 loadPhones('iphone',10)
