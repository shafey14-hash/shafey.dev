import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, OrbitControls, Torus, Icosahedron, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ position, rotation, color, scale = 1, speed = 1 }) {
  const meshRef = useRef()
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime() * speed
    meshRef.current.rotation.x = Math.sin(t * 0.4 + offset) * 0.3 + rotation[0]
    meshRef.current.rotation.y = t * 0.5 + rotation[1]
    meshRef.current.rotation.z = Math.cos(t * 0.3 + offset) * 0.2 + rotation[2]
    meshRef.current.position.y = position[1] + Math.sin(t * 0.6 + offset) * 0.15
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  )
}

function MainShape() {
  const meshRef = useRef()
  const torusRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouse.y * 0.4,
        0.05
      )
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.4 + t * 0.12,
        0.05
      )
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3
      torusRef.current.rotation.z = t * 0.2
    }
  })

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.4, 1]} />
        <MeshDistortMaterial
          color="#c9a86c"
          metalness={0.8}
          roughness={0.1}
          distort={0.25}
          speed={1.5}
          emissive="#c9a86c"
          emissiveIntensity={0.08}
        />
      </mesh>

      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 8, 80]} />
        <meshStandardMaterial
          color="#c9a86c"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.4}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.6, 0.01, 6, 100]} />
        <meshStandardMaterial
          color="#6a6460"
          metalness={0.9}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef()
  const count = 120

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c9a86c"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

function SmallFloaters() {
  const floaters = useMemo(() => [
    { position: [-3.5, 2, -1], rotation: [0.5, 0.3, 0.2], color: '#4a4845', scale: 0.22, speed: 0.7 },
    { position: [3.8, 1.5, -0.5], rotation: [0.2, 0.8, 0.1], color: '#3a3835', scale: 0.18, speed: 1.1 },
    { position: [-2.5, -2.2, 0.5], rotation: [0.8, 0.2, 0.5], color: '#5a5450', scale: 0.14, speed: 0.9 },
    { position: [2.8, -1.8, -1], rotation: [0.3, 0.6, 0.4], color: '#4a4845', scale: 0.20, speed: 0.8 },
    { position: [0.5, 3.0, -1.5], rotation: [0.1, 0.9, 0.3], color: '#c9a86c', scale: 0.10, speed: 1.3 },
  ], [])

  return (
    <>
      {floaters.map((f, i) => (
        <FloatingGeometry key={i} {...f} />
      ))}
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f0ebe4" />
        <directionalLight position={[-5, -3, 2]} intensity={0.4} color="#c9a86c" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#c9a86c" />

        <MainShape />
        <SmallFloaters />
        <ParticleField />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
