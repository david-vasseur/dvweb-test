"use client"

import { usePinStore } from '@/store/pinstore';
import { Environment, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { forwardRef, ReactNode, Suspense } from 'react';

type SceneProps = {
    children?: ReactNode;
};

const CanvasScene2 = forwardRef<HTMLDivElement, SceneProps>((props, ref) => {

    const { children } = props;
    const isPinned = usePinStore((state) => state.isPinned);

    return (
        <div ref={ref} className={`absolute inset-0 w-screen h-screen`}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 35 }}
                frameloop='always'
            >
                <Environment 
                    files={'/neon_photostudio_2k.hdr'}
                    background={false}
                    resolution={4096}
                    environmentIntensity={1}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <Suspense fallback={false}>
                    {children}
                </Suspense>            
            </Canvas>
        </div>
    )
})

CanvasScene2.displayName = "CanvasScene2";

export default CanvasScene2;