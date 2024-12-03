<script setup lang="ts">
import * as THREE from "three";
// import * as dat from "dat.gui";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { onMounted, ref } from "vue";
import laptopAsset from '../assets/laptop.glb?url';
import keyboardTextureUrl from '../assets/keyboard-c.png?url';
import baseTextureUrl from '../assets/new_texture.png?url';
import browseVideoUrl from '../assets/browse.mp4?url';
import anime from 'animejs'
import { Vector3 } from "three";


const containerRef = ref(null)

const init = async () => {
    const scene = new THREE.Scene();
    const container = containerRef.value! as HTMLElement;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        precision: 'highp'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    container.appendChild(renderer.domElement);
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    gltfLoader.setDRACOLoader(dracoLoader);
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    // camera.setRotationFromQuaternion(new THREE.Quaternion(-0.2626754678891436, -0.0023676666676194667, -0.0006445643264447475, 0.9648811207918827))
    // camera.position.set(0.14515455360508775, 3.6927556297910966, 4.324341071962077)
    camera.position.set(0, 4, 5);
    camera.lookAt(new Vector3(0, 1, 0))
    scene.add(camera)


    // function logCameraDetails() {
    //     console.log('Camera Position:', camera.position);
    //     console.log('Camera Rotation (Euler):', camera.rotation); // Euler angles (in radians)
    //     console.log('Camera Quaternion:', camera.quaternion);    // Quaternion representation
    // }

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.listenToKeyEvents(window);
    // controls.addEventListener('change', logCameraDetails);


    const textureLoader = new THREE.TextureLoader();

    const baseTexture = textureLoader.load(baseTextureUrl);
    const keyboardTexture = textureLoader.load(keyboardTextureUrl);

    baseTexture.flipY = false;
    keyboardTexture.flipY = false;
    baseTexture.colorSpace = THREE.SRGBColorSpace;
    keyboardTexture.colorSpace = THREE.SRGBColorSpace;
    keyboardTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()
    baseTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

    const baseMaterial = new THREE.MeshBasicMaterial({ map: baseTexture, reflectivity: 0 })
    const keyboardMaterial = new THREE.MeshBasicMaterial({ map: keyboardTexture, reflectivity: 0 })

    const video = document.createElement('video');

    video.src = browseVideoUrl;
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.setAttribute('webkit-playsinline', '');
    // video.crossOrigin = "anonymous"
    // video.setAttribute('crossorigin', 'http://localhost:5173/');
    video.playsInline = true; // Ensures it works well on mobile devices
    video.load();

    try {
        video.addEventListener('canplay', () => {
            video.play();
        })
    } catch (e) {

    }

    // Create a VideoTexture
    const videoTexture = new THREE.VideoTexture(video);
    // videoTexture.minFilter = THREE.LinearFilter; // Adjust for performance
    // videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()
    // videoTexture.format = THREE.RGBFormat;
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.flipY = false;
    videoTexture.needsUpdate = true;


    const screenMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture,
    });

    // const baseMaterial = new 

    let laptopGLB: any = null;
    // const baseTexture = 
    gltfLoader.load(laptopAsset, (laptop: any) => {
        laptop.scene?.traverse((child: any) => {
            if (['lid', 'base'].includes(child.name)) {
                // const material = new THREE.MeshBasicMaterial({
                //     map: 
                // })
                child.material = baseMaterial;
                // scene.add()
            }

            if (child.name === 'keyboard') {
                child.material = keyboardMaterial;

            }

            if (child.name === 'screen') {
                child.material = screenMaterial;
            }
        })

        laptop.scene.position.set(0, 0, 0)

        laptopGLB = laptop.scene;
        scene.add(laptopGLB)
        // this.cube = box.scene.children[0];
        // this.cube.material = this.aoMaterial;
        // this.scene.add(this.cube);

        // this.geometry = this.cube.geometry;
        // this.geometry.scale(40, 40, 40);
    });

    let mouse = { x: 0, y: 0 };
    let targetRotationY = 0;
    let targetRotationX = 0;

    // let animeInstance: any;

    const maxTurnRate = Math.PI / 8;

    function handleMove(event: any) {
        if (!laptopGLB) return;

        let clientX, clientY;

        // For mousemove, use event.clientX and event.clientY
        if (event.type === 'mousemove') {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        // For touchmove, use the first touch point
        else if (event.type === 'touchmove') {
            event.preventDefault(); // Prevent the default scroll behavior
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        }

        // Normalize touch/mouse position to -1 to 1 range
        mouse.x = (clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(clientY / window.innerHeight) * 2 + 1;

        // Map mouse/touch position to rotation
        targetRotationY = mouse.x * maxTurnRate;
        targetRotationX = mouse.y * Math.PI / 16;

        // Animate rotation using Anime.js
        anime({
            targets: laptopGLB.rotation,
            x: targetRotationX,
            y: targetRotationY,
            duration: 500,      // Smooth transition duration (ms)
            easing: 'easeOutQuad' // Easing function for a smooth effect
        });
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    const render = () => {
        // controls.update();
        window.requestAnimationFrame(render);


        renderer.render(scene, camera)
    }

    render();
}

onMounted(() => {
    init();
})
</script>
<template>
    <div ref="containerRef" class="w-screen z-10 h-[60vh] sm:h-[70vh] mt-10">

    </div>
</template>