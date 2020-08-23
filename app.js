
let logo = document.getElementById("logo");

document.querySelector("#dark-light-toggle").addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  if(logo.innerHTML === "Light Mode"){
      logo.innerHTML = "Dark Mode"
  }else{
      logo.innerHTML = "Light Mode"
  }
});