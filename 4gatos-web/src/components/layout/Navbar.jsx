import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';

export const Navbar = ({ seccionActiva, setSeccionActiva, cantidadCarrito = 0 }) => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        if (menuAbierto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuAbierto]);

    const irA = (id) => {
        setSeccionActiva(id);
        setMenuAbierto(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className="sticky top-0 w-full z-40 bg-[var(--color-surface)]/95 backdrop-blur-md shadow-xs">
                <div className="flex justify-between items-center h-16 md:h-20 px-6 max-w-[1200px] mx-auto">
                    {/* Logo Texto Desktop/Mobile */}
                    <button
                        onClick={() => irA('inicio')}
                        className="cursor-pointer text-left py-2 group"
                    >
                        <span className="font-heading text-2xl md:text-3xl text-[var(--color-primary)] font-black tracking-tight uppercase group-hover:opacity-80 transition-opacity">
                            4 GATOS
                        </span>
                    </button>

                    {/* Menú Desktop */}
                    <nav className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => irA('inicio')}
                            className={`font-heading text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors cursor-pointer ${seccionActiva === 'inicio' ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                                }`}
                        >
                            Inicio
                        </button>

                        <button
                            onClick={() => irA('nosotros')}
                            className={`font-heading text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors cursor-pointer ${seccionActiva === 'nosotros' ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                                }`}
                        >
                            Nosotros
                        </button>

                        <button
                            onClick={() => irA('juegos')}
                            className={`font-heading text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors cursor-pointer ${seccionActiva === 'juegos' ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                                }`}
                        >
                            Juegos
                        </button>

                        <a
                            href="https://carta.4gatosperu.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] px-3 py-2 rounded-lg"
                        >
                            Carta
                        </a>

                        <button
                            onClick={() => irA('escaperoom')}
                            className={`font-heading text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors cursor-pointer ${seccionActiva === 'escaperoom' ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                                }`}
                        >
                            Reservas Escape Room
                        </button>
                    </nav>

                    {/* Acciones Header */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => irA('checkout')}
                            className="text-[var(--color-primary)] p-2 rounded-lg hover:bg-[var(--color-primary)]/5 cursor-pointer flex items-center relative"
                            title="Ver carrito"
                        >
                            <ShoppingCart size={20} />
                            {cantidadCarrito > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-primary)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {cantidadCarrito}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setMenuAbierto(true)}
                            className="md:hidden text-[var(--color-primary)] p-2 rounded-lg hover:bg-[var(--color-primary)]/5 cursor-pointer flex items-center"
                            aria-label="Abrir menú"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ========================================================= */}
            {/* 📱 FULLSCREEN OVERLAY MENU (Fondo blanco en activo)        */}
            {/* ========================================================= */}
            {menuAbierto && (
                <div className="fixed inset-0 z-50 bg-[#A63813] text-white flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200 overflow-y-auto">

                    {/* Cabecera */}
                    <div className="flex justify-between items-center border-b border-white/15 pb-4 shrink-0">
                        <div className="flex items-center gap-2 text-left">
                            <span className="text-sm">🐾</span>
                            <span className="font-heading text-lg font-bold tracking-wider uppercase text-white/95">
                                4 Gatos Café
                            </span>
                        </div>
                        <button
                            onClick={() => setMenuAbierto(false)}
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                            aria-label="Cerrar menú"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Navegación a la izquierda & Opción activa con fondo blanco */}
                    <nav className="flex flex-col gap-3 my-auto py-6 text-left">
                        {[
                            { id: 'inicio', label: 'Inicio' },
                            { id: 'nosotros', label: 'Nosotros' },
                            { id: 'juegos', label: 'Juegos de Mesa' },
                            { id: 'escaperoom', label: 'Escape Room' },
                            { id: 'checkout', label: `Carrito de Compras (${cantidadCarrito})` },
                        ].map((link) => {
                            const estaActivo = seccionActiva === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => irA(link.id)}
                                    className={`flex items-center justify-between py-2.5 px-4 rounded-2xl transition-all text-left cursor-pointer group ${estaActivo
                                        ? 'bg-white text-[#A63813] font-bold shadow-md shadow-black/10'
                                        : 'text-white/85 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <span className="font-heading text-base tracking-wide">
                                        {link.label}
                                    </span>
                                    <ArrowRight
                                        size={16}
                                        className={`transition-transform group-hover:translate-x-1 ${estaActivo ? 'text-[#A63813] opacity-100' : 'opacity-40'
                                            }`}
                                    />
                                </button>
                            );
                        })}

                        <a
                            href="https://carta.4gatosperu.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between py-2.5 px-4 rounded-2xl text-white/85 hover:text-white hover:bg-white/10 transition-all text-left group"
                        >
                            <span className="font-heading text-base tracking-wide">
                                Ver Carta Digital
                            </span>
                            <ArrowRight size={16} className="opacity-40 transition-transform group-hover:translate-x-1" />
                        </a>
                    </nav>

                    {/* Bloque inferior de atención y contacto */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg shadow-black/10 border border-white/20 space-y-3 shrink-0 text-left">
                        <div className="flex items-start gap-2.5">
                            <Clock size={16} className="text-[#A63813] shrink-0 mt-0.5" />
                            <div className="text-xs">
                                <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">Atención</span>
                                <span className="text-[#201a17] font-semibold">Todos los días: 3:00 PM – 10:00 PM</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                            <MapPin size={16} className="text-[#A63813] shrink-0 mt-0.5" />
                            <div className="text-xs">
                                <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">Dirección</span>
                                <a
                                    href="https://maps.app.goo.gl/EEAsk5r9F3XCMGLaA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#201a17] font-semibold underline underline-offset-2 hover:text-[#A63813] transition-colors"
                                >
                                    Jirón Clorinda Matto de Turner 205, Cusco
                                </a>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[11px] text-gray-500 font-medium">Instagram @4gatosperu</span>
                            <a
                                href="https://www.instagram.com/4gatosperu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-[#A63813]/10 hover:bg-[#A63813] text-[#A63813] hover:text-white flex items-center justify-center transition-all shadow-xs"
                                title="Instagram"
                            >
                                <FaInstagram size={15} />
                            </a>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};