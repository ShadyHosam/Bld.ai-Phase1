let coursesData;
function fetchCourses() {

  let parent = document.querySelector(".courses-flex-box");
  fetch("https://shadyhosam.github.io/jsonData/db.json")
    .then((Response) => Response.json())
    .then((items) => {
      console.log(items.courses);
      coursesData = items.courses;
      coursesData.forEach((item) => {
        parent.append(ShowCourse(item));
      });
    });
}

function ShowCourse(item) {
  let course = document.createElement("div");
  course.classList.add("course");
  course.classList.add("id-" + item.id);
  course.innerHTML = `
    <img src="${item.course_img}" alt="${item.category} Course" />
    <h2>${item.title}</h2>
    <span>${item.author}</span>
    <br />
    <span class="rating">${item.rating}</span>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <span>(${item.ratings_count})</span>
    <h2>${item.price}</h2>
    `;
  return course;
}
function onSearchClick(event) {
  event.preventDefault();
  let searchText = document.querySelector(".search-input").value;
  let items = coursesData;
  items.forEach((item) => {
    let title = item.title,
      searchTextFound = false;
    for (i = 0; i < title.length - searchText.length + 1; i++) {
      let curWord = title.substr(i, searchText.length);
      if (curWord.toLowerCase() == searchText.toLowerCase()) {
        searchTextFound = true;
        break;
      }
    }
    let element = document.querySelector(".id-" + item.id);
    if (element && !searchTextFound) {
      element.remove();
    } else if (!element && searchTextFound) {
      let parent = document.querySelector(".courses-flex-box");
      parent.append(addCourse(item));
    }
  });
}

fetchCourses();

let searchButton = document.querySelector(".submit");
searchButton.addEventListener("click", onSearchClick);
