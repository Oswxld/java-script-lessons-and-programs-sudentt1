


let c;
document.getElementById("button").onclick = function() {
    
    document.getElementById("h1").textContent = `The value of c is ${document.getElementById("input").value}`;

    c = document.getElementById("input").value; // Get the value from input field
    c =Number(c); // Convert to number
    
    document.getElementById("h2").textContent = `The value of c is after conversrion is ${c}`;

     c =String(c); // string
    
    document.getElementById("h3").textContent = `The value of c is after conversrion is ${c}`;

    c = Boolean(c); // boolean
    document.getElementById("h4").textContent = `The value of c is after conversrion is ${c}`;
}
