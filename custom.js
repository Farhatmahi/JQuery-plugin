var typed = new Typed('.element', {
  // Waits 1000ms after typing "First"
  strings: ['graphic designer^1500', 'web developer^1500', 'digital marketer^1500'], 
  loop : true,
  showCursor : false,  
  smartBackspace : true,
  // typeSpeed : 50,
  // backSpeed : 50,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
});

// counter up

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

