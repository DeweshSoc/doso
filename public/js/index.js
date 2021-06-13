
// navbar collapse btn
const barsBtn = document.getElementById("dropdown1");
const dropdownMenuOne = document.getElementById("dropdown-menu1");


barsBtn.addEventListener("click",e=>{
   dropdownMenuOne.classList.toggle("hide");
});

// open classes by clicking on class cards

const classes = document.getElementsByClassName("class");



for(let i=0;i<classes.length;i++){
   classes[i].addEventListener("click",e=>{
      const clsLink = classes[i].lastElementChild;
      window.open(clsLink.href,"_self");
   });
}