import { OrbitControls } from '@react-three/drei'
import Lights from '../lights/Lights.jsx'
import { Levels } from './Levels.jsx'
import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/rapier'

export default function Experience()
{
    return <>
        <Perf position="top-left" />            
        <OrbitControls makeDefault />

        <Physics>
            <Lights />

            <Levels/>
        </Physics>
    </>
}