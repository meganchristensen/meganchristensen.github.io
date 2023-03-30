var age;

age = prompt("Enter age to continue to site:")
if (age >= 65){
  output = "Free Friday Coffee Night for Seniors!"
  document.getElementById('verify').style.backgroundImage = "linear-gradient(to right, #D2B48C, #FEF6C2)";
  document.getElementById('verify').style.color = '#231814';}
else {
  output = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;