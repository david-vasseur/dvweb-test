import { forwardRef, JSX, useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { ThreeEvent } from '@react-three/fiber';

export const PortfolioCards = forwardRef<Group, JSX.IntrinsicElements["group"]>((props, ref) => {
    const groupRef = useRef<Group>(null);
    const tlRef = useRef<GSAPTween | null>(null);

    const cards = Array.from({ length: 36 }, (_, i) => ({ color: i % 2 === 0 ? "red" : "yellow" }));
    const radius = 10;
    const n = cards.length;

    // Animation rotation continue
    useGSAP(() => {
        if (!groupRef.current) return;

        tlRef.current = gsap.to(groupRef.current.rotation, {
            y: "+=6.28319", // un tour complet
            duration: 120,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
        tlRef.current?.pause();
        document.body.style.cursor = "pointer";

        const mesh = e.object as THREE.Mesh;
        gsap.to(mesh.scale, {
            x: 1.2,
            y: 1.2,
            z: 1.2,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
        tlRef.current?.resume();
        document.body.style.cursor = "default";

        const mesh = e.object as THREE.Mesh;
        gsap.to(mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.3,
            ease: "power2.out",
        });
       
    };

    return (
        <group ref={(node) => {
            groupRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<Group | null>).current = node;
        }} position={[0, -10, 0]}>
            {cards.map((card, i) => {
                const angle = (i / n) * Math.PI * 2;
                const x = radius * Math.sin(angle);
                const z = radius * Math.cos(angle);

                return (
                    <mesh
                        key={i}
                        position={[x, 0, z]}
                        rotation={[0, angle + Math.PI, 0]}
                        onPointerOver={handlePointerOver}
                        onPointerOut={handlePointerOut}
                    >
                        <planeGeometry args={[1.5, 2, 1]} />
                        <meshStandardMaterial color={card.color} />
                    </mesh>
                );
            })}
        </group>
    );
});
PortfolioCards.displayName = "PortfolioCards";



