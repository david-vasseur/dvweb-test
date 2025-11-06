"use client";

import { ContactShadows, Float } from "@react-three/drei";
import { forwardRef, JSX } from "react";
import { Mesh } from "three";


export const LogoStory = forwardRef<Mesh, JSX.IntrinsicElements["mesh"]>((props, ref) => {
    return (
        
        <Float>
            <mesh ref={ref} position={[0, 5, 0]} {...props}>
                
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh>
            <ContactShadows
                position={[0, 4, 0]} // juste en dessous du cube à y=5
                opacity={0.6}
                scale={10}
                blur={1.5}
            />
        </Float>
    );
});
LogoStory.displayName = "LogoStory";