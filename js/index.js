// import * as THREE from  'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// function main() {
//     const canvas = document.getElementById("app");

//     const renderer = new THREE.WebGLRenderer({canvas});

//     const fov = 60;
//     const aspect = 2;
//     const near = 0.1;
//     const far = 5;
//     const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//     camera.position.z = 2;

//     const scene = new THREE.Scene();

//     {
//         const color = 0xFFFFFF;
//         const intensity = 1;
//         const light = new THREE.DirectionalLight(color, intensity);
//         light.position.set(-1, 2, 4);
//         scene.add(light);
//     }

//     const boxWidth = 1;
//     const boxHeight = 1;
//     const boxDepth = 1;
//     const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

//     const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

//     const cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);

//     function render(time) {
//         time *= 0.001;

//         cube.rotation.x = time + 1;
//         cube.rotation.y = time;

//         renderer.render(scene, camera);

//         requestAnimationFrame(render)
//     }

//     requestAnimationFrame(render);
// }

// main();