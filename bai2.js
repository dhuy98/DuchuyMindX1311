let button = document.getElementById("btn");
button.addEventListener("click",numberOneTriangle);
function numberOneTriangle() {
    let rs = document.getElementById("result");
    let n = document.getElementById("num").value;
    let b = "";
    for (i = 0; i < n; i++) {
      b += "*";
      rs.innerHTML += `<h1>${b}</h1>`;
    }
}