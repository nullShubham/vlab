import React, { useState } from 'react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">
                            {isLogin ? 'Access Your Lab' : 'Join the Lab'}
                        </h2>
                        <p className="text-slate-500 mt-2">
                            {isLogin ? 'Enter your credentials to access the simulation' : 'Create your researcher profile today'}
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-v1-primary/20 focus:border-v1-primary outline-hidden transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-v1-primary/20 focus:border-v1-primary outline-hidden transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 inset-y-0 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <span className="material-icons text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-v2-primary text-white rounded-xl font-bold shadow-lg shadow-v2-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-transform mt-4">
                            {isLogin ? 'Sign In to Lab' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-sm font-medium text-v1-primary hover:underline"
                        >
                        </button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-v1-primary/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-v2-primary/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
            </div>
        </div>
    );
};