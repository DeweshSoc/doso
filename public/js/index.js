
// navbar collapse btn
const barsBtn = document.getElementById("dropdown1");
const dropdownMenuOne = document.getElementById("dropdown-menu1");


barsBtn.addEventListener("click",e=>{
   dropdownMenuOne.classList.toggle("hide-navbar");
});

// open classes by clicking on class cards

const classes = document.getElementsByClassName("class");



for(let i=0;i<classes.length;i++){
   classes[i].addEventListener("click",e=>{
      const clsLink = classes[i].lastElementChild;
      window.open(clsLink.href,"_self");
   });
}

// open class join/create menu by clicking plus btn
const plus = document.getElementById("plus-btn");
const classOverlay = document.getElementById("class-menu-overlay");
plus.addEventListener("click",e=>{
   classOverlay.classList.remove("hide");
})

const closeOverlay = document.getElementById("close-overlay");
closeOverlay.addEventListener("click",function(e){
   // console.log(e);
   classOverlay.classList.add("hide");
})
