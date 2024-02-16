import * as THREE from 'three';
import { Controller } from './controller';
import UI from './ui';
import Messenger from './messenger';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controller =  new Controller()
const ui = new UI(controller)
const rotationSpeed = 0.01
const messenger = new Messenger()

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

  ui.update()

	cube.rotation.x += -controller.direction.y * rotationSpeed;
	cube.rotation.y += controller.direction.x * rotationSpeed;

	renderer.render( scene, camera );
}

animate();