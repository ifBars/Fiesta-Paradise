---
layout: page
title: "Home"
---
Welcome to the official website for Fiesta Paradise! Use the navigation bar to explore our rules, staff handbook, and join our Discord server.

## Interactive Three.js Cube

<div id="threejs-canvas"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-canvas').appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Variables to track mouse movement
    let isDragging = false;
    let previousMousePosition = {
        x: 0,
        y: 0
    };
    let rotationSpeed = {
        x: 0,
        y: 0
    };

    // Add animation
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += rotationSpeed.x;
        cube.rotation.y += rotationSpeed.y;

        // Gradually reduce rotation speed (simulate friction)
        rotationSpeed.x *= 0.95;
        rotationSpeed.y *= 0.95;

        renderer.render(scene, camera);
    }
    animate();

    // Add mouse interaction for dragging
    window.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('mousemove', onMouseMove, false);

    function onMouseDown(event) {
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    function onMouseUp() {
        isDragging = false;
    }

    function onMouseMove(event) {
        if (isDragging) {
            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y
            };

            // Apply a force based on mouse movement
            rotationSpeed.x += deltaMove.y * 0.01;
            rotationSpeed.y += deltaMove.x * 0.01;

            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }
    }
</script>
