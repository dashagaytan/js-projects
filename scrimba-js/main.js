//create a function on click increments count by 1
let count = 0
let updateNum = document.getElementById("count-el")

function increment() {
    //alert("button was clicked")
    count = count + 1
    updateNum.innerHTML = count

}

function decrement() {
    //alert("button was clicked")
    count = count - 1
    updateNum.innerHTML = count

}