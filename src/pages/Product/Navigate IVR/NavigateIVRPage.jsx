import React, { useEffect } from 'react';
import NavigateHero from './NavigateHero';
import When from './When';
import NavigateStep from './NavigateStep';

const NavigateIVRPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            <NavigateHero />
            <When />
            <NavigateStep />
        </main>
    );
};

export default NavigateIVRPage;
