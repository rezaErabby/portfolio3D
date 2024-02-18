import { Center, useGLTF, Sparkles } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import usePlayerStore from "../state-controllers/PlayerStore";
import Player from "./Player";
const boxGeometry = new THREE.ConeGeometry(2, 1.3, 15)
const floor1Material = new THREE.MeshStandardMaterial({ color: '#5f504b' })

export function Myself({ position = [0, 0, 0] , onPointerEnter}) {

    return <group position={position}>
        <RigidBody type="fixed" colliders="hull">
         <mesh onPointerEnter={onPointerEnter} geometry={boxGeometry} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
        </RigidBody>
    </group>
}

export function Works({ position = [0, 0, 0] }) {
    return <group position={position} >
        <RigidBody type="fixed" colliders="hull">
            <mesh geometry={boxGeometry} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
        </RigidBody>
    </group>
}

export function Socials({ position = [0, 0, 0] }) {
    return <group position={position} >
        <RigidBody type="fixed" colliders="hull">
            <mesh geometry={boxGeometry} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
        </RigidBody>
    </group>
}

export function Levels() {
    const tree = useGLTF('../models/model.gltf');
    console.log("tree",tree);
   let positionOfMyselfLevel = [1.05, 0.89, 0.1]
   let positionOfWorksLevel = [-1.05, 0.85, 0.1]
   let positionOfSocialsLevel = [0.08, 1.8, -0.45]
   const { updatePosition } = usePlayerStore();


   useEffect(()=> {
    updatePosition(positionOfMyselfLevel);
 
   },[])

   const showInfo = (event) => {
        console.log("pointer has entered",event);
   }

    return <>
        <Sparkles
            size={3}
            speed={0.2}
            count={100}

        />

        <Myself position={positionOfMyselfLevel}  onPointerEnter = {showInfo} />
        <Works position={positionOfWorksLevel}/>
        <Socials position={positionOfSocialsLevel}/>
        <Player />

        <Center>
         <primitive object={tree.scene} scale={1.2} />

        </Center>
    </>
}