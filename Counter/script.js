const decreasebtn = document.getElementById("decreaseBtn");
const resetbtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increaseBtn");

let count = 0;

decreasebtn.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}

resetbtn.onclick = function(){
    count=0;
    document.getElementById("countLabel").textContent = count;
}

increasebtn.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}