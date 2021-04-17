if (screen.width < 481) {
document.getElementById('nav').innerHTML= `<div class="flex" id="middle">
    •••
    </div>
    <div class="flex" id="middleClicked">
    <=
    </div>
    </div>
    <div class="flex" id="searchClicked">
    <=
    </div>
    <div class="flex" id="left">
      SS Code Center
    </div>
    <div class="flex" id="right">
     S
    </div>`;
    
    document.getElementById('middle').addEventListener('click',()=>{
      document.getElementById('threelinesNav').style.display = 'flex';
      document.getElementById('middle').style.display = 'none';
      document.getElementById('middleClicked').style.display = 'flex';
      document.getElementById('threelinesNav').style.animation = 'anm 1s';
    });
   document.getElementById('middleClicked').addEventListener('click',()=>{
    
     document.getElementById('middleClicked').style.display = 'none';
     document.getElementById('middle').style.display = 'flex';
     document.getElementById('threelinesNav').style.animation = 'anm2 1s';
     setTimeout(function() {
      document.getElementById('threelinesNav').style.display = 'none';
     }, 1000);
   });
   
   
   //Search
   document.getElementById('right').addEventListener('click',()=>{
     document.getElementById('left').innerHTML = `
           <input type="text" name="search" id="searchThree" placeholder="Search...">`;
   document.getElementById('middle').style.display = 'none';
   document.getElementById('searchClicked').style.display = 'flex';
   document.getElementById('threelinesNav').style.display = 'none';
   document.getElementById('middleClicked').style.display = 'none';
   });
   
   document.getElementById('searchClicked').addEventListener('click',()=>{
     document.getElementById('middle').style.display = 'flex';
   document.getElementById('searchClicked').style.display = 'none';
   document.getElementById('left').innerHTML = `<div class="flex" id="left">SS Code Center</div>`;
   });
   
   
   
}




console.log("Hello World");
let i = 1;
let intv = setInterval(()=> {
  document.getElementById(`letter-${i}`).style.display = 'block';
  i++;
}, 100);
setTimeout(function() {
  clearInterval(intv);
}, 31*100);
setTimeout(function() {
  document.getElementById('animatedText-1').style.animation = 'anm4 1s';
  
}, 31*100+500);
setTimeout(function() {
  document.getElementById('animatedText-1').style.display = 'none';
  document.getElementById('upperText-1').style.display = 'block';
  document.getElementById('upperText-1').style.animation = 'anm5 1s';
  document.getElementById('animatedText-2').style.display = 'flex';
}, 31*100+500+1000);


setTimeout(function() {
//let j = 32
let intv2 = setInterval(()=> {
  document.getElementById(`letter-${i}`).style.display = 'block';
  i++;
}, 100);
setTimeout(function() {
  clearInterval(intv2);
}, 8*100);


setTimeout(function() {
  document.getElementById('animatedText-2').style.animation = 'anm4 1s';
}, 8*100+100);

setTimeout(function() {
  document.getElementById('animatedText-2').style.display = 'none';
  document.getElementById('upperText-2').style.display = 'block';
  document.getElementById('upperText-2').style.animation = 'anm6 1s';
  document.getElementById('regForm').style.display = 'flex';
 
  k = 0;
  let intv3 = setInterval(function() {
  document.getElementsByClassName('data')[k].style.display = 'block';
  document.getElementsByClassName('data')[k].style.animation = 'anm7 1s';
  k++ ;
  }, 100);
  setTimeout(function() {
   clearInterval(intv3) ;
  }, 9*100);
  
 
  
}, 8*100+500+1000);






}, 31*100+1000);

//captcha
var code = Math.ceil(Math.random() * (99999-10000)+10000);
setInterval(()=>{
let captchaInput = document.getElementById('captcha').value;
document.getElementById('capValue').innerHTML = code;
if (captchaInput=="") {

  }
else if (code==captchaInput) {
  document.getElementById("valid").innerHTML = "Captcha valid" ;
  document.getElementById("valid").style.color = "green" ;
  }
  else {
   document.getElementById("valid").innerHTML = "Captcha does not match" ;
   document.getElementById("valid").style.color = "red" ;
  }
  }, 1000);