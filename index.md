---
layout: page
title: "Home"
---
Welcome to the official website for Fiesta Paradise! Use the navigation bar to explore our rules, staff handbook, and join our Discord server.

<div id="canvas-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<script>
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  var mouseX = 0, mouseY = 0;

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
  }

  document.addEventListener('mousemove', onDocumentMouseMove, false);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += (mouseY - cube.rotation.x) * 0.05;
    cube.rotation.y += (mouseX - cube.rotation.y) * 0.05;
    renderer.render(scene, camera);
  }

  animate();
</script>