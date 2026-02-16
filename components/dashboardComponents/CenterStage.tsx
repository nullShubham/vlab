export const CenterStage = () => {
    return (
        <div className="flex-1 relative overflow-hidden dash-grid-bg">
            {/* Virtual Instrument — Organ Bath Illustration */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-2xl">
                    {/* Organ Bath SVG */}
                    <svg
                        viewBox="0 0 600 400"
                        className="w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Bath Container */}
                        <rect
                            x="150"
                            y="80"
                            width="300"
                            height="250"
                            rx="16"
                            fill="none"
                            stroke="#cbd5e1"
                            strokeWidth="2"
                        />
                        <rect
                            x="155"
                            y="120"
                            width="290"
                            height="205"
                            rx="10"
                            fill="#eff6ff"
                            stroke="#bfdbfe"
                            strokeWidth="1"
                        />

                        {/* Liquid Level */}
                        <rect
                            x="158"
                            y="160"
                            width="284"
                            height="162"
                            rx="8"
                            fill="url(#liquidGradientLight)"
                            opacity="0.6"
                        />

                        {/* Tissue Strip */}
                        <line
                            x1="300"
                            y1="130"
                            x2="300"
                            y2="280"
                            stroke="#007AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.7"
                        />
                        <circle cx="300" cy="130" r="5" fill="#007AFF" opacity="0.5" />
                        <circle cx="300" cy="280" r="5" fill="#007AFF" opacity="0.5" />

                        {/* Lever arm */}
                        <line
                            x1="300"
                            y1="130"
                            x2="480"
                            y2="95"
                            stroke="#94a3b8"
                            strokeWidth="2"
                        />
                        <circle cx="480" cy="95" r="4" fill="#f59e0b" />

                        {/* Recording pen */}
                        <line
                            x1="480"
                            y1="95"
                            x2="520"
                            y2="95"
                            stroke="#f59e0b"
                            strokeWidth="2"
                        />
                        <circle cx="520" cy="95" r="3" fill="#ef4444" />

                        {/* Pipette / Drug Delivery */}
                        <rect
                            x="200"
                            y="50"
                            width="8"
                            height="80"
                            rx="2"
                            fill="#94a3b8"
                            opacity="0.6"
                        />
                        <circle cx="204" cy="130" r="3" fill="#10b981" />

                        {/* Aeration Bubbles */}
                        <circle
                            cx="250"
                            cy="250"
                            r="3"
                            fill="#007AFF"
                            opacity="0.2"
                            className="animate-float"
                        />
                        <circle
                            cx="330"
                            cy="270"
                            r="2"
                            fill="#007AFF"
                            opacity="0.15"
                            className="animate-float-delayed"
                        />
                        <circle
                            cx="280"
                            cy="230"
                            r="2.5"
                            fill="#007AFF"
                            opacity="0.18"
                            className="animate-float"
                        />
                        <circle
                            cx="360"
                            cy="240"
                            r="1.8"
                            fill="#007AFF"
                            opacity="0.12"
                            className="animate-float-delayed"
                        />

                        {/* Temperature Probe */}
                        <rect
                            x="410"
                            y="140"
                            width="4"
                            height="100"
                            rx="2"
                            fill="#ef4444"
                            opacity="0.5"
                        />
                        <rect
                            x="406"
                            y="130"
                            width="12"
                            height="14"
                            rx="3"
                            fill="#64748b"
                        />

                        {/* Labels */}
                        <text
                            x="300"
                            y="360"
                            textAnchor="middle"
                            fill="#94a3b8"
                            fontSize="11"
                            fontFamily="JetBrains Mono, monospace"
                        >
                            ORGAN BATH — 50ml · 37.0°C · pH 7.4
                        </text>

                        <defs>
                            <linearGradient
                                id="liquidGradientLight"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#007AFF" stopOpacity="0.03" />
                                <stop offset="100%" stopColor="#007AFF" stopOpacity="0.12" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Aeration label */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
                        <span className="text-[9px] font-mono text-dash-text-dim uppercase tracking-widest">
                            95% O₂ / 5% CO₂
                        </span>
                    </div>
                </div>
            </div>

            {/* Floating HUD — Top Left */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-white/80 backdrop-blur-md border border-dash-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <span className="material-icons text-dash-accent text-lg!">
                        medication
                    </span>
                    <div>
                        <div className="text-[9px] text-dash-text-dim uppercase tracking-wider font-semibold">
                            Drug Conc.
                        </div>
                        <div className="text-lg font-mono font-bold text-dash-text leading-none">
                            10<sup className="text-xs">⁻⁶</sup>
                            <span className="text-xs text-dash-text-dim ml-1">M</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md border border-dash-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <span className="material-icons text-dash-emerald text-lg!">
                        show_chart
                    </span>
                    <div>
                        <div className="text-[9px] text-dash-text-dim uppercase tracking-wider font-semibold">
                            Tissue Response
                        </div>
                        <div className="text-lg font-mono font-bold text-dash-text leading-none">
                            75
                            <span className="text-xs text-dash-text-dim ml-0.5">%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating HUD — Top Right */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="bg-white/80 backdrop-blur-md border border-dash-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <span className="material-icons text-dash-danger text-lg!">
                        thermostat
                    </span>
                    <div>
                        <div className="text-[9px] text-dash-text-dim uppercase tracking-wider font-semibold">
                            Bath Temp
                        </div>
                        <div className="text-lg font-mono font-bold text-dash-text leading-none">
                            37.0
                            <span className="text-xs text-dash-text-dim ml-0.5">°C</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md border border-dash-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <span className="material-icons text-dash-accent text-lg!">
                        water_drop
                    </span>
                    <div>
                        <div className="text-[9px] text-dash-text-dim uppercase tracking-wider font-semibold">
                            Bath Volume
                        </div>
                        <div className="text-lg font-mono font-bold text-dash-text leading-none">
                            50
                            <span className="text-xs text-dash-text-dim ml-0.5">ml</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Digital Thermometer Floating Panel */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-md border border-dash-border rounded-2xl px-3 py-4 shadow-md flex flex-col items-center gap-1">
                    <span className="text-[8px] font-mono text-dash-text-dim uppercase tracking-widest">TEMP</span>
                    <div className="w-3 h-20 bg-gradient-to-t from-red-400 to-red-200 rounded-full relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-sm" />
                    </div>
                    <span className="text-xs font-mono font-bold text-dash-text">37.0°</span>
                </div>
            </div>

            {/* Center Status Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-white/80 backdrop-blur-md border border-dash-border rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                    <div
                        className="w-2 h-2 rounded-full bg-dash-emerald"
                        style={{ animation: "blink-live 1.5s ease-in-out infinite" }}
                    />
                    <span className="text-[10px] font-mono text-dash-text-dim uppercase tracking-widest">
                        Experiment Active — Recording
                    </span>
                </div>
            </div>
        </div>
    );
};
