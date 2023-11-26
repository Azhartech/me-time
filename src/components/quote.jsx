import React from "react";
import QuoteAssets from '../assets/img/quoteassets.jpeg';

const Quote = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to bottom, #27272780, #000000), url(${QuoteAssets})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',    
    };

    return (
        <section style={backgroundStyle} className="p-8 ">
            <div className="mx-auto">
                <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <p className="text-2xl">Kesehatan bukan hanya tentang apa yang kamu <br />makan. Ini tentang apa yang kamu pikirkan dan <br />rasakan juga.</p><br />
                </blockquote>
            </div>
        </section>
    );
};

export default Quote;