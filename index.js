// let btn = document.getElementById("btn");

// btn.addEventListener("click",function(){
//     const changeColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
//     document.body.style.backgroundColor = changeColor;
// })

// function randomColor(){
//     return Math.floor(Math.random() * 256)
// }

//// another dtyle of code
let btn = document.getElementById("btn")

let changeColor = function(){
    let colorChange = `rgb(${randomColor()},${randomColor()},${randomColor()})`
    document.body.style.backgroundColor = colorChange
}

let randomColor = ()=> {
    return Math.floor(Math.random() * 256)
}

btn.addEventListener("click",changeColor)