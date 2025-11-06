"use client";

import { Float } from "@react-three/drei";
import { forwardRef, JSX } from "react";
import { Mesh } from "three";

export const LogoHero = forwardRef<Mesh, JSX.IntrinsicElements["mesh"]>((props, ref) => {
    return (
        <Float
            speed={2}                // vitesse de l'animation
            rotationIntensity={0.1}  // rotation
            floatIntensity={1}       // amplitude du mouvement
            floatingRange={[0, 0]}
        >
            <mesh ref={ref} position={[0, 1, -2]} {...props}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Float>
    );
});
LogoHero.displayName = "LogoHero";

