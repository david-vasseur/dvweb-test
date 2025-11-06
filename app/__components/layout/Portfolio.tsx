import React from 'react';

function Portfolio({ children }: { children: React.ReactNode }) {
    return (
        <section className="portfolio-section relative h-screen bg-purple-300 flex items-center justify-center">
            {children}
            <h2 className="text-5xl">Section PORTFOLIO</h2>
        </section>
    )
}

export default Portfolio;