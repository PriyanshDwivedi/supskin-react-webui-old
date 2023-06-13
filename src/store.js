import * as THREE from 'three'

export const material = {
  sphere: new THREE.MeshStandardMaterial({ color: new THREE.Color('#D6CDC4'), transparent: true }),
  inner: new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#eF5C00').convertSRGBToLinear(),
    transparent: true,
    side: THREE.BackSide,
    transmission: 0.5,
    metalness: 1,
    roughness: 0,
  }),
  outer: new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FFFFFF').convertSRGBToLinear(),
    transparent: true,
    transmission: 0.7,
    metalness: 1,
    roughness: 0,
  }),
  cap: new THREE.MeshStandardMaterial({ color: new THREE.Color('#FFFFFF') }),
  liquid: new THREE.MeshPhysicalMaterial({ color: new THREE.Color('white'), transparent: true, transmission: 0.5 }),
}

export const geometry = {
  sphere: new THREE.SphereBufferGeometry(1, 32, 32),
}
