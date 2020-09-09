// Øvelse 25 start

// Første måde 

let elementh1 = document.getElementById("h1-id")

console.log(elementh1.innerHTML); 

// Anden måde 

let text = document.querySelector("p"); 

console.log(text.innerHTML); 

// Tredje måde 

let text2 = document.querySelector("#nr2")

console.log(text2.innerHTML); 

// fjerde 

let ovelse = document.querySelector(".ovelse")

console.log(ovelse.innerHTML); 

// Femte måde 

let ovelse2 = document.getElementsByClassName("ovelse2")

console.log(ovelse2[0].innerHTML); 

// Sjette måde 

let element3 = document.getElementsByTagName("h3"); 

console.log(element3[0].innerHTML); 

// Øvelse 25 slut 




// Øvelse 25.2 start 

let paragraph = document.querySelector("#tomtext"); 

paragraph.innerText = "Filip Stojanovic"; 

// Øvelse 25.2 slut 



// Øvelse 26 

let knap = document.querySelector(".button1");

    knap.addEventListener("click", function() {
        alert("Button1"); 
    })
    
// Øvelse 26 slut 



// Øvelse 27 

let knappen = document.querySelector(".switch");

knappen.addEventListener("click", function() {
    let elementf = document.querySelector(".baggrund"); 

    if(elementf.classList) { 
        elementf.classList.toggle("nyStil");
    }
})


// Øvelse 27 slut 

let divs = document.querySelectorAll(".div");
console.log(divs);
document.querySelectorAll(".div").forEach(divs => {
    switch (divs.innerHTML) {
        case "Rip":
            break;
        case "Rap":
            divs.style.color = "blue";
            break;
        case "Rup":
            divs.addEventListener("click", function () {
                alert("Rup")
            })
            break;
    }
});


 

// Øvelse 28.2 

let femNavne = ['Filip', 'Messi', 'Neymar', 'Ronaldinho', 'Dembele']; 

femNavne.forEach(femNavneFunction); 
function femNavneFunction(femNavne,index) {
    document.querySelector("#tomdiv").innerHTML += `Mit navn er ${femNavne.toUpperCase()} og min plads er ${index}` + "<br>"; 
    console.log(femNavne);
};

// Slut på øvelse 28.2 



// Øvelse 29 start 

   let input1 = document.querySelector("#input-1");
   let input2 = document.querySelector("#input-2");
   let select = document.querySelector("#operation")
   
   let resultat = document.querySelector("#resultat"); 
   
   console.log(resultat)
   
   
   let knap2 = document.querySelector("#knap1")
   
   knap2.addEventListener("click", function(){
   
   let værdi1 = Number(input1.value);
   let værdi2 = Number(input2.value);
   
     switch (select.value) {
         case "+":
   
            resultat.innerHTML = værdi1+ værdi2;
             
             break;
          case "-":
   
          resultat.innerHTML = værdi1- værdi2;
                 
           break;
           case "*":
   
           resultat.innerHTML = værdi1* værdi2;
               
         break;
   
         case "/":
   
         resultat.innerHTML = værdi1/ værdi2;
             
       break;
     
         default:
             break;
     }
   
   })

   // Øvelse 29 slut 



   // Kreativ opgave begyndelse 


   //knap1
let k1 = document.querySelector(".trykher1")
k1.addEventListener("click", function(){
    let reveal1 = document.querySelector(".trykher2");
  if (reveal1.classList) { 
    reveal1.classList.toggle("nyknap");
  } 
})

//knap2
let k2 = document.querySelector(".trykher2")
k2.addEventListener("dblclick", function(){
    let reveal2 = document.querySelector(".trykher3");
  if (reveal2.classList) { 
    reveal2.classList.toggle("nyknap");
  } 
})

//Knap3
let k3 = document.querySelector(".trykher3")
k3.addEventListener("mouseover", function(){
    let reveal3 = document.querySelector(".trykher4");
  if (reveal3.classList) { 
    reveal3.classList.toggle("nyknap");
  } 
})

//Knap4
let k4 = document.querySelector(".trykher4")
k4.addEventListener("contextmenu", function(){
    let reveal4 = document.querySelector(".trykher5");
  if (reveal4.classList) { 
    reveal4.classList.toggle("nyknap");
  } 
})

//Knap5
let k5 = document.querySelector(".trykher5")
k5.addEventListener("mouseleave", function(){
    let reveal5 = document.querySelector(".trykher6");
  if (reveal5.classList) { 
    reveal5.classList.toggle("nyknap");
  } 
})

//Knap6
let k6 = document.querySelector(".trykher6")
k6.addEventListener("keypress", function(){
    let reveal6 = document.querySelector(".skrivher");
  if (reveal6.classList) { 
    reveal6.classList.toggle("nyknap");
  } 
})


//Knap7
let k7 = document.querySelector(".skrivher")
k7.addEventListener("change", function(){
    alert('Tillykke du har hermed klaret opgaven!')
})


// Opgave slut 