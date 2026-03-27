import React from 'react';
import KnowledgeHero from './KnowledgeHero';
import KnowledgeFeature from './KnowledgeFeature';
import KnowledgeStep from './KnowledgeStep';

const KnowledgeBasePage = () => {
    return (
        <div className="bg-white">
            <KnowledgeHero />
            <KnowledgeFeature />
            <KnowledgeStep />

        </div>
    );
};

export default KnowledgeBasePage;
