export const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 rounded bg-v2-primary flex items-center justify-center text-white">
                                <span className="material-icons text-xs">science</span>
                            </div>
                            <span className="font-bold text-md text-slate-900">VirtuLab Pharma</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                            Empowering B.Pharma students with interactive virtual labs for pharmacology, biology, and life sciences.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {/* <a className="text-slate-400 hover:text-v2-primary transition-colors" href="#">
                                <i className="material-icons text-sm">flutter_dash</i>
                            </a> */}
                            <a className="text-slate-400 hover:text-v2-primary transition-colors" href="#">
                                <i className="material-icons text-sm">pest_control</i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-sm">Platform</h4>
                        <ul className="space-y-3 text-xs text-slate-500">
                            <li><a className="hover:text-v2-primary" href="#">Overview</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Features</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Integrations</a></li>
                            <li><a className="hover:text-v2-primary" href="#">For Schools</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-sm">Resources</h4>
                        <ul className="space-y-3 text-xs text-slate-500">
                            <li><a className="hover:text-v2-primary" href="#">Documentation</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Community</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Webinars</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 text-sm">Company</h4>
                        <ul className="space-y-3 text-xs text-slate-500">
                            <li><a className="hover:text-v2-primary" href="#">About Us</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Careers</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Press</a></li>
                            <li><a className="hover:text-v2-primary" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}