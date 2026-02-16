export const Navbar = () => (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-5xl w-full shadow-lg border-white/60">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-v1-primary flex items-center justify-center text-white">
                    <span className="material-icons text-lg">science</span>
                </div>
                <span className="font-bold text-lg tracking-tight">VirtuLab</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                <a className="hover:text-v1-primary transition-colors" href="#">Modules</a>
                <a className="hover:text-v1-primary transition-colors" href="#">Research</a>
                <a className="hover:text-v1-primary transition-colors" href="#">About</a>
                <a className="hover:text-v1-primary transition-colors" href="#">Report Bug</a>
            </div>
        </div>
    </nav >
);