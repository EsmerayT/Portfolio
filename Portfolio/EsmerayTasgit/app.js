//NAVBAR
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 1000 || this.scrollY >= 1700) nav.className = ''; else nav.className = 'scroll'; 
};