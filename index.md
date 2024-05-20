---
layout: page
title: "Home"
---
Welcome to the official website for Fiesta Paradise! Use the navigation bar to explore our rules, staff handbook, and join our Discord server.

## Interactive Floating Dots

<div id="canvas-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<script>
  var scene, camera, renderer;
  var dots = [];
  var mouse = new THREE.Vector2();
  var speed = 0.1;

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    createDots();
    document.addEventListener('mousemove', onMouseMove, false);

    animate();
  }

  function createDots() {
    var geometry = new THREE.Geometry();
    var material = new THREE.PointsMaterial({ color: 0xffffff });

    for (var i = 0; i < 100; i++) {
      var dot = new THREE.Vector3(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      geometry.vertices.push(dot);
      dots.push(dot);
    }

    var points = new THREE.Points(geometry, material);
    scene.add(points);
  }

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  }

  function animate() {
    requestAnimationFrame(animate);

    for (var i = 0; i < dots.length; i++) {
      var dot = dots[i];
      var distance = dot.distanceTo(camera.position);

      if (distance < 1) {
        dot.x -= (dot.x - mouse.x) * speed;
        dot.y -= (dot.y - mouse.y) * speed;
      } else {
        dot.x += Math.random() * 0.01 - 0.005;
        dot.y += Math.random() * 0.01 - 0.005;
      }

      if (dot.x > 5) dot.x = -5;
      if (dot.x < -5) dot.x = 5;
      if (dot.y > 5) dot.y = -5;
      if (dot.y < -5) dot.y = 5;
    }

    renderer.render(scene, camera);
  }

  init();
</script>
