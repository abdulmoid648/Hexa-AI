import Hero from "../pages/Landing-Page/Hero";
import Features from "../pages/Landing-Page/Features";
import Enterprise from "../pages/Landing-Page/Enterprise";
import Integration from "../pages/Landing-Page/Integration";
import LiveDemo from "../pages/Landing-Page/Live-Demo";


const Page = () => {
    return (
        <div className="bg-white text-slate-900">
            <Hero />
            <Features />
            <Enterprise />
            <Integration />
            <LiveDemo />
        </div>
    );
};

export default Page;
