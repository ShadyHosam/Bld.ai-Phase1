const excelBtn = document.querySelector(".excelBtn");
const pythonBtn = document.querySelector(".pythonBtn");
const webBtn = document.querySelector(".webBtn");
const AwsBtn = document.querySelector(".AwsBtn");
const jsBtn = document.querySelector(".jsBtn");
const DrawingBtn = document.querySelector(".DrawingBtn");
const dataBtn = document.querySelector(".dataBtn");
let python = [] , aws = [] , js = [] , Excel = [] ;
let Data_sci = [] , Drawing = [] , Web_dev = [] ;
let cur_on_page = [];
async function FETCH() {

 const res = await fetch("https://shadyhosam.github.io/Courses-API/db.json");
  const data = await res.json();

  python.push(data[0]);
  Excel.push(data[1]);
  Web_dev.push(data[2]);
  js.push(data[3]);
  Data_sci.push(data[4]);
  aws.push(data[5]);
  Drawing.push(data[6]);
  return true;
}


function CreateCard(card) {
  let items_container1 = document.querySelector(".items-container.one");
  let items_container2 = document.querySelector(".items-container.two");
  
  let container = document.querySelector("#carouselExampleControls");

  
  let container_lg = document.querySelector("#C1");
  let tmp = container.querySelector(".carousel-inner");
  let prev = container_lg.querySelector(".carousel-control-prev");
  let next = container_lg.querySelector(".carousel-control-next");
  let next_sm = container.querySelector(".carousel-control-next");
  let prev_sm = container.querySelector(".carousel-control-prev");
  let inhtml = "";
  let len = card.length;
  
 
  if(len-1 <= 4) 
  prev.style.display = "none" , next.style.display = "none" ;
  else
   prev.style.display = "flex", next.style.display = "flex";
  
  if(len-1 <= 1)
   prev_sm.style.display = "none", next_sm.style.display = "none";
  else 
  prev_sm.style.display = "flex", next_sm.style.display = "flex";
  items_container1.innerHTML = "";
  items_container2.innerHTML = "";
  tmp.innerHTML = "" ;

  let active_card = `<div class="carousel-item active">`;
  for (let i = 0; i < Math.min(4, len - 1); i++) {
    

    let non_active_card = `<div class="carousel-item">` ;
    inhtml = "";
    inhtml += `<div class="card" id = ${card[i].id}>`;
    inhtml += `

    <img src= ${card[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">${card[i].title}</div>
      <div class="card-author">${card[i].author}</div>
      <div class="card-rate">
        <span class="checked">${card[i].rate}</span>
        <span class="fa fa-star ${card[i].draw_star[0]}"></span>
        <span class="fa fa-star ${card[i].draw_star[1]}"></span>
        <span class="fa fa-star ${card[i].draw_star[2]}"></span>
        <span class="fa fa-star ${card[i].draw_star[3]}"></span>
        <span class="fa fa-star-half-full ${card[i].draw_star[4]}"></span>
        <span class="students">${card[i].students}</span>
      </div>
      <div class="card-price">${card[i].price}</div>
    </div>
    `;

    inhtml += `</div>`;
    items_container1.innerHTML += inhtml;
    if(i == 0){
      active_card += inhtml ; 
      active_card += `</div>`;
      tmp.innerHTML += active_card;
    }
    else {

      non_active_card += inhtml ; 
      non_active_card += `</div>`;
      tmp.innerHTML += non_active_card ;
    }
  }
    
  for (let i = 4; i < Math.min(8, len - 1); i++) {

    let non_active_card = `<div class="carousel-item">`;
    let inhtml = "";
    inhtml += `<div class="card" id =${card[i].id}>`;
    inhtml += `
    <img src= ${card[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">${card[i].title}</div>
      <div class="card-author">${card[i].author}</div>
      <div class="card-rate">
        <span class="checked">${card[i].rate}</span>
        <span class="fa fa-star ${card[i].draw_star[0]}"></span>
        <span class="fa fa-star ${card[i].draw_star[1]}"></span>
        <span class="fa fa-star ${card[i].draw_star[2]}"></span>
        <span class="fa fa-star ${card[i].draw_star[3]}"></span>
        <span class="fa fa-star-half-full ${card[i].draw_star[4]}"></span>
        <span class="students">${card[i].students}</span>
      </div>
      <div class="card-price">${card[i].price}</div>
    </div>
    `;
    inhtml += `</div>`;
    non_active_card += inhtml;
    non_active_card += `</div>`;
    tmp.innerHTML += non_active_card;
    items_container2.innerHTML += inhtml;
  }

  document.querySelector(".title").innerHTML = card[len - 1].tit;
  document.querySelector(".details").innerHTML = card[len - 1].disc;
  document.querySelector(".Explore-btn").innerHTML = card[len - 1].bt;
}




window.onload = async () => {
  await FETCH();
  const objs = [...python[0].python];
  cur_on_page = [...python[0].python];
  CreateCard(objs);
  excelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.exe");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...Excel[0].excel];
    cur_on_page = [...Excel[0].excel];
    CreateCard(obj);
  });
  pythonBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.py");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...python[0].python];
    cur_on_page = [...python[0].python];
    CreateCard(obj);
  });
  webBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.web");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...Web_dev[0].Web_Dev];
    cur_on_page = [...Web_dev[0].Web_Dev];
    CreateCard(obj);
  });
  AwsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.aws");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...aws[0].AWS];
    cur_on_page = [...aws[0].AWS];
    CreateCard(obj);
  });
  jsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.js");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...js[0].JS];
    cur_on_page = [...js[0].JS];
    CreateCard(obj);
  });
  DrawingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.draw");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...Drawing[0].Drawing];
    cur_on_page = [...Drawing[0].Drawing];
    CreateCard(obj);
  });
  dataBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let active = document.querySelector(".listOfCourses.active");
    let cur = document.querySelector(".listOfCourses.dta");
    active.style.color = "grey";
    active.classList.remove("active");
    cur.style.color = "black";
    cur.classList.add("active");
    const obj = [...Data_sci[0].Data_Science];
    cur_on_page = [...Data_sci[0].Data_Science];
    CreateCard(obj);
  });
  let search_bar = document.querySelector(".search-bar");
  search_bar.addEventListener("input", (e) => {
    e.preventDefault();
    let search_value = search_bar.value.toLowerCase();
    let tmp_cur = cur_on_page.filter(get) ; 
    function get(course){
      if(course.id == 8) return true ; 
      else return course.title.toLowerCase().includes(search_value) ;
    }
    CreateCard(tmp_cur) ; 
  });
  document.querySelector(".search-bar").addEventListener("keypress", function (event) {
    console.log("pressed") ;
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".search-icon-btn").click();
    }
  });
};
