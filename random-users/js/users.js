

const loadRandomUser = async (searchBy='') => {
  const url = "https://randomuser.me/api/?gender=" + searchBy;

   

    try {
        const res = await fetch(url);
        const data = await res.json();
     
        showRandomUser(data.results[0])

    } catch (error) {
        console.log(error);
    }

};


const showRandomUser = (data)=> {
    const randomUserContainer = document.getElementById("random_user_container");
   randomUserContainer.innerHTML = "";
  //  console.log(data);
    const { picture, name, location,phone, email, gender,cell } = data;
    const { city, street, country, state, postcode } = location;
    
    const {title, first, last} = name;

  
   const userInfo = document.createElement('div');
   userInfo.classList.add("random_user");

    const info = `
         <div class="info_container">
                    <div  class="user_info">
                      <div class="img">
                        <img id="user_img" src="${picture.large}" alt="">
                      </div>   
                    </div>
                    <div class="info text-center">
                      <h4>Name</h4>
                      <div class="name"> 
                        <h6>
                          <i>${title}. </i>
                          <span>${first}</span>
                          <span>${last}</span>                   
                        </h6>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-6 p-2 text-start">
                          <div class="card p-2">
                            <div><i class="fw-bold text-info">Phone:</i> <span class="text-primary">${phone}</span> </div>
                            <div><i class="fw-bold text-info">Email:</i> <span class="text-primary">${email}</span> </div>
                             <div><i class="fw-bold text-info">Cell:</i> <span class="text-primary">${cell}</span> </div>
                            <div><i class="fw-bold text-info">Gender:</i> <span class="text-primary">${gender}</span> </div>
                           
                          </div>
                        </div>
                        <div class="col-12 col-md-6 p-2">
                          <div class="card text-start p-2">
                            <h6 class="text-info">
                              Address 
                            </h6>
                            <div> 
                              <div>
                                <strong><i class="text-info">House No.</i></strong> <span>${street.number} </span><span class="mx-2">|</span>
                                <strong><i class="text-info">Streat:</i></strong> <span>${street.name}</span>
                              </div>
                              <div><strong><i class="text-info me-2">Postcode:</i>${postcode} </strong> postcode</div>
                              <div><strong><i class="text-info me-2">City:</i>${city} </strong></div>
                              <div><strong><i class="text-info me-2">State:</i>${state} </strong></div>
                              <div><strong><i class="text-info me-2">Country:</i>${country} </strong></div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    `;

     userInfo.innerHTML = info;

     randomUserContainer.appendChild(userInfo)

}


document.getElementById("searchByFemale").addEventListener('click', ()=> {
        loadRandomUser("female");    
})

document.getElementById("searchByMale").addEventListener("click", ()=> {
    loadRandomUser("male");
})

 loadRandomUser("female");

