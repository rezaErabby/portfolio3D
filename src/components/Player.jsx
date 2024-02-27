import { RigidBody } from "@react-three/rapier";
import usePlayerStore from "../state-controllers/PlayerStore"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef ,useState} from "react"
import { useKeyboardControls } from "@react-three/drei"

import * as THREE from 'three'

export default function Player(){
    const [subscribeKeys,getKeys] = useKeyboardControls()
    const body = useRef()

    const {position} = usePlayerStore();

    console.log("position of player",position)
    const [x,y,z] = position;
    

    const [smoothedCameraPosition] = useState(()=> {
        return new THREE.Vector3(10,10,10)
    })
    const [smoothedCameraTarget] = useState(()=> {
        return new THREE.Vector3()
    })

    // useFrame((state,delta)=> {
    //     /**
    //      * Controls
    //      */
    //     const { forward, backward, leftward, rightward } = getKeys()
    //     // console.log("keys",getKeys())
    //     // console.log(forward)
    //     const impulse = { x: 0, y: 0, z: 0 }
    //     const torque = { x: 0, y: 0, z: 0 }
    //     const impulseStrength = 0.00000006 * delta
    //     const torqueStrength = 0.000002 * delta

    //     if(forward){
    //         impulse.z -= impulseStrength;
    //         torque.x -= torqueStrength
    //     }
    //     if(rightward)
    //     {
    //         impulse.x += impulseStrength
    //         torque.z -= torqueStrength
    //     }
    
    //     if(backward)
    //     {
    //         impulse.z += impulseStrength
    //         torque.x += torqueStrength
    //     }
        
    //     if(leftward)
    //     {
    //         impulse.x -= impulseStrength
    //         torque.z += torqueStrength
    //     }

    //     if(body.current){
    //         body.current.applyImpulse(impulse)
    //     body.current.applyTorqueImpulse(torque)

    //      /**
    //      * Camera
    //      */

    //      const bodyPosition = body.current.translation()
    //     //  console.log("bodyPosition",bodyPosition)
    //      const cameraPosition = new THREE.Vector3();
    //      cameraPosition.copy(bodyPosition);
    //      cameraPosition.z += 0.6
    //      cameraPosition.y += 0.25

    //      const cameraTarget = new THREE.Vector3()
    //      cameraTarget.copy(bodyPosition)
    //      cameraTarget.y += 0.025;

    //     //  console.log("bodyposition",bodyPosition)

    //      smoothedCameraPosition.lerp(cameraPosition,2 * delta)
    //      smoothedCameraTarget.lerp(cameraTarget,2 * delta)
     
    //      state.camera.position.copy(smoothedCameraPosition)
    //      state.camera.lookAt(smoothedCameraTarget)
    //     //  console.log("bodyposition",bodyPosition)
    //     }
        

    // })

    return <RigidBody
        ref={body}
        canSleep={false} 
        colliders="ball" 
        linearDamping={ 0.5 }
        angularDamping={ 0.5 }
        restitution={ 0.2 } 
        friction={ 1 }
        position={[x,1,z]} 
        scale={0.08}
    >
        <mesh castShadow >
            <icosahedronGeometry args={ [ 0.3, 1 ] } />
            <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
    </RigidBody>  

}