let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector("btn2");
let tabcontent1 = document.querySelector(".tab-content1");
let tabcontent2 = document.querySelector(".tab-content2");

btn1.addEventListener("click", function(){
    btn1.classList.add("active");
    btn2.classList.remove("active");
    tabcontent1.style.display = 'block';
    tabcontent2.style.display = 'none';
})

btn2.addEventListener("click", function(){
    btn1.classList.remove("active");
    btn2.classList.add("active");
    tabcontent1.style.display = 'none';
    tabcontent2.style.display = 'block';
})
