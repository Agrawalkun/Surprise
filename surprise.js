let con_1 = document.getElementById("con-1");
let con_2 = document.getElementById("con-2");
let con_3 = document.getElementById("con-3");
let con_4 = document.getElementById("con-4");
let con_5_accepted = document.getElementById("con-5-accepted");
let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
let btn_4 = document.getElementById("btn-4");
let accepted = document.querySelectorAll(".accepted");
let yes_btn_4 = document.getElementById("yes-btn-4");

// For button No
function random(ran) {
  ran.style.position = "absolute";
  ran.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  ran.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}
btn_1.addEventListener("click", () => {
  con_1.style.display = "none";
  con_2.style.display = "flex";
});
btn_2.addEventListener("click", () => {
  con_2.style.display = "none";
  con_3.style.display = "flex";
});
btn_3.addEventListener("click", () => {
  con_3.style.display = "none";
  con_4.style.display = "flex";
});
btn_4.addEventListener("mouseenter", e => {
  yes_btn_4.style.marginLeft = "2.3rem";
  random(e.target);
});
// For button Yess
accepted.forEach(button => {
  let hidden = button.nextElementSibling;
  button.addEventListener("click", () => {
    con_5_accepted.style.display = "flex";
    con_1.style.display = "none";
    con_2.style.display = "none";
    con_3.style.display = "none";
    con_4.style.display = "none";
  });
});

