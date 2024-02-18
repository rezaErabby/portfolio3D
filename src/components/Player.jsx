import { RigidBody } from "@react-three/rapier";
import usePlayerStore from "../state-controllers/PlayerStore"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef ,useState} from "react"
import * as THREE from 'three'

export default function Player(){
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

    useFrame((state,delta)=> {
         /**
         * Camera
         */

        //  const bodyPosition = body.current.translation()
        //  const cameraPosition = new THREE.Vector3();
        //  cameraPosition.copy(bodyPosition);
        //  cameraPosition.z += 2.25
        //  cameraPosition.y += 0.65

        //  const cameraTarget = new THREE.Vector3()
        //  cameraTarget.copy(bodyPosition)
        //  cameraTarget.y += 0.25;

        // //  console.log("bodyposition",bodyPosition)

        //  smoothedCameraPosition.lerp(cameraPosition,5 * delta)
        //  smoothedCameraTarget.lerp(cameraTarget,5 * delta)
     
        //  state.camera.position.copy(smoothedCameraPosition)
        //  state.camera.lookAt(smoothedCameraTarget)
    })

    return <RigidBody
        ref={body}
        canSleep={false} 
        colliders="ball" 
        linearDamping={ 0.5 }
        angularDamping={ 0.5 }
        restitution={ 0.2 } 
        friction={ 1 }
        position={[x,1,z]} 
        scale={0.1}
    >
        <mesh castShadow >
            <icosahedronGeometry args={ [ 0.3, 1 ] } />
            <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
    </RigidBody>  

}