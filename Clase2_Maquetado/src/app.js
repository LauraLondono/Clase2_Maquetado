//MI SOLUCION//
// window.onscroll = function (){scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("fakeHeader").style.opacity="100%";
//     document.getElementById("fakeHeader").style.top="0px";
//   } 

// }

//SOLUCION PROFESOR//
window.onscroll = () => {
  const fakeH = document.querySelector('#fakeHeader');
  const searchB = document.querySelector('#searchBar');
  const footerM = document.querySelector('#footerMobile');

  if (window.innerWidth > 375) {
    // Escritorio
    if (window.pageYOffset >= 120) { //PageYOffset: distancia desde el punto inicial al desplazamiento 
      fakeH.style.top = '0px';
      fakeH.style.opacity = '1';
    } else {
      fakeH.style.top = '-75px';
      fakeH.style.opacity = '0';
    }
  } else {
    // Movil
    if (window.pageYOffset >= 50) { //PageYOffset: distancia desde el punto inicial al desplazamiento 
      footerM.classList.remove("hide");      
      searchB.classList.add("hide");
      
    } else {
      footerM.classList.add("hide");
      searchB.classList.remove("hide");
    }
  }
};