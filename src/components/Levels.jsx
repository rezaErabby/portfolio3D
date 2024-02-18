import { Center, useGLTF, Sparkles } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'

const boxGeometry = new THREE.ConeGeometry(2, 1, 15)
const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })

export function Myself({ position = [0, 0, 0] }) {
    return <group position={position} >
        <RigidBody type="fixed">
            <mesh geometry={boxGeometry} position={[1.05, 0.89, 0.1]} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
        </RigidBody>
    </group>
}

export function Works({ position = [0, 0, 0] }) {
    return <group position={position} >
        <RigidBody type="fixed">
            <mesh geometry={boxGeometry} position={[-1.05, 0.85, 0.1]} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
        </RigidBody>
    </group>
}

export function Socials({ position = [0, 0, 0] }) {
    return <group position={position} >
        <RigidBody type="fixed">
            <mesh geometry={boxGeometry} position={[0.08, 1.8, -0.45]} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
        </RigidBody>
    </group>
}

export function Levels() {
    const tree = useGLTF('../models/model.gltf');
    console.log("tree", tree)
    useFrame((state, delta) => {
        // tree.scene.rotation.y += delta * 0.2
    })
    return <>
        <Sparkles
            size={3}
            speed={0.2}
            count={100}

        />

        <Myself />
        <Works />
        <Socials />

        <Center>
            <primitive object={tree.scene} scale={1.2} />

        </Center>
    </>
}