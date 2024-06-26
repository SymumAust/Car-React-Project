import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";


import "./style.css";
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera, Ring } from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Rings } from "./Ring";
import { FloatingGrid } from "./flotingGrid";

function CarShow(){
  return (
    <>
      <OrbitControls target ={[0, 0.35, 0]} maxPolarAngle={1.45}/>

      <PerspectiveCamera makeDefault fov ={50} position ={[3,2,5]}/>

      {/* <mesh>
        <boxGeometry args ={[1,1,1]}/>
        <meshBasicMaterial color ={"red"}/>
      
      </mesh> */}

      <color args={[0, 0, 0]} attach="background" />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture)=>(
          <>
            <Environment map ={texture} />
            <Car />
          </>
        )}
      </CubeCamera>
        
        {

        }
      
      

      <spotLight 
        color ={[1,0.25,0.7]}
        intensity={505.0}
        angle ={0.6}
        penumbra={0.5}
        position={[5,5,0]}
        castShadow
        shadow-bias={-0.0001}
        />
        <spotLight 
        color ={[1,0.25,0.7]}
        intensity={505.0}
        angle ={0.6}
        penumbra={0.5}
        position={[5,5,0]}
        castShadow
        shadow-bias={-0.0001}
        />
    <Rings />
    <FloatingGrid />

    
    <Ground />
    
    
    
    
    </>
    
  );
}

function App(){
  return (
    <Suspense fallback = {null}>
    <Canvas shadows>
      <CarShow />
    </Canvas>
    </Suspense>
  );
}

export default App;