"use client"

import gsap from "gsap";
import CanvasScene from "./__components/3d/CanvasScene";
import { LogoHero } from "./__components/3d/LogoHero";
import { LogoStory } from "./__components/3d/LogoStory";
import Hero from "./__components/layout/Hero";
import Story from "./__components/layout/Story";
import { useRef } from "react";
import * as THREE from 'three';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./__components/layout/Services";
import { useGSAP } from "@gsap/react";
import Portfolio from "./__components/layout/Portfolio";
import { PortfolioCards } from "./__components/3d/PortfolioCards";
import { SplitText } from "gsap/SplitText";
import Faq from "./__components/layout/Faq";
import Footer from "./__components/layout/Footer";
import { usePinStore } from "@/store/pinstore";
import CanvasScene2 from "./__components/3d/CanvasScene2";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
	const heroRef = useRef<THREE.Mesh>(null!);
	const storyRef = useRef<THREE.Mesh>(null!);	
	const canvasRef = useRef(null!);	
	const cardsRef = useRef<THREE.Group>(null!);
	const setPinned = usePinStore.getState().setPinned;

	useGSAP(() => {
		const waitForRefs = () => {
			if (!heroRef.current || !storyRef.current || !cardsRef.current) {
				requestAnimationFrame(waitForRefs);
				return;
			}

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".story-section",
					start: "top bottom",
					end: "bottom bottom",
					scrub: 1.8,
					onUpdate: (self) => {
						if (self.progress === 1) {
							setPinned("true"); // pin activé quand bottom bottom atteint
						} else {
							setPinned("false"); // désactive pin sinon (y compris si on remonte)
						}
					},
				},
			});

			tl.to(heroRef.current.position, { z: 5, y: 0 , duration: 1 }, 0)
			.to(storyRef.current.position, { y: 0, duration: 1 }, 0)
			// enchaînement des mouvements latéraux
			.to(storyRef.current.position, { x: -1, duration: 1 })
			.to(storyRef.current.position, { x: 0, duration: 1 })
			.to(storyRef.current.position, { x: 1, duration: 1 })
			.to(storyRef.current.position, { x: 0, duration: 1 })
			.to(storyRef.current.position, { x: -1, duration: 1 });

			const tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: ".portfolio-section",
					start: "top bottom",
					end: "top top",
					scrub: 1,
					// onUpdate: (self) => {
					// 	if (self.progress === 1) {
					// 		setPinned("portfolio"); 
					// 	} else {
					// 		setPinned("portfolio"); // désactive pin sinon (y compris si on remonte)
					// 	}
					// },
				},
			});

			tl2.to(cardsRef.current.position, { y: 0, duration: 1 })

			return () => ScrollTrigger.getAll().forEach(st => st.kill());
		};

		waitForRefs();
	}, []);


	return (
		<main className="relative overflow-x-hidden bg-linear-to-b from-gray-900 to-black text-gray-300">
			<CanvasScene ref={canvasRef}>
				<LogoHero ref={heroRef} />			
				<LogoStory ref={storyRef} />				
			</CanvasScene>
			<Hero />
			<Story />
			<Services />
			<Portfolio>
				<CanvasScene2>
					<PortfolioCards ref={cardsRef} />
				</CanvasScene2>
			</Portfolio>
			<Faq />
			<Footer />
		</main>
	);
}
