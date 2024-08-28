window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log("Entered1")
    document.getElementById("header_div").style.paddingTop = "0.5%";
    document.getElementById("header_title").style.fontSize = "300%";
  } else {
    console.log("Entered2")
    document.getElementById("header_div").style.paddingTop = "3.5%";
    document.getElementById("header_title").style.fontSize = "400%";
  }
}