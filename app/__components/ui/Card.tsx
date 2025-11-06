import React from 'react';

function Card({ title, description, image, className }: {
    title: string;
    description: string;
    image: string;
    className?: string;
    }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl bg-neutral-900 text-white p-6 flex flex-col justify-end shadow-lg hover:scale-[1.02] transition-transform duration-300 ${className}`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm opacity-80">{description}</p>
            </div>
        </div>
    );
}

export default Card;