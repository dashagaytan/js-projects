//create a function on click increments count by 1
let count = 0
let updateNum = document.getElementById("count-el") //updates number on click by grabbing the id of the element
let savedEl = document.getElementById("saved-el")  //p tag of all saved counts 

function increment() {
    //alert("button was clicked")
    count = count + 1
    updateNum.innerHTML = count

}

// function decrement() {
//     //alert("button was clicked")
//     count = count - 1
//     updateNum.innerHTML = count
// }

function save(){
    let savedCount = count + ", "
    savedEl.innerHTML += savedCount
    console.log(savedCount)
}