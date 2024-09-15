
//function for header to shrink as page scroll down and grow again when scroll up
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

//function used to allow a button to control if a section is shown or not
function show_below(assignment) {
  var x = document.getElementById(assignment);
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }
}


$(document).ready(function(){
  //Function for overlay/loading screen between pages
  setTimeout(function endLoad(){
    $('body').addClass('loaded');
  }, 800);

  window.onscroll = function() {scrollFunction()};
  
  
})
