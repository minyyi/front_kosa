function showPic(obj) {
  //click한 a
  //   const ulId = document.getElementById("imagegallery");
  const source = obj.getAttribute("href");
  console.log("source", source);
  const placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  const text = obj.getAttribute("title");
  const decription = document.getElementById("description"); //<p>
  console.log(decription);
  //   decription.innerHTML = text;
  decription.insertAdjacentHTML("beforeend", text);
  //   e.preventDefault();
  //   return false;
}

// window.onload =
function prepareGallery() {
  const image = document.getElementById("imagegallery");
  console.log("image", image); //<ul>
  const links = image.getElementsByTagName("a");
  console.log("fld", links);
  document.get;
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      showPic(this);
      e.preventDefault();
      // return false
    });
  }
}

window.onload = prepareGallery;
// showPic(getElementById(imagegallery));
//   showPic());
