console.log(window.document);
// var hh=document.getElementsBy("h");
//var selector=document.querySelectorAll(".h");
var element= document.querySelector('#demo');
//console.log(element);
// element.innerHTML="<h1>DOM MANIPUlATION PARH chuky HAIn</h1>";
// element.style.color="white";
// element.style.backgroundColor="pink";
// element.addEventListener("click",function(){
//     element.innerHTML="<h1>DOM MANIPUlATION PARH chuky HAIn</h1>";
//     element.style.color="white";
//     element.style.backgroundColor="pink";
// });
var para=document.querySelectorAll('p');
//console.log(para);
para.forEach(function (i){
    //console.log(i);
    i.style.color="orange";
}
)


