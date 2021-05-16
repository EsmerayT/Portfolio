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
    if (window.innerWidth < 688 && this.scrollY <= 2200 || window.innerWidth > 900 && this.scrollY <= 1000 || window.innerWidth >= 1900 && this.scrollY <= 1500 || window.innerWidth > 2000 && this.scrollY <= 2000) {
      nav.className = '';
    } else if (window.innerWidth < 688 && this.scrollY <= 3200 || window.innerWidth > 900 && this.scrollY <= 1750 || window.innerWidth >= 1900 && this.scrollY <= 2500  || window.innerWidth > 2000 && this.scrollY <= 3600) {
      nav.className = 'gray';
    } else {
      nav.className = 'blue';
    }
  }
};