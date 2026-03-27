import React, { useEffect } from 'react';
import PostHero from './PostHero';
import What from './What';

const PostCallPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <PostHero />
            <What />
        </div>
    );
};

export default PostCallPage;
