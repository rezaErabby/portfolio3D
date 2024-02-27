import { Center, useGLTF, Sparkles,Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef,useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from 'three'
import usePlayerStore from "../state-controllers/PlayerStore";
import Player from "./Player";
import DescriptionComponent from "./MyDescriptionSideMenu";

const boxGeometry = new THREE.ConeGeometry(2, 1.3, 15)
const floor1Material = new THREE.MeshStandardMaterial({ color: '#5f504b' })


export function Myself({ position = [0, 0, 0] , onPointerEnter}) {

    const [showDescription, setShowDescription] = useState(false);

    const showMyDescription = () => {
      setShowDescription(true);
    };
  
    const hideMyDescription = () => {
      setShowDescription(false);
    };

    const tree1 = useGLTF('../models/tree1.gltf')
    const chair = useGLTF('../models/chair.gltf')
    const table = useGLTF('../models/table.gltf')
    const { nodes, materials } = useGLTF('../models/lamppost.gltf')
    const smallBookshelf = useGLTF('../models/smallbookshelf.gltf')



    return <group position={position}>
        <RigidBody type="fixed" colliders="hull" restitution={0.6}>
         <mesh onPointerEnter={onPointerEnter} geometry={boxGeometry} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
         <primitive object={tree1.scene} scale={0.04}  position={[0,0.07,-0.4]}/>
         <primitive object={chair.scene} scale={0.05}  position={[0.1,0.07,-0.4]}/>
         <primitive object={table.scene} scale={0.05}  position={[0.1,0.07,-0.33]}/>
         <primitive object={smallBookshelf.scene} scale={0.05}  position={[0.21,0.07,-0.4]} rotation-y={2.1}/>
         <group dispose={null} scale={0.05}  position={[0.21,0.07,-0.31]} rotation-y={2.1}>
            <mesh
                geometry={nodes.Cylinder096.geometry}
                material={materials["Black.012"]}
            />
            <mesh
                geometry={nodes.Cylinder096_1.geometry}
                material={materials["Yellow.007"]}
            >
                <meshBasicMaterial color={[1.2, 1.2, 0.6]} toneMapped={false} />
            </mesh>
        </group>

        </RigidBody>
        <Sparkles
            size={0.5}
            speed={0.2}
            count={40}
            scale={[.4,.2,.4]}
            position={[0,0.4,-0.4]}
        />

       <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            intensity={2}
            radius={0.72}
          />
        </EffectComposer> 

        <Html occlude position={[0, 0.7, 0]}>
            {/* Anything in here is regular HTML, these markers are from font-awesome */}
            <button onClick={showMyDescription}>Me</button>

            {showDescription && (
            <DescriptionComponent onClose={hideMyDescription} />
          )}
        </Html>
    </group>
}

export function Works({ position = [0, 0, 0] }) {
    const tree2 = useGLTF('../models/tree2.gltf')

    return <group position={position} >
        <RigidBody type="fixed" colliders="hull">
            <mesh geometry={boxGeometry} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
            <primitive object={tree2.scene} scale={0.02}  position={[-0.4, 0.07, 0]}/>

        </RigidBody>
        <Html occlude position={[0, 0.7, 0]}>
            {/* Anything in here is regular HTML, these markers are from font-awesome */}
            <button>Works</button>
          </Html>
    </group>
}

export function Socials({ position = [0, 0, 0] }) {
    const tree3 = useGLTF('../models/tree3.gltf')

    return <group position={position} >
        <RigidBody type="fixed" colliders="hull">
            <mesh geometry={boxGeometry} scale={[0.3, -0.1, 0.3]} receiveShadow material={floor1Material} />
            <primitive object={tree3.scene} scale={0.02}  position={[0.4, 0.07, 0]}/>

        </RigidBody>
        <Html occlude position={[0, 0.7, 0]}>
            {/* Anything in here is regular HTML, these markers are from font-awesome */}
            <button>Find Me</button>
          </Html>
    </group>
}

export function Levels() {
    const { scene } = useGLTF('../models/model.gltf');
    let positionOfMyselfLevel = [1.05, 0.89, 0.1]
    let positionOfWorksLevel = [-1.05, 0.85, 0.1]
    let positionOfSocialsLevel = [0.08, 1.8, -0.45]
    const { updatePosition } = usePlayerStore();
  
    useEffect(() => {
      updatePosition(positionOfMyselfLevel);
    }, [])
  
    return (
      <>
        <Myself position={positionOfMyselfLevel} />
        <Works position={positionOfWorksLevel}/>
        <Socials position={positionOfSocialsLevel}/>
        <Player />
        <Center>
          <primitive object={scene} scale={1.2} />
        </Center>
      </>
    );
  }
  