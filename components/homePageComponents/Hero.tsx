import { useState } from "react";
import { AuthModal } from "./AuthModal";
export const Hero = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        Your Virtual <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-v1-primary to-v1-secondary">Pharma Lab</span> <br />
                        Awaits.
                    </h1>
                    <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        Master B.Pharma practicals — from pharmacology to microbiology — in a safe, interactive virtual lab. Learn anytime, anywhere.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button onClick={() => setIsAuthOpen(true)} className="group relative px-8 py-4 bg-v2-primary text-white rounded-full font-bold shadow-xl shadow-v2-primary/25 overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
                            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="flex items-center gap-2">
                                Start Experimenting
                                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                        {/* <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                        <span className="material-icons text-v2-primary">play_circle</span>
                        Watch Demo
                    </button> */}
                    </div>
                    <div className="flex items-center gap-6 pt-8 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-emerald-500 text-base">check_circle</span>
                            Zero Risk
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-emerald-500 text-base">check_circle</span>
                            Real-time Data
                        </div>
                    </div>
                </div>
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    <div className="absolute inset-0 hero-glow rounded-full filter blur-3xl transform scale-150 opacity-60"></div>
                    <div className="relative z-10 w-full h-full animate-float">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card shadow-2xl border-0 ring-1 ring-white/50">
                            <img
                                alt="Photorealistic glass flask on a desk with glowing blue liquid"
                                className="w-full h-full object-cover opacity-90"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Mnqf9nnrgYMI_SWNgHGI3E89H1pYulMBWpuiJ_XqxsFhn1Jn0ihiAfyKHf5bfFFrw5xde0TeJ6Qa6fK8yJsS40kc2eMUUKbymgD-vuEcOe12VDnWGg77_AIEnxBxiaFAyynhMfqLC93taIjadJmz7aM6X8cFws5aJHYifcrobXIM3UjRP0ix4mmt6ee6GtW62aERr01TKs-k9azED9Y3MML0aBPlR9iWaFPEPE1z2s_MzLChCA9u5N67NKrvY8--IcSqh7I2pUtq"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-v1-primary/30 to-transparent mix-blend-overlay"></div>
                            <div className="absolute top-8 right-8 glass-panel p-4 rounded-xl animate-float-delayed backdrop-blur-md bg-white/40 border-white/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-v1-primary shadow-[0_0_10px_rgba(98,0,234,0.8)]"></div>
                                    <span className="text-xs font-mono text-slate-800 font-bold uppercase">Drug Analysis</span>
                                </div>
                                <div className="w-32 h-16 bg-white/30 rounded flex items-end justify-between px-1 pb-1 gap-1">
                                    <div className="w-1/6 bg-v1-primary/40 h-[40%] rounded-sm"></div>
                                    <div className="w-1/6 bg-v1-primary/60 h-[70%] rounded-sm"></div>
                                    <div className="w-1/6 bg-v1-primary h-[50%] rounded-sm"></div>
                                    <div className="w-1/6 bg-v1-primary/80 h-[80%] rounded-sm"></div>
                                    <div className="w-1/6 bg-v1-primary/50 h-[60%] rounded-sm"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 glass-panel px-4 py-3 rounded-lg flex items-center gap-4 backdrop-blur-md bg-white/80 border-white/60">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <span className="material-icons text-emerald-600 animate-pulse">check_circle</span>
                                </div>
                                <div className="text-xs font-mono">
                                    <div className="text-slate-500 uppercase font-semibold">Experiment Complete</div>
                                    <div className="font-bold text-slate-900 text-sm">Aspirin Synthesis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -z-10 top-0 -right-12 w-32 h-32 border border-v1-primary/20 rounded-full"></div>
                    <div className="absolute -z-10 bottom-12 -left-12 w-56 h-56 border border-dashed border-v1-primary/20 rounded-full animate-spin-slow"></div>
                </div>
            </div>
        </header>
    )
}