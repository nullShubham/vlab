export const BottomPanel = () => {
    // Mock data points for the chymograph
    const channel1 = [20, 35, 28, 45, 52, 48, 60, 55, 72, 68, 78, 82, 75, 88, 92, 85, 95, 90, 98, 94];
    const channel2 = [50, 45, 55, 42, 48, 38, 35, 40, 32, 36, 28, 30, 25, 22, 20, 18, 15, 12, 10, 8];

    const chartW = 900;
    const chartH = 120;
    const padX = 50;
    const padY = 10;
    const dataW = chartW - padX * 2;
    const dataH = chartH - padY * 2;

    const toPath = (data: number[]) => {
        const maxVal = 100;
        return data
            .map((v, i) => {
                const x = padX + (i / (data.length - 1)) * dataW;
                const y = padY + dataH - (v / maxVal) * dataH;
                return `${i === 0 ? "M" : "L"} ${x} ${y}`;
            })
            .join(" ");
    };

    const xLabels = ["0s", "5s", "10s", "15s", "20s", "25s", "30s", "35s", "40s", "45s"];
    const yLabels = ["100", "75", "50", "25", "0"];

    return (
        <div className="shrink-0 flex flex-col border-t border-dash-border">
            {/* Chymograph Feed — Dark contrast panel */}
            <div className="h-40 bg-[#0c1425] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#1e2d3d]">
                    <div className="flex items-center gap-3">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Chymograph Feed
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#007AFF]" style={{ animation: "blink-live 1.5s ease-in-out infinite" }} />
                            <span className="text-[9px] font-mono text-[#007AFF]">RECORDING</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-mono">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-0.5 bg-[#007AFF] rounded" />
                            <span className="text-slate-500">Contraction (mm)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-0.5 bg-[#f59e0b] rounded" />
                            <span className="text-slate-500">Relaxation (%)</span>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="flex-1 px-2 py-1 overflow-hidden">
                    <svg
                        viewBox={`0 0 ${chartW} ${chartH}`}
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >
                        {/* Grid Lines */}
                        {yLabels.map((_, i) => {
                            const y = padY + (i / (yLabels.length - 1)) * dataH;
                            return (
                                <line
                                    key={`h-${i}`}
                                    x1={padX}
                                    y1={y}
                                    x2={chartW - padX}
                                    y2={y}
                                    stroke="#1e2d3d"
                                    strokeWidth="0.5"
                                />
                            );
                        })}
                        {xLabels.map((_, i) => {
                            const x = padX + (i / (xLabels.length - 1)) * dataW;
                            return (
                                <line
                                    key={`v-${i}`}
                                    x1={x}
                                    y1={padY}
                                    x2={x}
                                    y2={chartH - padY}
                                    stroke="#1e2d3d"
                                    strokeWidth="0.5"
                                />
                            );
                        })}

                        {/* Y-axis labels */}
                        {yLabels.map((label, i) => {
                            const y = padY + (i / (yLabels.length - 1)) * dataH;
                            return (
                                <text
                                    key={`yl-${i}`}
                                    x={padX - 8}
                                    y={y + 3}
                                    textAnchor="end"
                                    fill="#475569"
                                    fontSize="7"
                                    fontFamily="JetBrains Mono, monospace"
                                >
                                    {label}
                                </text>
                            );
                        })}

                        {/* X-axis labels */}
                        {xLabels.map((label, i) => {
                            const x = padX + (i / (xLabels.length - 1)) * dataW;
                            return (
                                <text
                                    key={`xl-${i}`}
                                    x={x}
                                    y={chartH - 1}
                                    textAnchor="middle"
                                    fill="#475569"
                                    fontSize="7"
                                    fontFamily="JetBrains Mono, monospace"
                                >
                                    {label}
                                </text>
                            );
                        })}

                        {/* Channel 1 — Contraction (Medical Blue) */}
                        <path
                            d={toPath(channel1)}
                            fill="none"
                            stroke="#007AFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d={`${toPath(channel1)} L ${chartW - padX} ${chartH - padY} L ${padX} ${chartH - padY} Z`}
                            fill="url(#blueGrad)"
                            opacity="0.2"
                        />

                        {/* Channel 2 — Relaxation (Amber) */}
                        <path
                            d={toPath(channel2)}
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d={`${toPath(channel2)} L ${chartW - padX} ${chartH - padY} L ${padX} ${chartH - padY} Z`}
                            fill="url(#amberGradDark)"
                            opacity="0.1"
                        />

                        {/* Data point dots — last point highlighted */}
                        <circle
                            cx={padX + dataW}
                            cy={padY + dataH - (channel1[channel1.length - 1] / 100) * dataH}
                            r="3"
                            fill="#007AFF"
                            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                        />
                        <circle
                            cx={padX + dataW}
                            cy={padY + dataH - (channel2[channel2.length - 1] / 100) * dataH}
                            r="3"
                            fill="#f59e0b"
                        />

                        <defs>
                            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#007AFF" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#007AFF" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="amberGradDark" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Data Persistence Footer Bar */}
            <div className="h-9 bg-dash-surface border-t border-dash-border flex items-center px-4 gap-6">
                <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-dash-text-dim">Current Agonist:</span>
                    <span className="text-dash-accent font-bold">Norepinephrine</span>
                </div>
                <div className="w-px h-4 bg-dash-border" />
                <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-dash-text-dim">Calculated Response:</span>
                    <span className="text-dash-emerald font-bold">75%</span>
                </div>
                <div className="w-px h-4 bg-dash-border" />
                <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-dash-text-dim">Lab Environment:</span>
                    <span className="text-dash-text font-bold">37°C</span>
                </div>
                <div className="w-px h-4 bg-dash-border" />
                <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-dash-text-dim">pH:</span>
                    <span className="text-dash-text font-bold">7.4</span>
                </div>
                <div className="ml-auto flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-dash-text-dim">Aeration:</span>
                    <span className="text-dash-emerald font-bold">95% O₂ / 5% CO₂</span>
                </div>
            </div>
        </div>
    );
};
