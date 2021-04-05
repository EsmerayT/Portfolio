// Nav Responsive
function responsiveNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Nav on scroll

let intViewportWidth = window.innerWidth;
console.log(intViewportWidth)

let y = window.scrollY
console.log(y)

// window.onscroll = () => {
//   const nav = document.querySelector('#navbar'); {
//     if (window.innerWidth <= 600 && this.scrollY <= 2200 || window.innerWidth > 600 && this.scrollY <= 1000) {
//       nav.className = '';
//     } else if (window.innerWidth <= 600 && this.scrollY <= 2950 || window.innerWidth > 600 && this.scrollY <= 1750) {
//       nav.className = 'gray';
//     } else {
//       nav.className = 'blue';
//     }
//   }
// };




window.onscroll = () => {
  const nav = document.querySelector('#navbar'); {
    if (window.innerWidth < 992 && this.scrollY <= 4300 || window.innerWidth > 992 && this.scrollY <= 1000 || window.innerWidth > 1312 && this.scrollY <= 2000) {
      nav.className = '';
    } else if (window.innerWidth < 992 && this.scrollY <= 6000 || window.innerWidth > 992 && this.scrollY <= 1750 || window.innerWidth > 1312 && this.scrollY <= 3600) {
      nav.className = 'gray';
    } else {
      nav.className = 'blue';
    }
  }
};



// window.onscroll = () => {
//   const nav = document.querySelector('#navbar'); {
//     if (window.innerWidth <= 567 && this.scrollY <= 4000 || window.innerWidth > 567 && this.scrollY <= 4000) {
//       nav.className = '';
//     } else if (window.innerWidth <= 567 && this.scrollY <= 5800 || window.innerWidth > 567 && this.scrollY <= 5800) {
//       nav.className = 'gray';
//     } else {
//       nav.className = 'blue';
//     }
//   }
// };






// window.onscroll = () => {
//   const nav = document.querySelector('#navbar'); {
//     if (window.innerWidth < 800 && this.scrollY <= 2200) {
//       nav.className = '';
//     } else if (window.innerWidth < 800 && this.scrollY >= 1750) {
//       nav.className = 'gray';
//     } else if (window.innerWidth < 800 && this.scrollY >= 2000) {
//       nav.className = '';
//     } else {
//       nav.className = '';
//     }
//   }
// };



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


// window.onscroll = () => {
//   const werk = document.getElementById("werk"); 
//   const bio = document.getElementById("Bio");
//   const contact = document.getElementById("Contact");{
//     if (werk.className === "werk") {
//       nav.className = '';
//     } else if (bio.className === "Bio") {
//       nav.className = 'blue';
//     } else if (contact.className === "Contact") {
//       nav.className = '';
//     } else {
//       nav.className = 'gray';
//     }
//   }
// };


// if ($(window).width() < 960) {
//   alert('Less than 960');
// }
// else {
//   alert('More than 960');
// }


// const mq = window.matchMedia( "(min-width: 960px)" );

// if (mq.matches) {
//        alert("window width >= 960px");
// } else {
//      alert("window width < 960px");
// }



// DISPLAY SMILEY

// function displaySmiley() {
//   const smiley = document.querySelector('.smiley'); {
//     if (window.innerWidth == 1280) {
//       smiley.className = '';
//     } else {
//       nav.className = 'blue';
//     }
//   }
// };