// load three.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124.0/build/three.module.js'

// uncomment to load controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/controls/OrbitControls.js'

// create a scene and a camera
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 30

// create the renderer and add it to the html
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// Uncomment next line to add controls
const controls = new OrbitControls( camera, renderer.domElement );

// Create an object and add it to the scene:

// 1. Create the geometry:
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheBufferGeometry( points );
const material = new THREE.MeshNormalMaterial();
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );

// 2. Create the material:
//const material = new THREE.MeshNormalMaterial()

// 3. Create the object
const torus = new THREE.Mesh( geometry, material )

// 4. Add it to the scene
scene.add( torus )

// Render
function animate() {

    requestAnimationFrame( animate )

    // rotate torus a little bit each frame
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01

    renderer.render( scene, camera )

}

animate()