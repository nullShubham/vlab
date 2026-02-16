import { useState } from "react";

interface NavItem {
    icon: string;
    label: string;
    content: { title: string; body: string };
}

const navItems: NavItem[] = [
    {
        icon: "menu_book",
        label: "Theory",
        content: {
            title: "Theoretical Background",
            body: "The pA2 value is a measure of the potency of a competitive antagonist. It is defined as the negative logarithm of the molar concentration of antagonist that necessitates doubling the agonist concentration to produce the same response.\n\nSchild's analysis involves constructing a dose-response curve for the agonist alone, then repeating it in the presence of increasing concentrations of the antagonist. The dose ratios (DR) are plotted on a Schild plot: log(DR-1) vs. log[antagonist].\n\nA Schild plot with a slope of 1.0 confirms competitive antagonism. The x-intercept gives the pA2 value, which equals -log(Kb), where Kb is the equilibrium dissociation constant of the antagonist.",
        },
    },
    {
        icon: "science",
        label: "Equipment",
        content: {
            title: "Equipment List",
            body: "• Organ Bath (50ml capacity, thermostatically controlled)\n• Sherrington Recording Lever\n• Digital Kymograph / Chymograph\n• Micropipettes (10μl – 1000μl)\n• Aerator (95% O₂ / 5% CO₂)\n• Digital Thermometer (±0.1°C)\n• Krebs-Henseleit Physiological Solution\n• Drug Solutions:\n  – Norepinephrine (Agonist, 10⁻⁹ to 10⁻⁴ M)\n  – Prazosin (Antagonist, 10⁻⁸ to 10⁻⁵ M)\n• Isolated Tissue (Rat Vas Deferens / Guinea Pig Ileum)",
        },
    },
    {
        icon: "health_and_safety",
        label: "Safety",
        content: {
            title: "Safety Precautions",
            body: "⚠ Always wear protective gloves when handling drug solutions.\n⚠ Ensure organ bath temperature is maintained at 37°C ± 0.5°C.\n⚠ Use fresh Krebs solution — do not reuse aerated buffer.\n⚠ Dispose of biological tissue per institutional biosafety protocols.\n⚠ Record all drug concentrations accurately to avoid dosing errors.\n⚠ Never pipette by mouth — use mechanical pipettes only.\n⚠ Wash hands thoroughly after handling tissue preparations.",
        },
    },
    {
        icon: "assignment",
        label: "Protocol",
        content: {
            title: "pA2 Determination Protocol",
            body: "1. Prepare fresh Krebs-Henseleit solution and aerate with 95% O₂ / 5% CO₂.\n2. Mount the isolated tissue in the organ bath at 37°C.\n3. Allow 30-minute equilibration period with regular wash cycles.\n4. Apply initial resting tension of 1.0g.\n5. Construct control dose-response curve (DRC) with Norepinephrine (10⁻⁹ to 10⁻⁴ M).\n6. Wash tissue and allow 15-min recovery.\n7. Incubate with Prazosin (first concentration) for 30 min.\n8. Repeat DRC with Norepinephrine in presence of Prazosin.\n9. Repeat steps 6–8 with increasing Prazosin concentrations.\n10. Calculate dose ratios and construct Schild's regression plot.\n11. Determine pA2 from the x-intercept.",
        },
    },
];

export const LeftNav = () => {
    const [activeDrawer, setActiveDrawer] = useState<number | null>(null);

    const toggleDrawer = (index: number) => {
        setActiveDrawer(activeDrawer === index ? null : index);
    };

    return (
        <>
            {/* Vertical Icon Bar */}
            <nav className="w-14 bg-dash-surface border-r border-dash-border flex flex-col items-center py-3 gap-1 shrink-0 z-20">
                {navItems.map((item, i) => (
                    <button
                        key={item.label}
                        onClick={() => toggleDrawer(i)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group relative ${activeDrawer === i
                            ? "bg-dash-accent/10 text-dash-accent shadow-sm"
                            : "text-dash-text-dim hover:text-dash-text hover:bg-dash-card"
                            }`}
                        title={item.label}
                    >
                        <span className="material-icons text-xl!">{item.icon}</span>
                        {/* Tooltip */}
                        <span className="absolute left-full ml-2 px-2 py-1 bg-white border border-dash-border rounded-lg text-[10px] font-medium text-dash-text whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* Glassmorphism Drawer */}
            {activeDrawer !== null && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm"
                        onClick={() => setActiveDrawer(null)}
                    />
                    {/* Drawer */}
                    <div className="fixed top-14 left-14 bottom-0 w-80 z-40 bg-white/95 backdrop-blur-xl border-r border-dash-border shadow-2xl shadow-black/10 overflow-y-auto">
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-sm font-bold text-dash-text flex items-center gap-2">
                                    <span className="material-icons text-dash-accent text-lg!">
                                        {navItems[activeDrawer].icon}
                                    </span>
                                    {navItems[activeDrawer].content.title}
                                </h3>
                                <button
                                    onClick={() => setActiveDrawer(null)}
                                    className="w-7 h-7 rounded-lg bg-dash-card hover:bg-dash-border flex items-center justify-center text-dash-text-dim hover:text-dash-text transition-colors"
                                >
                                    <span className="material-icons text-sm!">close</span>
                                </button>
                            </div>
                            <div className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                                {navItems[activeDrawer].content.body}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
