<script setup lang="ts">
import * as THREE from "three";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { onMounted, ref } from "vue";
import laptopAsset from '../assets/laptop.glb?url';
import keyboardTextureUrl from '../assets/keyboard-c.png?url';
import baseTextureUrl from '../assets/new_texture.png?url';
import browseVideoUrl from '../assets/browse.mp4?url';
import anime from 'animejs'


const containerRef = ref(null)

const init = async () => {
    const scene = new THREE.Scene();
    const container = containerRef.value! as HTMLElement;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.setSize(width, height);

    container.appendChild(renderer.domElement);
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    gltfLoader.setDRACOLoader(dracoLoader);
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)


    camera.setRotationFromQuaternion(new THREE.Quaternion(-0.2626754678891436, -0.0023676666676194667, -0.0006445643264447475, 0.9648811207918827))
    camera.position.set(0.14515455360508775, 3.6927556297910966, 4.324341071962077)
    scene.add(camera)


    function logCameraDetails() {
        console.log('Camera Position:', camera.position);
        console.log('Camera Rotation (Euler):', camera.rotation); // Euler angles (in radians)
        console.log('Camera Quaternion:', camera.quaternion);    // Quaternion representation
    }

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

    const baseMaterial = new THREE.MeshBasicMaterial({ map: baseTexture, reflectivity: 0 })
    const keyboardMaterial = new THREE.MeshBasicMaterial({ map: keyboardTexture })

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    // Contrast shader
    const contrastShader = {
        uniforms: {
            tDiffuse: { value: null },
            contrast: { value: 1.5 }, // Increase for higher contrast
        },
        vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
        fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float contrast;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            color.rgb = (color.rgb - 0.001) * contrast + 0.001; // Contrast adjustment
            gl_FragColor = color;
        }
    `,
    };

    const contrastPass = new ShaderPass(contrastShader);
    composer.addPass(contrastPass);

    const video = document.createElement('video');

    video.src = browseVideoUrl;
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    // video.crossOrigin = "anonymous"
    // video.setAttribute('crossorigin', 'http://localhost:5173/');
    video.playsInline = true; // Ensures it works well on mobile devices
    video.load();

    await video.play();

    // Create a VideoTexture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter; // Adjust for performance
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    videoTexture.flipY = false;
    // videoTexture.needsUpdate = true;


    const screenMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture,
    });

    // const baseMaterial = new 

    let laptopGLB: any = null;
    // const baseTexture = 
    gltfLoader.load(laptopAsset, (laptop) => {
        console.log(laptop)
        laptop.scene?.traverse((child) => {
            console.log(child)
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

    let animeInstance: any;

    window.addEventListener('mousemove', (event) => {
        // Normalize mouse position to -1 to 1
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const maxTurnRate = Math.PI / 8;
        targetRotationY = mouse.x * maxTurnRate;
        targetRotationX = mouse.y * Math.PI / 16;

        // if (animeInstance) animeInstance.pause();

        animeInstance = anime({
            targets: laptopGLB.rotation,
            x: targetRotationX, // Animate Z rotation to target
            y: targetRotationY, // Animate Z rotation to target
            duration: 500,      // Smooth transition duration (ms)
            easing: 'easeOutQuad' // Easing function for a smooth effect
        });
    });

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    const render = () => {
        // controls.update();
        window.requestAnimationFrame(render);


        composer.render();
    }

    render();
}

onMounted(() => {
    init();
})
</script>
<template>
    <div ref="containerRef" class="w-screen h-[70vh] mt-10">

    </div>
</template>