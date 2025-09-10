const pi = 3.14159;
let radius;
let circumference;
let area;
document.getElementById("submit").onclick = function(){
    radius = document.getElementById("mytext").value;
    circumference = 2*pi*radius;
    area = pi*radius**2;
    document.getElementById("myC").textContent = `The Circumference of Circle is ${circumference.toFixed(2)}`;
    document.getElementById("myA").textContent = `The Area of Circle is ${area.toFixed(2)}`;
}