import { useState } from "react";

const drugs = [
    { name: "Norepinephrine", type: "Agonist" },
    { name: "Acetylcholine", type: "Agonist" },
    { name: "Histamine", type: "Agonist" },
    { name: "Prazosin", type: "Antagonist" },
    { name: "Atropine", type: "Antagonist" },
];

const concentrations = ["10⁻⁹", "10⁻⁸", "10⁻⁷", "10⁻⁶", "10⁻⁵", "10⁻⁴"];

const initialLogs = [
    { time: "14:18:32", text: "Experiment session initialized", type: "info" },
    { time: "14:18:45", text: "Organ bath temperature stabilized at 37.0°C", type: "info" },
    { time: "14:19:01", text: "Tissue mounted — equilibration started", type: "info" },
    { time: "14:19:30", text: "Applied resting tension: 1.0g", type: "action" },
    { time: "14:20:01", text: "Injected 0.1ml Norepinephrine (10⁻⁷ M)", type: "action" },
    { time: "14:20:15", text: "Contraction recorded: 2.4mm deflection", type: "data" },
    { time: "14:21:00", text: "Washout initiated — 3× buffer rinse", type: "action" },
    { time: "14:22:30", text: "Baseline restored. Ready for next dose.", type: "info" },
];

const protocolSteps = [
    { step: "Mount tissue in organ bath", done: true },
    { step: "Equilibrate for 30 minutes", done: true },
    { step: "Apply resting tension (1.0g)", done: true },
    { step: "Inject Agonist — Dose 3 (10⁻⁶ M)", done: false, current: true },
    { step: "Record peak contraction", done: false },
    { step: "Perform 3× buffer washout", done: false },
    { step: "Incubate with antagonist", done: false },
    { step: "Repeat DRC with antagonist", done: false },
];

export const RightSidebar = () => {
    const [selectedDrug, setSelectedDrug] = useState(0);
    const [selectedConc, setSelectedConc] = useState(3);
    const [logs] = useState(initialLogs);
    const [injecting, setInjecting] = useState(false);

    const handleInject = () => {
        setInjecting(true);
        setTimeout(() => setInjecting(false), 1500);
    };

    return (
        <aside className="w-[300px] bg-dash-surface border-l border-dash-border flex flex-col shrink-0 overflow-hidden">
            {/* Dose Controller */}
            <div className="p-4 border-b border-dash-border">
                <h3 className="text-[10px] font-bold text-dash-text-dim uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <span className="material-icons text-dash-accent text-sm!">tune</span>
                    Dose Controller
                </h3>
                <div className="space-y-3">
                    {/* Drug Selection */}
                    <div>
                        <label className="text-[10px] text-dash-text-dim uppercase tracking-wider font-semibold block mb-1.5">
                            Drug Selection
                        </label>
                        <select
                            value={selectedDrug}
                            onChange={(e) => setSelectedDrug(parseInt(e.target.value))}
                            className="w-full text-xs font-medium bg-dash-card border border-dash-border rounded-xl px-3 py-2 text-dash-text outline-none focus:border-dash-accent focus:ring-1 focus:ring-dash-accent/20 transition-all"
                        >
                            {drugs.map((drug, i) => (
                                <option key={drug.name} value={i}>
                                    {drug.name} ({drug.type})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Concentration Magnitude */}
                    <div>
                        <label className="text-[10px] text-dash-text-dim uppercase tracking-wider font-semibold block mb-1.5">
                            Concentration (M)
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                            {concentrations.map((conc, i) => (
                                <button
                                    key={conc}
                                    onClick={() => setSelectedConc(i)}
                                    className={`text-[11px] font-mono font-bold py-2 rounded-xl border transition-all ${selectedConc === i
                                        ? "bg-dash-accent text-white border-dash-accent shadow-sm"
                                        : "bg-dash-card text-dash-text-dim border-dash-border hover:border-dash-accent/40 hover:text-dash-text"
                                        }`}
                                >
                                    {conc}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Inject Dose Button */}
                    <button
                        onClick={handleInject}
                        disabled={injecting}
                        className={`w-full mt-1 px-4 py-3 text-white text-sm font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md ${injecting
                            ? "bg-dash-emerald/70 cursor-wait"
                            : "bg-dash-accent hover:bg-blue-600 hover:shadow-lg"
                            }`}
                        style={!injecting ? { animation: "pulse-glow 3s ease-in-out infinite" } : {}}
                    >
                        <span className="material-icons text-lg!">
                            {injecting ? "hourglass_top" : "science"}
                        </span>
                        {injecting ? "Injecting..." : "💉 Inject Dose"}
                    </button>
                </div>
            </div>

            {/* Smart Step Assistant */}
            <div className="p-4 border-b border-dash-border">
                <h3 className="text-[10px] font-bold text-dash-text-dim uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <span className="material-icons text-dash-emerald text-sm!">checklist</span>
                    Protocol Guide
                </h3>
                <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                    {protocolSteps.map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-start gap-2 px-2.5 py-2 rounded-xl text-[11px] transition-all ${item.current
                                ? "bg-dash-accent/8 border border-dash-accent/20"
                                : "hover:bg-dash-card"
                                }`}
                        >
                            <span className={`material-icons text-sm! mt-px ${item.done
                                ? "text-dash-emerald"
                                : item.current
                                    ? "text-dash-accent"
                                    : "text-dash-text-dim"
                                }`}>
                                {item.done ? "check_circle" : item.current ? "arrow_circle_right" : "radio_button_unchecked"}
                            </span>
                            <span className={`leading-relaxed ${item.done
                                ? "text-dash-text-dim line-through"
                                : item.current
                                    ? "text-dash-text font-semibold"
                                    : "text-dash-text-dim"
                                }`}>
                                {item.step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action History */}
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 pt-3 pb-2 flex items-center justify-between">
                    <h3 className="text-[10px] font-bold text-dash-text-dim uppercase tracking-widest flex items-center gap-1.5">
                        <span className="material-icons text-dash-amber text-sm!">history</span>
                        Action Log
                    </h3>
                    <span className="text-[9px] font-mono text-dash-text-dim bg-dash-card px-2 py-0.5 rounded-full">
                        {logs.length} events
                    </span>
                </div>
                <div className="flex-1 overflow-y-auto px-4 pb-3 space-y-0.5">
                    {logs.map((log, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-2 py-1.5 border-b border-dash-border/50 last:border-0"
                        >
                            <span className="text-[9px] font-mono text-dash-text-dim shrink-0 mt-px">
                                [{log.time}]
                            </span>
                            <span
                                className={`text-[10px] leading-relaxed ${log.type === "action"
                                    ? "text-dash-accent font-medium"
                                    : log.type === "data"
                                        ? "text-dash-amber font-medium"
                                        : "text-dash-text-dim"
                                    }`}
                            >
                                {log.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};
