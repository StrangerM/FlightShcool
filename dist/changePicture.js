
window.onload = function() {
   var image = document.getElementById('responsiveImage');
   
   if (window.innerWidth <= 768) { 
       image.src = '/html/img/slider/slide-3.jpg';
   }
};



window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; // Get current scroll position
    const langSwitcher = document.querySelectorAll('.lang');
    var scl = langSwitcher[0];
  if (scrollTop === 0) {
      // Scrolling down
      scl.style.display = 'inline-flex';
      scl.style.position = 'fixed';
      scl.style.top = 'top 2%';
      scl.style.right = '2.5%'; 
      scl.style.zIndex  = '9999';
  } else {
    // Scrolling up
    scl.style.display  = 'none';
  }
});

