// alert("Hello there!!!!!!");

console.log(document);

console.log(typeof document);

// {prop: "val", prop: "val"}

function changeHeaderContent(){
    //doing some dom manipulatiion
    console.log(document.querySelectorAll("h1"));

    //document.querySelectorAll("h1")
    for(let index = 0; index<document.querySelectorAll("h1").length;index++){
        document.querySelectorAll("h1")[index].textContent = "Heading" + index;
    }
}

setTimeout(changeHeaderContent, 3000)

//access specific elements
//every element has access to some methods that can be used to acces other elements
//these methods include: querySelector(one element) , querySelectorAll(elements of a certain class/all elements), getElementById, 
// getElementsByClassName(multiple elements), getElementsByTagName


