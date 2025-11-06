import React from 'react';
import Card from '../ui/Card';

function Services() {
    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4 p-8 max-w-7xl mx-auto">
            {/* Grande card verticale */}
            <Card
                title="Créativité sans limite"
                description="Concevez des expériences immersives et visuelles."
                image="https://images.unsplash.com/photo-1506765515384-028b60a970df"
                className="md:col-span-2 md:row-span-2"
            />

            {/* 2 cartes moyennes */}
            <Card
                title="Interface épurée"
                description="Design pensé pour la clarté et l’impact."
                image="https://images.unsplash.com/photo-1557683316-973673baf926"
                className="md:col-span-2"
            />

            {/* 3 cartes plus petites */}
            <Card
                title="Performance"
                description="Optimisé pour la rapidité et la fluidité."
                image="https://images.unsplash.com/photo-1602526216034-7a3ef47b3cde"
            />
            <Card
                title="Innovation"
                description="Des concepts nouveaux, des idées fortes."
                image="https://images.unsplash.com/photo-1481277542470-605612bd2d61"
            />
        </section>
    )
}

export default Services;