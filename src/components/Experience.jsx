import { OrbitControls } from '@react-three/drei'
import Lights from '../lights/Lights.jsx'
import { Levels } from './Levels.jsx'
import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/rapier'
import Player from './Player.jsx'

export default function Experience()
{
    return <>
        <Perf position="top-left" />            
        <OrbitControls makeDefault />

        <Physics debug>
            <Lights />
            <Levels/>
        </Physics>
    </>
}