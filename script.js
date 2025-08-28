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

// existing GSAP code...

const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  const toDark = !document.body.classList.contains("dark");

  // Animate background/body color smoothly
  gsap.to(document.body, {
    duration: 0.5,
    // GSAP doesn't directly tween CSS variables here; we'll toggle class, then cross-fade opacity
    onStart: () => document.body.classList.toggle("dark", toDark),
    opacity: 0.95,
    yoyo: true,
    repeat: 1
  });

  // Little pulse on the box so it feels alive
  gsap.fromTo(".box", { scale: 1 }, { duration: 0.25, scale: 1.08, yoyo: true, repeat: 1 });
});
