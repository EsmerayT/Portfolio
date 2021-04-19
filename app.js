// NAV RESPONSIVE
function responsiveNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// NAV ON SCROLL
let intViewportWidth = window.innerWidth;
console.log(intViewportWidth)

let y = window.scrollY
console.log(y)


window.onscroll = () => {
  const nav = document.querySelector('#navbar'); {
    if (window.innerWidth < 992 && this.scrollY <= 4200 || window.innerWidth > 992 && this.scrollY <= 1000 || window.innerWidth > 1312 && this.scrollY <= 2000) {
      nav.className = '';
    } else if (window.innerWidth < 992 && this.scrollY <= 5900 || window.innerWidth > 992 && this.scrollY <= 1750 || window.innerWidth > 1312 && this.scrollY <= 3600) {
      nav.className = 'gray';
    } else {
      nav.className = 'blue';
    }
  }
};