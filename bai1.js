let button = document.getElementById("btn");
button.addEventListener("click", timSo);
function timSo() {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  let ele = document.getElementById("result");
  let result = [];
  for (i = a; i <= b; i++) {
    result.push(i);
    console.log(result);
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        const index = result.indexOf(i);
        if (index > -1) {
          result.splice(index, 1);
        }
      } else {
        continue;
      }
    }
  }

  let kq = 0;
  for (let i = 0; i < result.length; i++) {
    kq += result[i];
  }
  ele.innerHTML = `tổng các số nguyên tố từ ${a} tới ${b} là ${kq}`;
}
