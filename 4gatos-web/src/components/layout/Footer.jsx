import React from 'react';
import { Share2, Globe } from 'lucide-react';

export const Footer = ({ setSeccionActiva }) => {
    const irA = (id) => {
        if (setSeccionActiva) {
            setSeccionActiva(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-[var(--color-surface-container-low)] mt-auto pt-14 pb-8 border-t border-[var(--color-surface-variant)]">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Columna 1: Marca & Lema */}
                <div className="col-span-1 space-y-3">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => irA('inicio')}>
                        <span className="text-base text-[var(--color-primary)]">🐾</span>
                        <span className="font-heading text-xl font-bold text-[var(--color-primary)]">
                            4 Gatos
                        </span>
                    </div>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                        El rincón donde el café de especialidad y los mejores juegos de mesa se encuentran.
                    </p>
                </div>

                {/* Columna 2: Navegación */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface)]">
                        Navegación
                    </h4>
                    <div className="flex flex-col gap-2 text-xs text-[var(--color-on-surface-variant)]">
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Menú Café</a>
                        <button onClick={() => irA('juegos')} className="text-left hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                            Ludoteca
                        </button>
                        <button onClick={() => irA('escaperoom')} className="text-left hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                            Escape Room
                        </button>
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Próximos Torneos</a>
                    </div>
                </div>

                {/* Columna 3: Legal */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface)]">
                        Legal
                    </h4>
                    <div className="flex flex-col gap-2 text-xs text-[var(--color-on-surface-variant)]">
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Cookies</a>
                    </div>
                </div>

                {/* Columna 4: Síguenos */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface)]">
                        Síguenos
                    </h4>
                    <div className="flex gap-3">
                        <a
                            href="https://www.instagram.com/4gatosperu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[var(--color-surface-variant)] rounded-full hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-all text-[var(--color-on-surface)]"
                        >
                            <Share2 size={16} />
                        </a>
                        <a
                            href="https://www.4gatosperu.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[var(--color-surface-variant)] rounded-full hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-all text-[var(--color-on-surface)]"
                        >
                            <Globe size={16} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Subfooter */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 border-t border-[var(--color-surface-variant)] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[var(--color-on-surface-variant)] gap-2">
                <span>© 2026 4 Gatos Café & Juegos.</span>
                <span>Hecho con amor y dados.</span>
            </div>
        </footer>
    );
};