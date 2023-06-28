var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var reset=document.querySelector("#reset");
var counterValue = document.querySelector("#counterValue");


var counter = 0;

increment.addEventListener("click", ()=>{
  counter++;
  counterValue.innerHTML=counter;
})
;
decrement.addEventListener('click',()=>{
  counter--;
  counterValue.innerHTML = counter;
});

reset.addEventListener('click',()=>{
    counter=0;
    counterValue.innerHTML=counter;
})
