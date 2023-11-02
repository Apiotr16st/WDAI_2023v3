function menu(name){
    var main = document.getElementsByClassName("main");
    for (let m of main){
        m.style.display= "none";
    }
    var ele = document.getElementById(name)
    ele.style.display="block";
}

function menu2(name){
    var as = document.getElementsByClassName("as");
    for (let n of as){
        n.style.display= "none";
    }
    var ele=document.getElementById(name)
    ele.style.display="block";
}

menu('article1');

var bt1 = document.getElementById("strona1");
bt1.addEventListener("click", ()=>{menu("article1")})
var bt2 = document.getElementById("strona2");
bt2.addEventListener("click", ()=>{menu("article2")})
var bt3 = document.getElementById("strona3");
bt3.addEventListener("click", ()=>{menu("article3")})
var bt4 = document.getElementById("strona4");
bt4.addEventListener("click", ()=>{menu("contact-form")})

menu2('img1');

var im1 = document.getElementById("strona1");
im1.addEventListener("click", ()=>{menu2("img1")})
var im2 = document.getElementById("strona2");
im2.addEventListener("click", ()=>{menu2("img2")})
var im3 = document.getElementById("strona3");
im3.addEventListener("click", ()=>{menu2("img3")})
var im4 = document.getElementById("strona4");
im4.addEventListener("click", ()=>{menu2("img4")})



// document.getElementById('myForm').addEventListener('submit', function(event) {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;

//     if (name === '') {
//       alert('Pole "Imię" nie może być puste.');
//       event.preventDefault(); 
//       return;
//     }
  
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!email.match(emailPattern)) {
//       alert('Wprowadź poprawny adres email.');
//       event.preventDefault(); 
//       return;
//     }
//   });
  
