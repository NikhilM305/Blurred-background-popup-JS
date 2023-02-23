const normal=document.querySelector(".cont");
const popup=document.querySelector(".popup");
const btn=document.querySelector(".btn");
const closepop=document.querySelector(".close-icon");
const closebtn=document.querySelector(".closebtn");

btn.addEventListener("click", ()=>{
   normal.classList.add("active");
   popup.classList.remove("active")

})

closepop.addEventListener("click",()=>{

    popup.classList.add("active")
    normal.classList.remove("active");
})
closebtn.addEventListener("click",()=>{

    popup.classList.add("active")
    normal.classList.remove("active");
})
