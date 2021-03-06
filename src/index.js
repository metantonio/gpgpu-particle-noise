import * as THREE from 'three'
import { render, events } from '@react-three/fiber'
import './styles.css'
import App from './App'

// For more documentation, you can check this blog: https://barradeau.com/blog/?p=621
// This examples needs WebGL1 (?)
const gl = new THREE.WebGL1Renderer({
  canvas: document.querySelector('canvas'),
  antialias: true,
  alpha: true
})

window.addEventListener('resize', () =>
  render(<App />, document.querySelector('canvas'), {
    gl,
    events,
    linear: true,
    camera: { fov: 25, position: [0, 0, 6] }
  })
)

window.dispatchEvent(new Event('resize'))