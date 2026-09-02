import React, { useState } from 'react';
import {
    ArrowLeft,
    Trash2,
    Truck,
    Tag,
    Lock,
    ShieldCheck,
    CreditCard,
    Wallet
} from 'lucide-react';

export const Checkout = ({ carrito, onEliminarItem, onVolverTienda }) => {
    const [cupon, setCupon] = useState('');
    const [descuento, setDescuento] = useState(0);
    const [mensajeCupon, setMensajeCupon] = useState('');

    const subtotal = carrito.reduce(
        (acc, item) => acc + (item.precioOferta || item.precio) * item.cantidad,
        0
    );

    const costoEnvio = subtotal >= 100 || subtotal === 0 ? 0 : 10.00;
    const total = Math.max(0, subtotal - descuento + costoEnvio);
    const faltanteEnvioGratis = Math.max(0, 100 - subtotal);

    const aplicarCupon = (e) => {
        e.preventDefault();
        if (cupon.trim().toUpperCase() === 'GATITOS10') {
            const desc = subtotal * 0.1;
            setDescuento(desc);
            setMensajeCupon('¡Cupón del 10% aplicado!');
        } else {
            setMensajeCupon('Cupón no válido');
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
            {/* Breadcrumbs */}
            <div>
                <div className="flex items-center gap-2 text-xs text-[var(--color-on-surface-variant)] mb-3">
                    <button onClick={onVolverTienda} className="hover:text-[var(--color-primary)] cursor-pointer">
                        Inicio
                    </button>
                    <span>/</span>
                    <span>Carrito</span>
                    <span>/</span>
                    <span className="text-[var(--color-on-surface)] font-bold">Checkout</span>
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-[var(--color-on-surface)]">
                    Finalizar Compra
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Columna Izquierda: Resumen de Artículos */}
                <div className="w-full lg:flex-1 space-y-6">
                    <div className="bg-[var(--color-surface-container-low)] rounded-3xl p-6 md:p-8 border border-[var(--color-surface-variant)] shadow-xs">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="font-heading text-xl font-bold text-[var(--color-on-surface)]">
                                Resumen de Pedido
                            </h2>
                            <span className="text-xs font-bold bg-[var(--color-surface-variant)] px-3 py-1 rounded-full">
                                {carrito.reduce((acc, i) => acc + i.cantidad, 0)} Artículos
                            </span>
                        </div>

                        {carrito.length === 0 ? (
                            <div className="py-12 text-center space-y-3">
                                <p className="text-sm text-gray-500">Tu carrito está actualmente vacío.</p>
                                <button
                                    onClick={onVolverTienda}
                                    className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:underline cursor-pointer"
                                >
                                    Explorar catálogo de juegos
                                </button>
                            </div>
                        ) : (
                            <div className="divide-y divide-[var(--color-surface-variant)]">
                                {carrito.map((item) => (
                                    <div key={item.id} className="py-4 flex gap-4 items-center">
                                        <img
                                            src={item.imagenes[0]}
                                            alt={item.nombre}
                                            className="w-20 h-20 rounded-2xl object-cover border border-[var(--color-surface-variant)] shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-heading font-bold text-sm text-[var(--color-on-surface)] truncate">
                                                {item.nombre}
                                            </h3>
                                            <p className="text-xs text-[var(--color-outline)]">{item.categoria}</p>
                                            <span className="text-xs font-semibold bg-[var(--color-surface-variant)] px-2 py-0.5 rounded-md inline-block mt-1">
                                                Cant: {item.cantidad}
                                            </span>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="font-heading font-bold text-base block text-[var(--color-on-surface)]">
                                                S/ {((item.precioOferta || item.precio) * item.cantidad).toFixed(2)}
                                            </span>
                                            <button
                                                onClick={() => onEliminarItem(item.id)}
                                                className="text-gray-400 hover:text-red-600 transition-colors p-1 cursor-pointer mt-1"
                                                title="Eliminar producto"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-6 border-t border-[var(--color-surface-variant)] mt-4">
                            <button
                                onClick={onVolverTienda}
                                className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:underline cursor-pointer"
                            >
                                <ArrowLeft size={16} /> Volver a la tienda
                            </button>
                        </div>
                    </div>

                    {/* Banner de Envío Gratis */}
                    <div className="bg-[var(--color-surface-container-lowest)] border border-[var(--color-surface-variant)] rounded-3xl p-6 flex items-center gap-4 shadow-xs">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                            <Truck size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-heading font-bold text-sm text-[var(--color-on-surface)]">Envío Gratis</h4>
                            <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">
                                {faltanteEnvioGratis === 0
                                    ? '¡Genial! Has desbloqueado el envío gratuito en Lima.'
                                    : `Estás a solo S/ ${faltanteEnvioGratis.toFixed(2)} de desbloquear el envío gratis.`}
                            </p>
                            <div className="w-full bg-[var(--color-surface-variant)] h-2 rounded-full mt-2 overflow-hidden">
                                <div
                                    className="bg-[var(--color-primary)] h-full transition-all duration-500"
                                    style={{ width: `${Math.min(100, (subtotal / 100) * 100)}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Resumen de Pago */}
                <div className="w-full lg:w-96 bg-[var(--color-surface-container-low)] rounded-3xl p-6 md:p-8 border border-[var(--color-surface-variant)] shadow-md space-y-6 lg:sticky lg:top-28">
                    <h2 className="font-heading text-lg font-bold text-[var(--color-on-surface)] border-b border-[var(--color-surface-variant)] pb-3">
                        Detalles de Pago
                    </h2>

                    {/* Cupón */}
                    <form onSubmit={aplicarCupon} className="space-y-2">
                        <label className="text-xs uppercase font-bold text-[var(--color-outline)] tracking-wider">
                            Código de Descuento
                        </label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="EJ: GATITOS10"
                                    value={cupon}
                                    onChange={(e) => setCupon(e.target.value)}
                                    className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-xs rounded-xl py-2.5 pl-9 pr-3 outline-none focus:border-[var(--color-primary)]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[var(--color-on-surface)] text-white text-xs font-bold px-4 rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                Aplicar
                            </button>
                        </div>
                        {mensajeCupon && (
                            <p className={`text-[11px] font-semibold ${descuento > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                {mensajeCupon}
                            </p>
                        )}
                    </form>

                    {/* Desglose */}
                    <div className="space-y-3 text-sm pt-2">
                        <div className="flex justify-between text-[var(--color-on-surface-variant)]">
                            <span>Subtotal</span>
                            <span className="font-bold text-[var(--color-on-surface)]">S/ {subtotal.toFixed(2)}</span>
                        </div>
                        {descuento > 0 && (
                            <div className="flex justify-between text-green-600">
                                <span>Descuento aplicado</span>
                                <span className="font-bold">- S/ {descuento.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-[var(--color-on-surface-variant)]">
                            <span>Envío</span>
                            <span className="font-bold text-[var(--color-on-surface)]">
                                {costoEnvio === 0 ? 'Gratis' : `S/ ${costoEnvio.toFixed(2)}`}
                            </span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>Impuestos (IGV incluido)</span>
                            <span>S/ {(total * 0.18).toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="pt-4 border-t border-[var(--color-surface-variant)] flex justify-between items-end">
                        <div>
                            <span className="text-xs text-gray-400 block">Total</span>
                            <span className="font-heading text-3xl font-black text-[var(--color-primary)]">
                                S/ {total.toFixed(2)}
                            </span>
                        </div>
                        <span className="text-xs font-bold text-[var(--color-outline)]">PEN</span>
                    </div>

                    {/* Botón Pagar */}
                    <button
                        disabled={carrito.length === 0}
                        className="w-full bg-[var(--color-primary)] hover:brightness-110 disabled:opacity-50 text-white font-heading font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <Lock size={16} /> Realizar Pago Seguro
                    </button>

                    {/* Badges de Confianza */}
                    <div className="flex justify-center items-center gap-4 pt-2 text-gray-400 text-xs">
                        <span className="flex items-center gap-1"><CreditCard size={16} /> Tarjeta</span>
                        <span className="flex items-center gap-1"><Wallet size={16} /> Yape / Plin</span>
                        <span className="flex items-center gap-1"><ShieldCheck size={16} /> Seguro</span>
                    </div>
                </div>
            </div>
        </div>
    );
};