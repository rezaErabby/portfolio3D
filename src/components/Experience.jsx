import { OrbitControls } from '@react-three/drei'
import Lights from '../lights/Lights.jsx'
import { Levels } from './Levels.jsx'
import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/rapier'
import Player from './Player.jsx'
import * as THREE from "three"
import { Cloud } from "@react-three/drei"


export default function Experience()
{
    return <>
        <Perf position="top-left" />            
        <OrbitControls makeDefault />

        <Physics debug={false}>
            <Lights />
            <Levels/>

             <Cloud scale={0.2} seed={5} fade={30} position={[0, 0.3, 0]} speed={0.8} growth={4} volume={10} opacity={1} bounds={[6, 2, 1]} />
        </Physics>
    </>
}