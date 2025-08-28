// Animate the box when the page loads
gsap.from(".box", { 
  duration: 1.5, 
  y: -200, 
  opacity: 0, 
  ease: "bounce" 
});

// Add a click animation on the button
document.getElementById("animateBtn").addEventListener("click", () => {
  gsap.to(".box", { 
    duration: 1, 
    rotation: "+=360", 
    scale: 1.5, 
    yoyo: true, 
    repeat: 1 
  });
});
