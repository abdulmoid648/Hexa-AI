import React from "react";
import Categories from "../pages/Integration/Categories";
import IntegrationsSection from "../pages/Integration/IntegrationsSection";
import How from "../pages/Integration/How";

const IntegrationsPage = () => {
    return (
        <div className="bg-white font-sans">
            <IntegrationsSection />
            <Categories />
            <How />

        </div>
    );
};

export default IntegrationsPage;
