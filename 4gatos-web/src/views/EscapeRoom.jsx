import React, { useState } from 'react';
import {
    Clock,
    Users,
    Calendar,
    AlertCircle,
    CreditCard,
    CheckCircle2,
    Flame,
    HelpCircle,
    DoorClosed
} from 'lucide-react';

export const EscapeRoom = () => {
    const [tamanoGrupo, setTamanoGrupo] = useState('2');
    const [fecha, setFecha] = useState('2026-09-02');
    const [horaSeleccionada, setHoraSeleccionada] = useState('17:30');

    const tarifas = {
        '2': 45,
        '3': 40,
        '4': 35,
        '5': 30,
        '6': 25,
    };

    const horariosDisponibles = ['16:00', '17:30', '19:00', '20:30'];
    const precioPersona = tarifas[tamanoGrupo];
    const totalPagar = precioPersona * parseInt(tamanoGrupo);

    const enviarWhatsApp = () => {
        const mensaje = `¡Hola 4 Gatos! Deseo solicitar la reserva para el Escape Room: Habitación 4.%0A%0A👥 Grupo: ${tamanoGrupo} personas%0A📅 Fecha: ${fecha}%0A⏰ Hora: ${horaSeleccionada}%0A💰 Total: S/ ${totalPagar} (Adelanto S/ 50 vía Yape/Plin)`;
        window.open(`https://wa.me/51983890750?text=${mensaje}`, '_blank');
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12 space-y-10">
            {/* Cabecera de la Experiencia */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-[var(--color-surface-container-low)] rounded-3xl p-6 md:p-10 border border-[var(--color-surface-variant)] shadow-xs">

                {/* Espacio para la Imagen */}
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative border border-[var(--color-surface-variant)] shadow-sm group bg-[var(--color-surface-variant)]/30">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                        alt="Escape Room Habitación 4"
                    />
                    <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                        <Flame size={12} /> MISTERIO & SUSPENSO
                    </div>
                </div>

                {/* Información Principal */}
                <div className="w-full md:w-1/2 space-y-5">
                    <div>
                        <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                            <DoorClosed size={16} /> Experiencia En Vivo
                        </span>
                        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-[var(--color-on-surface)] mt-1 tracking-tight">
                            Habitación 4
                        </h1>
                        <p className="text-[var(--color-on-surface-variant)] text-sm md:text-base mt-2 leading-relaxed">
                            Un juego en vivo donde tú y tu equipo resuelven enigmas y desafíos antes de que se acabe el tiempo.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-[var(--color-surface-variant)]">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-on-surface)] font-medium">
                            <Clock size={16} className="text-[var(--color-primary)]" />
                            <span><strong>1 hora</strong> de duración</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-on-surface)] font-medium">
                            <Users size={16} className="text-[var(--color-primary)]" />
                            <span>Máx. <strong>6 invitados</strong></span>
                        </div>
                    </div>

                    <div className="bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)]/60 rounded-2xl p-4 text-xs text-[var(--color-on-surface-variant)] flex items-start gap-3 shadow-xs">
                        <AlertCircle size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <p>
                            <strong>Política de reservas:</strong> Para confirmar la reserva es obligatorio pagar <strong>S/ 50</strong> por adelantado vía Yape o Plin al número <strong>+51 983 890 750</strong>. El resto del pago se hace en el local.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tarifas y Formulario */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* Detalle de Tarifas */}
                <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-6 md:p-8 border border-[var(--color-surface-variant)] space-y-6 shadow-xs">
                    <h2 className="font-heading text-lg font-bold text-[var(--color-on-surface)] flex items-center gap-2 border-b border-[var(--color-surface-variant)] pb-3">
                        <CreditCard size={18} className="text-[var(--color-primary)]" /> Costos: Lunes a Domingo
                    </h2>
                    <ul className="space-y-2.5 text-sm">
                        {[
                            { pers: 'Grupos de 2', precio: 'S/ 45 por persona' },
                            { pers: 'Grupos de 3', precio: 'S/ 40 por persona' },
                            { pers: 'Grupos de 4', precio: 'S/ 35 por persona' },
                            { pers: 'Grupos de 5', precio: 'S/ 30 por persona' },
                            { pers: 'Grupos de 6', precio: 'S/ 25 por persona' },
                        ].map((item, idx) => (
                            <li key={idx} className="flex justify-between items-center py-1.5 border-b border-[var(--color-surface-variant)]/40 last:border-none">
                                <span className="text-xs text-[var(--color-on-surface-variant)]">{item.pers}</span>
                                <span className="font-bold text-xs text-[var(--color-on-surface)]">{item.precio}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="p-3.5 rounded-xl bg-[var(--color-surface-container-low)] border border-[var(--color-surface-variant)] space-y-1 text-xs text-[var(--color-on-surface-variant)]">
                        <div className="flex items-center gap-1.5 font-bold text-[var(--color-on-surface)]">
                            <HelpCircle size={14} className="text-[var(--color-primary)]" /> Reglas de inicio
                        </div>
                        <p>El juego comienza a la hora exacta; por favor lleguen 15 minutos antes para la explicación.</p>
                    </div>
                </div>

                {/* Selector interactivo de Reserva */}
                <div className="lg:col-span-2 bg-[var(--color-surface-container-lowest)] rounded-3xl p-6 md:p-8 border border-[var(--color-surface-variant)] space-y-6 shadow-xs flex flex-col justify-between">
                    <div className="space-y-6">
                        <h2 className="font-heading text-lg font-bold text-[var(--color-on-surface)] flex items-center gap-2 border-b border-[var(--color-surface-variant)] pb-3">
                            <Calendar size={18} className="text-[var(--color-primary)]" /> Precios variados y turnos
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs uppercase font-bold text-[var(--color-outline)] tracking-wider">Tamaño del grupo</label>
                                <select
                                    value={tamanoGrupo}
                                    onChange={(e) => setTamanoGrupo(e.target.value)}
                                    className="w-full bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] text-xs rounded-xl p-3 outline-none focus:border-[var(--color-primary)]"
                                >
                                    <option value="2">2 personas (S/ 45 c/u)</option>
                                    <option value="3">3 personas (S/ 40 c/u)</option>
                                    <option value="4">4 personas (S/ 35 c/u)</option>
                                    <option value="5">5 personas (S/ 30 c/u)</option>
                                    <option value="6">6 personas (S/ 25 c/u)</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs uppercase font-bold text-[var(--color-outline)] tracking-wider">Fecha</label>
                                <input
                                    type="date"
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                    className="w-full bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] text-xs rounded-xl p-3 outline-none focus:border-[var(--color-primary)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold text-[var(--color-outline)] tracking-wider">Elige franja horaria disponible</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {horariosDisponibles.map((h) => (
                                    <button
                                        key={h}
                                        type="button"
                                        onClick={() => setHoraSeleccionada(h)}
                                        className={`p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${horaSeleccionada === h
                                                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-md'
                                                : 'bg-[var(--color-surface-container-low)] border-[var(--color-surface-variant)] text-[var(--color-on-surface)] hover:bg-[var(--color-surface-variant)]'
                                            }`}
                                    >
                                        {h}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resumen y Botón de Solicitud */}
                    <div className="pt-6 border-t border-[var(--color-surface-variant)] flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <span className="text-xs text-gray-500 block">Total estimado</span>
                            <span className="font-heading text-2xl font-black text-[var(--color-primary)]">S/ {totalPagar}.00</span>
                            <span className="text-[11px] text-gray-500 block mt-0.5">Adelanto requerido: S/ 50.00</span>
                        </div>

                        <button
                            onClick={enviarWhatsApp}
                            className="w-full sm:w-auto bg-[var(--color-primary)] hover:brightness-110 text-white font-heading font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={16} />
                            Solicitar ahora
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};