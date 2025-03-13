window.addEventListener("scroll", ()=>{
    console.log("page scrolling at" + window.scrollY + "px");
    
});

//open menu
const openMenuButton = document.querySelector("#open-menu");
openMenuButton.style.backgroundColor = "orange";

openMenuButton.addEventListener("click", ()=>{
    console.log("opening menu!!!");
    //document.querySelector("#mobile-menu").style.display = "flex" //add a style attribute(inline css) 
    // to selected element
    document.querySelector("#mobile-menu").classList.add("#opened-nav");
})

//close menu
const closeMenuButton = document.querySelector("#close-menu");
 
closeMenuButton.addEventListener("click",() =>{
    document.querySelector("#mobile-menu").style.display ="none"
})


//add or remove classes

//implement a mobile menu button in one of the html css projects