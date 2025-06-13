
function updateCircle() {
    let radius = Number(document.getElementById("radius").value);

    
    let area = Math.PI * radius * radius; // Area of circle formula
    let circle = document.getElementById("circle");
    let Sizelenghth = radius * 2; // Diameter of circle

    circle.style.width = Sizelenghth + "px"; // Set width of circle
    circle.style.height = Sizelenghth + "px"; // Set height of circle

    document.getElementById("area").textContent = `The area of the circle is ${area}`; // Display area
}