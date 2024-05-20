---
layout: page
title: "Home"
---
Welcome to the official website for Fiesta Paradise! Use the navigation bar to explore our rules, staff handbook, and join our Discord server.

# Floating Dots Canvas

<canvas id="floating-dots-canvas"></canvas>

<script>
  const canvas = document.getElementById('floating-dots-canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create array to store dots
  const dots = [];
  const numDots = 100;

  // Function to generate random number within a range
  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Dot class
  class Dot {
    constructor() {
      this.x = randomRange(0, canvas.width);
      this.y = randomRange(0, canvas.height);
      this.radius = 2;
      this.color = '#ffffff';
      this.velocity = {
        x: randomRange(-2, 2),
        y: randomRange(-2, 2)
      };
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Bounce off walls
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.velocity.y = -this.velocity.y;
      }

      // Move away from mouse when near
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        this.velocity.x = dx / distance;
        this.velocity.y = dy / distance;
      }

      this.draw();
    }
  }

  // Initialize dots
  for (let i = 0; i < numDots; i++) {
    dots.push(new Dot());
  }

  // Mouse position
  let mouseX, mouseY;
  canvas.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(dot => {
      dot.update();
    });
  }

  animate();
</script>
