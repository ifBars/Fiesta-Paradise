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

    // Variables for inertia
    let angularVelocity = {
        x: 0,
        y: 0
    };
    let isDragging = false;
    let previousMousePosition = {
        x: 0,
        y: 0
    };

    // Add animation
    function animate() {
        requestAnimationFrame(animate);
        if (!isDragging) {
            cube.rotation.x += angularVelocity.x;
            cube.rotation.y += angularVelocity.y;

            // Apply inertia (reduce angular velocity)
            angularVelocity.x *= 0.99;
            angularVelocity.y *= 0.99;
        }
        renderer.render(scene, camera);
    }
    animate();

    // Add mouse interaction for applying force
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
        // Calculate angular velocity based on mouse movement
        angularVelocity.x = (event.clientY - previousMousePosition.y) * 0.001;
        angularVelocity.y = (event.clientX - previousMousePosition.x) * 0.001;
    }

    function onMouseMove(event) {
        if (isDragging) {
            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y
            };

            // Apply force while dragging
            cube.rotation.x += deltaMove.y * 0.01;
            cube.rotation.y += deltaMove.x * 0.01;

            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }
    }
</script>
