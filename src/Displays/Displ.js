import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function Displ(props) {
  const scene = new THREE.Scene();
  const canvas = document.querySelector(".webgl");
  const light = new THREE.AmbientLight("0xffffff", 5);
  light.position.set(5, 5, 5);
  scene.add(light);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  /////////////////////////////////////////bg color set//////////////////////////////////////
  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    canvas: canvas,
  });

  renderer.setClearColor("#87CEEB");
  renderer.setSize(
    props.size * window.innerWidth,
    props.size * window.innerHeight
  );
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.gammaOuput = true;
  document.body.appendChild(renderer.domElement);
  ////////////////////////////////////////testing///////////////////////////////////////////

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  var file = props.file;
  const objLoader = new GLTFLoader();
  objLoader.load(
    file,
    function (glb) {
      const root = glb.scene;
      scene.add(root);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("error");
    }
  );

  function render() {
    renderer.clear();
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
      props.size * window.innerWidth,
      props.size * window.innerHeight
    );
    render();
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  return animate();
}
