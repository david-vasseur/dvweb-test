// import React from 'react';

// function Faq() {
//     return (
//         <section className="container mx-auto h-screen bg-yellow-300 flex items-center justify-center">
//             <h2 className="text-5xl">Section FAQ</h2>
//         </section>
//     )
// }

// export default Faq;


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Faq = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const faqData = [
        {
        question: "Comment fonctionne le service ?",
        answer: "Nous simplifions le processus en automatisant la gestion et en offrant un accompagnement personnalisé.",
        bg: "#fef3c7",
        },
        {
        question: "Puis-je annuler à tout moment ?",
        answer: "Oui, vous pouvez résilier sans engagement, directement depuis votre espace client.",
        bg: "#bfdbfe",
        },
        {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons les paiements par carte, virement et prélèvement SEPA.",
        bg: "#bbf7d0",
        },
        {
        question: "Offrez-vous un support client ?",
        answer: "Notre équipe est disponible 7j/7 par chat ou email pour répondre à toutes vos questions.",
        bg: "#fecaca",
        },
        {
        question: "Y a-t-il une période d’essai ?",
        answer: "Oui, vous bénéficiez de 14 jours gratuits pour découvrir la plateforme sans engagement.",
        bg: "#e9d5ff",
        },
    ];

    useGSAP(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${faqData.length * 100}%`,
            scrub: true,
            pin: section,
            pinSpacing: true,
            },
        });

        faqData.forEach((item, i) => {
            tl.to(content, {
            backgroundColor: item.bg,
            duration: 1,
            })
            .to("#faq-question", { opacity: 0, y: -30, duration: 0.3 })
            .to("#faq-answer", { opacity: 0, y: -30, duration: 0.3 }, "<")
            .call(() => {
                const q = document.getElementById("faq-question");
                const a = document.getElementById("faq-answer");
                if (q && a) {
                q.textContent = item.question;
                a.textContent = item.answer;
                }
            })
            .to("#faq-question", { opacity: 1, y: 0, duration: 0.5 })
            .to("#faq-answer", { opacity: 1, y: 0, duration: 0.5 }, "<");
        });
    }, []);

    return (
        <section
        ref={sectionRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
        <div
            ref={contentRef}
            className="w-full h-full flex flex-col items-center justify-center text-center transition-colors duration-700 p-8"
            style={{ backgroundColor: faqData[0].bg }}
        >
            <h2
            id="faq-question"
            className="text-3xl md:text-5xl font-bold mb-6"
            >
            {faqData[0].question}
            </h2>
            <p id="faq-answer" className="text-lg md:text-2xl max-w-2xl">
            {faqData[0].answer}
            </p>
        </div>
        </section>
    );
};

export default Faq;
