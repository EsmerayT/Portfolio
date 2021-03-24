// Nav Responsive
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Nav on scroll

window.onscroll = () => {
  const nav = document.querySelector('#navbar'); {
    if (this.scrollY <= 1000) {
      nav.className = '';
    } else if (this.scrollY >= 1750) {
      nav.className = 'blue';
    } else if (this.scrollY >= 2000) {
      nav.className = '';
    } else {
      nav.className = 'gray';
    }
  }
};


// window.onscroll = () => {
//   const nav = document.querySelector('#navbar'); {
//     if (this.scrollY >= 0 && this.scrollY <= 1000 || this.scrollY >= 1000 && this.scrollY <= 2200  ) {
//       nav.className = '';
//     } else if (this.scrollY >= 1750) {
//       nav.className = 'blue';
//     } else if (this.scrollY >= 2000) {
//       nav.className = '';
//     } else {
//       nav.className = 'gray';
//     }
//   }
// };




