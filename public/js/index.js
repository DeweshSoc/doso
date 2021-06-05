const barsBtn = document.getElementById("dropdown1");
const dropdownMenuOne = document.getElementById("dropdown-menu1");


barsBtn.addEventListener("click",e=>{
   dropdownMenuOne.classList.toggle("hide");
});