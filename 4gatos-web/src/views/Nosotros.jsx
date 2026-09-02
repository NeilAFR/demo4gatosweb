import React from 'react';
import { Dices, Coffee, Users, Sparkles, Heart } from 'lucide-react';

export const Nosotros = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="font-heading text-[var(--color-primary)] tracking-[0.2em] uppercase text-xs font-bold bg-[var(--color-primary)]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                    <Sparkles size={14} /> Nuestra Historia
                </span>
                <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-[var(--color-on-surface)] leading-tight">
                    Más que una cafetería, una comunidad.
                </h1>
                <p className="text-[var(--color-on-surface-variant)] text-sm md:text-base leading-relaxed">
                    Un espacio pensado para conectar cara a cara, donde cada taza de café y cada partida cuentan una nueva anécdota.
                </p>
            </div>

            <div className="bg-[var(--color-surface-container-low)] rounded-3xl p-8 md:p-12 border border-[var(--color-surface-variant)] flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-on-surface)]">
                        El Origen de 4 Gatos
                    </h2>
                    <p className="text-[var(--color-on-surface-variant)] text-sm md:text-base leading-relaxed">
                        4 Gatos nació de la pasión por compartir momentos inolvidables alrededor de una mesa. En una época hiperconectada a pantallas y notificaciones constantes, quisimos volver al origen: la conversación espontánea, el crujir de los dados y la estrategia compartida con amigos y familia.
                    </p>
                    <p className="text-[var(--color-on-surface-variant)] text-sm md:text-base leading-relaxed">
                        Nuestros baristas y anfitriones lúdicos no solo te preparan un espresso balanceado o un postre casero; te orientan entre cientos de juegos de mesa para encontrar el ideal según tu grupo, nivel y ánimo.
                    </p>
                </div>
                <div className="md:w-1/2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sWjvDOUfm_NPrOrPQGsYAgZrCfpQhAbGZ_dpzTix6TX2j7QuRmapgFrxcuzlT3zwXsMuC042Jst2SsYvIZgwtpO0Jczckz3f23KqCCtr-Pz0VpCMVPalbFG_HXpX5RP1GWqVmRQrKVdQFvbSo-iSxNCGfmL2GhGZ1Ps1sF_GzwVyB9brDHV4sokG4PkKheZaFayr1jNR_U0OfRULiGMW328eOMB7LNX_A97-8Zl2LoRBaFGGydj4bA"
                        alt="Ambiente de 4 Gatos Café"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-surface-variant)] space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
                        <Dices size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">Ludoteca Exclusiva</h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                        Más de 200 títulos clasificados por nivel de dificultad, temática y cantidad de jugadores.
                    </p>
                </div>

                <div className="p-6 bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-surface-variant)] space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
                        <Coffee size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">Café de Especialidad</h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                        Granos peruanos seleccionados, tostados artesanalmente y extraídos por baristas capacitados.
                    </p>
                </div>

                <div className="p-6 bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-surface-variant)] space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
                        <Users size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">Comunidad y Eventos</h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                        Torneos semanales, noches de misterio y talleres de iniciación sin costo extra.
                    </p>
                </div>
            </div>
        </div>
    );
};