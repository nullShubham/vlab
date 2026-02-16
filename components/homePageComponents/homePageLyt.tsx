import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AuthModal } from "./AuthModal";
import { useState } from "react";
function HomePage() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <div className="font-display bg-background-light text-slate-800 min-h-screen relative flex flex-col overflow-x-hidden">
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-2/3 h-2/3 bg-linear-to-bl from-v2-primary/5 via-v2-accent/5 to-transparent rounded-bl-full blur-3xl -z-10"></div>

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <Hero />


            {/* Core Disciplines */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold text-v1-primary tracking-widest uppercase mb-3">Core Disciplines</h2>
                        <h3 className="text-4xl font-bold text-slate-900">Built for Pharma & Life Sciences</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-2xl group hover:border-v1-primary/50 relative overflow-hidden bg-slate-50">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-icons text-9xl! text-v1-primary transform rotate-12">medication</span>
                            </div>
                            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-v1-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white">medication</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Pharmacology</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Study drug actions, mechanisms, and therapeutic effects through interactive simulations of pharmacokinetics and pharmacodynamics.
                            </p>
                            <a className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-v1-primary hover:font-bold" href="#">
                                Explore Pharmacology <span className="material-icons text-xs!">arrow_forward</span>
                            </a>
                        </div>
                        <div className="glass-card p-8 rounded-2xl group hover:border-v1-primary/50 relative overflow-hidden bg-slate-50">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-icons text-9xl! text-v1-primary transform rotate-12">biotech</span>
                            </div>
                            <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-v1-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl text-purple-600 group-hover:text-white">biotech</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Microbiology</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Explore bacteria, viruses, and fungi in a virtual microbiology lab. Perform gram staining, culture techniques, and pathogen identification.
                            </p>
                            <a className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-v1-primary hover:font-bold" href="#">
                                Explore Microbiology <span className="material-icons text-xs!">arrow_forward</span>
                            </a>
                        </div>
                        <div className="glass-card p-8 rounded-2xl group hover:border-v1-primary/50 relative overflow-hidden bg-slate-50">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-icons text-9xl! text-v1-primary transform rotate-12">accessibility_new</span>
                            </div>
                            <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-v1-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl text-emerald-600 group-hover:text-white">accessibility_new</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Human Anatomy & Physiology</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Navigate the human body system by system. Study organ functions, skeletal structure, and physiological processes in 3D.
                            </p>
                            <a className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-v1-primary hover:font-bold" href="#">
                                Explore Anatomy <span className="material-icons text-xs!">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured Modules */}
            <section className="py-24 relative overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid)" height="100%" width="100%"></rect>
                </svg>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Featured Lab Modules</h2>
                            <p className="text-slate-500 max-w-xl">
                                Dive into B.Pharma and life science experiments. Our virtual lab library is constantly expanding with new practicals.
                            </p>
                        </div>
                        <a className="text-v1-primary font-semibold hover:text-v1-primary-dark flex items-center gap-2 group" href="#">
                            View All Modules
                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <article className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img alt="Herbal plants and pharmacognosy lab setup" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0y80Gl3mEqBcuaguUpGWVuwnBGHtTErrBwR8gmZ--sCVEGlr3Ne7PjXv88F8p3zQue-HemFCA9jsfCCxj9XLLHJf8tJSJ7DZKMSEWhU7_bspWB--U3y1y22Y0OMZd1bXteJs7PNgREq1QZGngbELiwfqH6IxaYmi-XQVQbPZ3k0Db00kiXQDn1QrwgtrbBCB-_wNsJTfXlfU1U83ddSeVqGwBjJMg2ldd0qiX8UjR8LW11wQZ_8fulGHkYF8IonUkg0HHSMs2a3nI" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">PHARMACOGNOSY</span>
                                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 cursor-pointer transition-colors">
                                            <span className="material-icons text-sm">open_in_new</span>
                                        </span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                        <div className="glass-panel inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono">
                                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                            ALKALOID: 98.2% PURE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-v1-primary transition-colors">Pharmacognosy</h3>
                                <p className="text-slate-500 text-sm mb-4">Study crude drugs from natural sources — identify plant-derived compounds, alkaloids, and active ingredients virtually.</p>
                            </div>
                        </article>
                        <article className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img alt="Microscopic view of cells with digital glowing tags" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGPIlD33pEtzZkUdPI0ySVG-_AmlmUPP7tiCoMy8W7NUgobCuJ8je1LC1wIwy8yLHRmcbdsZROcpX_a8v4A01DrxCvcz06Kuw_cH9XgaSt1nhmTJyWM6RDxFFPxIfJl6T_ksO3UJ0hyqfYk-lv9Xnkq2vMcZtfL1nDe2-_9JFBnVxhHJ3ca1e-KHy0b5JUtehRPk8kGB-6RC66thE-Q99-wclArmE9_t18KS1I1QBWwz2FD16P_D1DLYZD2p8YgIlYytEbYV4wM13C" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">BIOLOGY</span>
                                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 cursor-pointer transition-colors">
                                            <span className="material-icons text-sm">open_in_new</span>
                                        </span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                        <div className="glass-panel inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono">
                                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                            CELL COUNT: 4.5M
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-v1-primary transition-colors">Cellular Biology</h3>
                                <p className="text-slate-500 text-sm mb-4">Investigate cellular structures with auto-tagging and real-time division tracking.</p>
                            </div>
                        </article>
                        <article className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img alt="Pharmaceutical chemistry lab with drug formulation equipment" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbI7lScJPmSCaDotJZ_gEbhvGi6LOzUtWyvhlPGxBBjwUDlq-gd3faxbm8o4Fd2sEUAuJx2MCnsnOPB-VxR8F0vo2ShFJFmxUvdgImlQkpwUYfsfDT2dHzMSmLMnYxKDbcN6VBBu0kBdUYwVI1zzYcj2OWZa0ok5Wg1V9dEx0h6hkUVK2RDe-oAFt3XUe9dNF1l9mpCLsy1p15K782om7vd3snPIjklR07KDufG8_vqgYUFO90QCKxXTl0E-utjY3Kb7mKIyCU0gx" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">PHARMACEUTICS</span>
                                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 cursor-pointer transition-colors">
                                            <span className="material-icons text-sm">open_in_new</span>
                                        </span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                        <div className="glass-panel inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono">
                                            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                            DOSAGE: 250mg/5ml
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-v1-primary transition-colors">Drug Formulation</h3>
                                <p className="text-slate-500 text-sm mb-4">Learn tablet compression, syrup formulation, and dosage form design in a virtual pharmaceutics lab.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative overflow-hidden mt-auto">
                <div className="max-w-6xl mx-auto rounded-[2.5rem] cta-gradient p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-v1-primary/40 text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to explore your Pharma Lab?
                        </h2>
                        <p className="text-indigo-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Join B.Pharma students and researchers using VirtuLab to master pharmacology, biology, and life sciences — hands-on, risk-free.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => setIsAuthOpen(true)} className="w-full sm:w-auto px-8 py-4 bg-white text-v1-primary rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                                Get Started Free
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage