import { useState, useEffect } from "react";

const steps = ["Background", "Setup", "Execution", "Results"];

export const DashboardHeader = () => {
    const [activeStep, setActiveStep] = useState(2);
    const [clock, setClock] = useState("");

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            setClock(
                now.toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <header className="h-14 bg-dash-surface border-b border-dash-border flex items-center px-4 gap-6 shrink-0 z-30 shadow-sm">
            {/* Left — Experiment Objective */}
            <div className="flex items-center gap-3 min-w-0">
                <div
                    className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"
                    style={{ animation: "blink-live 2s ease-in-out infinite" }}
                />
                <h1 className="text-sm font-semibold text-dash-text truncate">
                    pA2 Determination of Prazosin
                </h1>
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">
                    Live
                </span>
            </div>

            {/* Center — Progress Tracker */}
            <nav className="hidden md:flex items-center gap-1 mx-auto">
                {steps.map((step, i) => (
                    <button
                        key={step}
                        onClick={() => setActiveStep(i)}
                        className="flex items-center gap-1.5 group"
                    >
                        <div
                            className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center border-2 transition-all ${i < activeStep
                                ? "bg-dash-accent/15 border-dash-accent text-dash-accent"
                                : i === activeStep
                                    ? "bg-dash-accent border-dash-accent text-white"
                                    : "border-dash-border text-dash-text-dim"
                                }`}
                        >
                            {i < activeStep ? (
                                <span className="material-icons text-sm!">check</span>
                            ) : (
                                i + 1
                            )}
                        </div>
                        <span
                            className={`text-xs font-medium transition-colors ${i === activeStep ? "text-dash-accent" : "text-dash-text-dim"
                                }`}
                        >
                            {step}
                        </span>
                        {i < steps.length - 1 && (
                            <div
                                className={`w-8 h-px mx-1 ${i < activeStep ? "bg-dash-accent/40" : "bg-dash-border"
                                    }`}
                            />
                        )}
                    </button>
                ))}
            </nav>

            {/* Right — Stats + Actions + Clock */}
            <div className="flex items-center gap-3 ml-auto shrink-0">
                {/* Lab Stats (moved from bottom panel) */}
                <div className="hidden xl:flex items-center gap-3 text-[10px] font-mono border-r border-dash-border pr-3 mr-1">
                    <span className="text-dash-text-dim">Agonist: <span className="text-dash-accent font-bold">NE</span></span>
                    <span className="text-dash-text-dim">Response: <span className="text-dash-emerald font-bold">75%</span></span>
                    <span className="text-dash-text-dim">Temp: <span className="text-dash-text font-bold">37°C</span></span>
                    <span className="text-dash-text-dim">pH: <span className="text-dash-text font-bold">7.4</span></span>
                </div>
                <span className="hidden lg:inline text-xs font-mono text-dash-text-dim font-semibold">
                    {clock}
                </span>
                <button className="px-3 py-1.5 bg-dash-accent text-white text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-blue-600 transition-colors shadow-sm">
                    <span className="material-icons text-sm!">description</span>
                    Generate Pro Report
                </button>
                <button className="px-3 py-1.5 bg-red-50 border border-red-200 text-red-600 text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-red-100 transition-colors">
                    <span className="material-icons text-sm!">restart_alt</span>
                    Emergency Reset
                </button>
            </div>
        </header>
    );
};
