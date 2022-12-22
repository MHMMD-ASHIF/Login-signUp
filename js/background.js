var manner = document.getElementById('back');
images = ['asset/round.jpg','asset/Dark.jpg','asset/Light.jpg','asset/mac.jpg', 'asset/waves.jpg','asset/pixels1.jpg','asset/pixel2.jpg','asset/ventura.jpg']
var imgLength = images.length

var number = Math.floor(Math.random() * imgLength);


window.onload = function(){
   manner.style.backgroundImage = 'url("'+images[number]+'")';
    
}


// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//         manner.style.backgroundImage = 'url("'+images[number]+'")';
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 500px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction)


var pass_key = document.getElementById('pp')
var  character = document.getElementById('character')
var capital = document.getElementById('capital')
var numbers = document.getElementById('numbers')
var special = document.getElementById('special')

// pass_key.addEventListener("keyup", function(){
//    password = pass_key.value
// })

document.getElementById('pp').addEventListener("keyup", function(){
   var password=document.getElementById('pp').value;

   if(/[A-Z]/&&/[a-z]/.test(password)){
      capital.classList.add('valid')
   }
   else{
      capital.classList.remove('valid')
   }

   if(/[^A-Za-z0-9]/.test(password)){
      special.classList.add('valid')
   }
   else{
      special.classList.remove('valid')
   }


   if(password.length>7){
      character.classList.add('valid')
      }
      else{
         character.classList.remove('valid')
      }

   if(/[0-9]/.test(password)){
      numbers.classList.add('valid')
   }
   else{
      numbers.classList.remove('valid')
   }
   
  
   
   
});


// var red = document.getElementById('cpp')
// var password=document.getElementById('pp').value;
// var c_password = document.getElementById('cpp').value;


// document.getElementById('cpp').addEventListener("keyup", function(){
//    if(c_password!=password){
//       red.classList.remove('matched')
//    }
//    else{
//       red.classList.add('matched')
//    }

// })


var email = document.getElementById('ver');
var overlay = document.getElementById('overlay');


function verify(){
   email.style.display='block';
   overlay.style.display='block';
}
function closed(){
   document.getElementById('ver').style.display='none';
   overlay.style.display='none';
}





// $(".email_verifying .email_icon > a").click(function(e){
//    email[0].style.display='none';
// })

