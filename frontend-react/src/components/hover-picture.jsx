<div className="flex flex-row flex-wrap gap-8 justify-center items-stretch w-full max-w-4xl">

    <div onMouseMove={handleTilt} onMouseLeave={handleTiltReset}><div className="hover-3d">
        <figure className="rounded-2xl overflow-hidden">
            <img src={calculatorimg} alt="Calculator project" className="w-full h-full object-cover" />
        </figure>
        <p className="hover-3d-title">Calculator App</p>
        <div className="hover-3d-overlay"></div>
    </div></div>

    <div onMouseMove={handleTilt} onMouseLeave={handleTiltReset}><div className="hover-3d">
        <figure className="rounded-2xl overflow-hidden">
            <img src={calculatorimg} alt="Calculator project" className="w-full h-full object-cover" />
        </figure>
        <p className="hover-3d-title">Portfolio Site</p>
        <div className="hover-3d-overlay"></div>
    </div></div>

    <div onMouseMove={handleTilt} onMouseLeave={handleTiltReset}><div className="hover-3d">
        <figure className="rounded-2xl overflow-hidden">
            <img src={calculatorimg} alt="Calculator project" className="w-full h-full object-cover" />
        </figure>
        <p className="hover-3d-title">Coming Soon</p>
        <div className="hover-3d-overlay"></div>
    </div></div>

</div>