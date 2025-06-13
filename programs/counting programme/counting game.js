function reset() {
    document.getElementById("number").textContent = "0";
}

function increase() {
    let current = Number(document.getElementById("number").textContent);
    document.getElementById("number").textContent = current + 1;
}

function decrease() {
    let current = Number(document.getElementById("number").textContent);
    document.getElementById("number").textContent = current - 1;
}

