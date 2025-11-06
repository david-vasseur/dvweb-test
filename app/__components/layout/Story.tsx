import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

function Story() {

    useGSAP(() => {
        gsap.set(".story-section-1 h3", {
            opacity: 0,
            scaleX: 0.4
        })

        gsap.to(".story-section-1 h3", {
            scrollTrigger: {
				trigger: ".story-section-1",
				start: "top 80%",
				end: "top top",
				scrub: 1,
			},
            opacity: 1,
            scaleX: 1
        })

        const split = new SplitText(".story-section-1 p", { 
            type: "words",
            charsClass: "word"
        });

        // Wrapper chaque char dans un span avec overflow hidden pour le mask
        split.words.forEach((word, index) => {
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'top';
            
            if (word.parentNode) {
                word.parentNode.insertBefore(wrapper, word);
                wrapper.appendChild(word);
            }
        });

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: ".story-section-1",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: (index) => index % 2 === 0 ? -100 : 100, 
            opacity: 0,
            rotationX: (index) => index % 2 === 0 ? -90 : 90,
            stagger: 0.03,
            duration: 1,
            ease: "back.out(1.7)",
        });

        gsap.set(".story-section-2 h3", {
            opacity: 0,
            scaleX: 0.4
        })

        gsap.to(".story-section-2 h3", {
            scrollTrigger: {
				trigger: ".story-section-2",
				start: "top 80%",
				end: "top top",
				scrub: 1,
			},
            opacity: 1,
            scaleX: 1
        })

        const split1 = new SplitText(".story-section-2 p", { 
            type: "words",
            charsClass: "word"
        });

        // Wrapper chaque char dans un span avec overflow hidden pour le mask
        split1.words.forEach((word, index) => {
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'top';
            
            if (word.parentNode) {
                word.parentNode.insertBefore(wrapper, word);
                wrapper.appendChild(word);
            }
        });

        gsap.from(split1.words, {
            scrollTrigger: {
                trigger: ".story-section-2",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: (index) => index % 2 === 0 ? -100 : 100, 
            opacity: 0,
            rotationX: (index) => index % 2 === 0 ? -90 : 90,
            stagger: 0.03,
            duration: 1,
            ease: "back.out(1.7)",
        });


        gsap.set(".story-section-3 h3", {
            opacity: 0,
            scaleX: 0.4
        })

        gsap.to(".story-section-3 h3", {
            scrollTrigger: {
				trigger: ".story-section-3",
				start: "top 80%",
				end: "top top",
				scrub: 1,
			},
            opacity: 1,
            scaleX: 1
        })

        const split3 = new SplitText(".story-section-3 p", { 
            type: "words",
            charsClass: "word"
        });

        // Wrapper chaque char dans un span avec overflow hidden pour le mask
        split3.words.forEach((word, index) => {
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'top';
            
            if (word.parentNode) {
                word.parentNode.insertBefore(wrapper, word);
                wrapper.appendChild(word);
            }
        });

        gsap.from(split3.words, {
            scrollTrigger: {
                trigger: ".story-section-3",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: (index) => index % 2 === 0 ? -100 : 100, 
            opacity: 0,
            rotationX: (index) => index % 2 === 0 ? -90 : 90,
            stagger: 0.03,
            duration: 1,
            ease: "back.out(1.7)",
        });

    })

    return (
        <section className="story-section">
            <div className="story-section-1 h-screen flex items-center container mx-auto">
                <div className="lg:flex-2"></div>
                <div className="lg:flex-1 lg:text-right text-center">
                    <h3 className="text-5xl mb-8 font-bold">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem corrupti! Fugiat eligendi sed eos maiores excepturi quod ab, vitae ea aut exercitationem consectetur cupiditate quidem aliquid maxime officiis ipsum!</p>
                </div>
            </div>
            <div className="story-section-2 h-screen flex items-center container mx-auto">
                <div className="lg:flex-1 lg:text-left text-center">
                    <h3 className="text-5xl mb-8">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem corrupti! Fugiat eligendi sed eos maiores excepturi quod ab, vitae ea aut exercitationem consectetur cupiditate quidem aliquid maxime officiis ipsum!</p>
                </div>
                <div className="lg:flex-2"></div>
            </div>
            <div className="story-section-3 h-screen flex items-center container mx-auto">
                <div className="lg:flex-2"></div>
                <div className="lg:flex-1 lg:text-right text-center">
                    <h3 className="text-5xl mb-8">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem corrupti! Fugiat eligendi sed eos maiores excepturi quod ab, vitae ea aut exercitationem consectetur cupiditate quidem aliquid maxime officiis ipsum!</p>
                </div>
            </div>
        </section>
    )
}

export default Story;