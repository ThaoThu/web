$(document).ready(function () {
  

    // scroll menu
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height  > 100) {
            $('.top-header').css("background-color","white"); 
        }else{
            $('.top-header').css("background","transparent");
        }
    });
    //scroll top
    $('.footer-back-top').click(
        function(){
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    )
    //carousel
   
    $('.slide1').addClass("text--gray");
    $('.home-slider__content').css("opacity","1")
    $('#slide').on('slide.bs.carousel', function() {
        var currentIndex = $('div.active').index() +1 ;
        if(currentIndex ==1){
           
            $('.slide1').removeClass("text--gray")
            $(".slide2").addClass("text--gray")
        }else if(currentIndex == 2){
            
            $('.slide3').addClass("text--gray")
            $(".slide2").removeClass("text--gray")
        }else{
            
            $('.slide1').addClass("text--gray")
            $('.slide3').removeClass("text--gray")
        }
    });
 
   
});



//count time
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
 

  // If the count down is finished, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);

//filter
var items = document.querySelectorAll('.filter-sections div');
animate(items);
//


// filter on click

each('.filter-links li a', function(el) {
  el.addEventListener('click', function(e) {
    
    e.preventDefault();
    filterLinks(el);
  });
});
$('.filter-links li a').on('click', function() {
  $('.filter-links li a').removeClass("text--gray")
  $(this).addClass("text--gray");
  
});

// filter links functions
function filterLinks(element) {
  // get text 
  var el = element.textContent,
    // convert to lowercase
    linksTolowerCase = el.toLowerCase();
  // if all remove all elements
  if (el === 'All Products') {
    // first show all view class
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // no show init animation
    animate(items);
  } else {
    // if not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
  }
  // show animation for current elements
  animate(document.querySelectorAll('.' + linksTolowerCase));
};
// forech arrays
function each(el, callback) {
  var allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animate function
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      item[counter].classList.add('view');
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
};
//tt
