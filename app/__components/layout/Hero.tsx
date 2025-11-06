import Link from 'next/link';

function Hero() {
    return (
        <header className="h-screen w-screen bg-linear-to-b from-gray-900 to-black text-gray-300 flex flex-col items-center justify-center gap-10">
            <h1 className="lg:text-8xl text-6xl mt-30">TITLE</h1>
            <h2 className="lg:text-4xl text-xl max-w-5xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium optio distinctio ratione, blanditiis magni consectetur fugiat? Recusandae, atque totam?</h2>
            <div className="flex gap-10">
                <Link href={'#'} className="text-2xl px-6 py-3 bg-gray-700 border border-black">CTA</Link>
                <Link href={'#'} className="text-2xl px-6 py-3 bg-gray-700 border border-black">CTA 2</Link>
            </div>
            
        </header>
    )
}

export default Hero;