function openTex(evt, tabId) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
  // evt.currentTarget.className += " colorB";
}
function openPan(evt, panId) {
  // let i, panel, tablinks;
  // let panel;

  // panel = document.getElementsByClassName("panel");

  // for (i = 0; i < panel.length; i++) {
  //   panel[i].style.display = "none";
  // }
  // tablinks = document.getElementsByClassName("tablinks");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }
  if (document.getElementById(panId).style.display == "none") {
    document.getElementById(panId).style.display = "block";
  } else {
    document.getElementById(panId).style.display = "none";
  }
  console.log(evt.currentTarget.children[1].innerHTML);

  if (evt.currentTarget.children[1].innerHTML == "+") {
    evt.currentTarget.children[1].innerHTML = "-";
  } else {
    evt.currentTarget.children[1].innerHTML = "+";
  }
  // evt.currentTarget.className += " colorB";
}
$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: false,
    lazyLoad: true,

    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-two").owlCarousel({
    dots: false,
    loop: true,
    lazyLoad: true,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    autoplayHoverPause: true, 
    touchDrag: false,
    mouseDrag: false,
    margin: 0,

    responsive: {
      0: {
        items: 1,
        mergeFit: true,
      },
      600: {
        items: 2,
        mergeFit: true,
      },
      1000: {
        items: 4,
        mergeFit: true,
      },
    },
  });
});
