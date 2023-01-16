// async function getData() {
//   let response = await fetch("./data.json");
//   if (response.status === 200) {
//     let data = await response.json();

//     for (let i = 0; i < 25; i++) {
//       let userData = document.createElement("div");
//       userData.innerHTML = `<div class="card">
//                                   <div class="card-body">
//                                       <h3 class="card-title">${data[i].id}:${data[i].name}</h3>
//                                       <h5 class="card-text">${data[i].email}</h5>
//                                   </div>
//                               </div>`;
//       root.appendChild(userData);
//     }
//   }
// }
let currentPage = 0
async function pageOne() {
    let clearDiv = document.getElementById("userDataDiv");
    clearDiv.innerHTML = "";
  let response = await fetch("./data.json");
  if (response.status === 200) {
    let data = await response.json();

    for (let i = 0; i < 25; i++) {
      let userData = document.createElement("div");
      userData.className = "card-div"
      userData.innerHTML = `<div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">${data[i].id} : ${data[i].name}</h3>
                                    <h5 class="card-text">${data[i].email}</h5>
                                </div>
                            </div>`;
      root.appendChild(userData);
    }
    currentPage = 1;
  }
}

async function pageTwo() {
    let clearDiv = document.getElementById("userDataDiv");
    clearDiv.innerHTML = "";
  let response = await fetch("./data.json");
  if (response.status === 200) {
    let data = await response.json();

    for (let i = 25; i < 50; i++) {
      let userData = document.createElement("div");
      userData.className = "card-div"
      userData.innerHTML = `<div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">${data[i].id} : ${data[i].name}</h3>
                                    <h5 class="card-text">${data[i].email}</h5>
                                </div>
                            </div>`;
      root.appendChild(userData);
    }
    currentPage = 2;

  }
}

async function pageThree() {
    let clearDiv = document.getElementById("userDataDiv");
    clearDiv.innerHTML = "";
  let response = await fetch("./data.json");
  if (response.status === 200) {
    let data = await response.json();

    for (let i = 50; i < 75; i++) {
      let userData = document.createElement("div");
      userData.className = "card-div"
      userData.innerHTML = `<div class="card">
                                  <div class="card-body">
                                      <h3 class="card-title">${data[i].id} : ${data[i].name}</h3>
                                      <h5 class="card-text">${data[i].email}</h5>
                                  </div>
                              </div>`;
      root.appendChild(userData);
    }
    currentPage = 3;

  }
}

async function pageFour() {
    let clearDiv = document.getElementById("userDataDiv");
    clearDiv.innerHTML = "";
  let response = await fetch("./data.json");
  if (response.status === 200) {
    let data = await response.json();

    for (let i = 75; i < 101; i++) {
      let userData = document.createElement("div");
      userData.className = "card-div"
      userData.innerHTML = `<div class="card">
                                  <div class="card-body">
                                      <h3 class="card-title">${data[i].id} : ${data[i].name}</h3>
                                      <h5 class="card-text">${data[i].email}</h5>
                                  </div>
                              </div>`;
      root.appendChild(userData);
    }
    currentPage = 4;

  }
}

let root = document.getElementById("userDataDiv");
let pageChange = document.getElementById("paginationDiv");

let pagination = document.createElement("div");
pagination.innerHTML = `<nav aria-label="Page navigation example">
                            <ul class="pagination pagination-lg">
                                <li class="page-item"><a class="page-link" id="previous-page" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" id="page-one"  href="#">1</a></li>
                                <li class="page-item"><a class="page-link" id="page-two" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" id="page-three" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" id="page-four" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" id="next-page" href="#">Next</a></li>
                            </ul>
                            </nav>`;

pageChange.appendChild(pagination);

pageOne();

const pageOneListen = document.getElementById("page-one");
pageOneListen.addEventListener("click", pageOne);

const pageTwoListen = document.getElementById("page-two");
pageTwoListen.addEventListener("click", pageTwo);

const pageThreeListen = document.getElementById("page-three");
pageThreeListen.addEventListener("click", pageThree);

const pageFourListen = document.getElementById("page-four");
pageFourListen.addEventListener("click", pageFour);


const previousListen = document.getElementById("previous-page");
previousListen.addEventListener("click", function(){
    if(currentPage===1){alert("This is the First Page")}
    else if(currentPage === 2){pageOne()}
    else if(currentPage === 3){pageTwo()}
    else if(currentPage === 4){pageThree()}
})

const nextListen = document.getElementById("next-page");
nextListen.addEventListener("click", function(){
    if(currentPage===1){pageTwo()}
    else if(currentPage === 2){pageThree()}
    else if(currentPage === 3){pageFour()}
    else if(currentPage === 4){alert("This is the Last Page")}
})