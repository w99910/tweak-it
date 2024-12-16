<script setup lang="ts">
import * as THREE from "three";
// import * as dat from "dat.gui";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { onMounted, ref } from "vue";
import page0 from '../assets/show-cases/show-case-0.png?url';
import page1 from '../assets/show-cases/show-case-1.png?url';
import page2 from '../assets/show-cases/show-case-2.png?url';
import page3 from '../assets/show-cases/show-case-3.png?url';
import page4 from '../assets/show-cases/show-case-4.png?url';
import page5 from '../assets/show-cases/show-case-5.png?url';
import page6 from '../assets/show-cases/show-case-6.png?url';
import page7 from '../assets/show-cases/show-case-7.png?url';
import anime from 'animejs'
import { Vector3 } from "three";
import vertexShader from '../shaders/vertex-shader.glsl';
import fragmentShader from '../shaders/fragment-shader.glsl';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const containerRef = ref(null)

const showCases = [
    page0,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
]

const init = async () => {
    const scene = new THREE.Scene();
    const container = containerRef.value! as HTMLElement;
    const width = window.innerWidth;
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
    // const gltfLoader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath(
    //     "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    // );
    // gltfLoader.setDRACOLoader(dracoLoader);
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    // camera.setRotationFromQuaternion(new THREE.Quaternion(-0.2626754678891436, -0.0023676666676194667, -0.0006445643264447475, 0.9648811207918827))
    // camera.position.set(0.14515455360508775, 3.6927556297910966, 4.324341071962077)
    camera.position.set(0, 0, 5);
    camera.lookAt(new Vector3(0, 0, 0))
    scene.add(camera)

    const group = new THREE.Group();

    let time = 0;
    const textureLoader = new THREE.TextureLoader();
    const size = {
        width: 2.7,
        height: 2,
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const mouse = new THREE.Vector2();

    const meshes = [];

    function onPointerMove(event) {

        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components

        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);

        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children);

        // for (let i = 0; i < intersects.length; i++) {

        //     intersects[i].object.material.color.set(0xff0000);

        // }
        if (intersects.length > 0) {
            mouse.x = intersects[0].point.x;
            mouse.y = intersects[0].point.y;
        } else {
            mouse.x = 10000;
            mouse.y = 10000;
        }

    }

    window.addEventListener('pointermove', onPointerMove);

    showCases.forEach((showCase, i) => {
        textureLoader.load(showCase, (texture) => {
            const rect = new THREE.PlaneGeometry(size.width, size.height, 20, 20);
            const material = new THREE.ShaderMaterial({
                extensions: {
                    derivatives: '#extension GL_OES_standard_derivatives : enable',
                },
                side: THREE.DoubleSide,
                uniforms: {
                    t: {
                        value: texture,
                    },
                    u_time: {
                        value: time,
                    },
                    u_mouse: {
                        value: pointer,
                    },
                    u_i: {
                        value: i,
                    }
                },
                wireframe: false,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
            })

            material.needsUpdate = true;

            const image = new THREE.Mesh(rect, material)

            // image.position.x += i * (size.width + 0.5);

            group.add(image);

            scene.add(image);

            meshes.push(image);
        })
    })
    // function logCameraDetails() {
    //     console.log('Camera Position:', camera.position);
    //     console.log('Camera Rotation (Euler):', camera.rotation); // Euler angles (in radians)
    //     console.log('Camera Quaternion:', camera.quaternion);    // Quaternion representation
    // }

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.listenToKeyEvents(window);
    // controls.addEventListener('change', logCameraDetails);

    let targetRotationY = 0;
    let targetRotationX = 0;

    // let animeInstance: any;

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    const clock = new THREE.Clock();



    const render = () => {
        // controls.update();
        window.requestAnimationFrame(render);

        for (let mesh of meshes) {
            mesh.material.uniforms.u_mouse.value = mouse;
            mesh.material.uniforms.u_time.value = clock.getElapsedTime();
        }

        group.position.x -= 0.1

        renderer.render(scene, camera)
    }

    render();
}

onMounted(() => {
    // init();
    const splide = new Splide('.splide', {
        type: 'loop',
        arrows: false,
        drag: false,
        perPage: 4,
        pagination: false,
        gap: '4rem',
        focus: 'center',
        perMove: 1,
        breakpoints: {
            640: {
                perPage: 2,
                gap: '2rem'
            },
            1024: {
                perPage: 3,
                gap: '3rem'
            }
        },
        autoScroll: {
            speed: 0.25,
            pauseOnHover: false,
        },
    });

    // splide.on('move', () => {
    //     const slides = document.querySelectorAll('.splide__slide');

    //     slides.forEach((slide, index) => {
    //         const slideRect = slide.getBoundingClientRect();
    //         const containerRect = splide.Components.Elements.track.getBoundingClientRect();

    //         // Calculate proximity to center
    //         const distanceFromCenter = Math.abs(slideRect.left + slideRect.width / 2 - containerRect.left - containerRect.width / 2);

    //         console.log(distanceFromCenter, slide)

    //         // Map the distance to a scale factor
    //         const scaleFactor = Math.max(1 - distanceFromCenter / containerRect.width, 0.8); // Scale between 0.8 and 1.0
    //         slide.style.transform = `scale(${scaleFactor})`;
    //     });
    // });

    splide.mount({ AutoScroll });

})
</script>
<template>
    <div ref="containerRef" class="w-screen z-10 py-12 mt-12">
        <section class="splide" aria-labelledby="carousel-heading">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="showCase in showCases" :key="showCase"><img class="rounded-lg"
                            :src="showCase" /></li>
                </ul>
            </div>
        </section>
    </div>
</template>


<style scoped></style>