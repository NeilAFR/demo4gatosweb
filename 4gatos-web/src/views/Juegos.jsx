import React, { useState } from 'react';
import {
    Users,
    Clock,
    Sparkles,
    ShoppingCart,
    X,
    ChevronLeft,
    ChevronRight,
    Flame,
    Check,
    Search,
    Plus
} from 'lucide-react';

const CATALOGO_JUEGOS = [
    {
        id: 1,
        nombre: 'Azul: Pabellón de Verano',
        categoria: 'Estrategia',
        precio: 165.00,
        precioOferta: 145.00,
        enOferta: true,
        jugadores: '2-4',
        tiempo: '30-45 min',
        edad: '8+',
        descripcion: 'Los jugadores regresan a Portugal para completar la tarea que nunca comenzó: construir el Pabellón de Verano para honrar a los miembros más famosos de la familia real.',
        imagenes: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDrIbeQAGv8C9eNRsOXfrPGOqfqdxLV0nHJpZfILnxYaR4cr9aFUvUqEZpr13ZABO8Ge3CEj-Pnwgi25yyekNELwniKvuHKXvzZ400ymxWym_goF9YPcld-ZVjBatjAuMmC_n6-UKim8TgZL-Zrx4VoIdVhQwTL3r9sSVoMYQXO2yzA7IPeCLRFOOTKbICH3w3aBWkgjgyGLq8lkU5Y4_K0qSfAmfo-Q-BUU1djWtoFEh3-NWZpnD6Luw',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC808DYg5qvDt_uvPT-8jJSBk3sigWNPpwSOoMEd37LP79dZmhfhnhFdpD_wLjkW_-MfwkzcFx0YzJQv2JLefUn2pikB3t9FOCUMZLBFPao63S8G1bZf3OMh3JSOjWI_JdVLH97m3iJ9sxsodJg8-ZLDhOGAREhNKnRWCSF-loNAMSOfwzJwCLRHr1qdVRQK4NuJEEiHfiuh1qyne09dtKXbiRl4BJ5XjWmnqBS4m8UnZt9jGFq7hwNvQ',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBfi4kdN7jCkYCFzjYl3dziqFWI4PZJPEKL7DaDzLXj2GFoGCx5fvGH4lSu5khr5XwxhOFp_eu6wyZ6k5t1gZ_2yhEy_-_sZPfyZB2EvqbYLdoLZfCZ7hGj8kITsK7nwWR07f6lGeCSZbL5wsCu4qYSA63UZa8hwtM5MjjxIY6Jsx4pbxmDD8h2tOYg5J9QRyj-PPgS4ABwd5GZmUXy0vW1Z5m4wDh-761M-CMz67RNbMO_WONLv8kPoQ'
        ]
    },
    {
        id: 2,
        nombre: 'Gatos Explosivos',
        categoria: 'Party Game',
        precio: 85.00,
        precioOferta: null,
        enOferta: false,
        jugadores: '2-5',
        tiempo: '15 min',
        edad: '7+',
        descripcion: 'Una versión gatuna de la ruleta rusa con una alta dosis de estrategia, traición y risas aseguradas para jugar en familia o con amigos en el café.',
        imagenes: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCxlmQSCLcJmfbnTzZOORe0UImX3shkzZeA0sq6bihbHc5lgWGZzR-SjBv0kaKE5lE4mRdwV3DKtfSNeG2D1RTEyG5ETuajhcfU-lSxD2qtBp6LLTvRaRTHvzD7m0IVaG3kpmd3vk1OC4l37uAkKNl24XRxwhF92bqrLMD0lq2RT9yrhN-jjOzAQiiKoH5nRaB_uqoxNHLtnKqsNVVTuvILM0HjnGSlcMgAqVTFZK3jWGiK0DCCDGrVVw'
        ]
    },
    {
        id: 3,
        nombre: 'Bosque Tranquilo',
        categoria: 'Familiar',
        precio: 120.00,
        precioOferta: 99.00,
        enOferta: true,
        jugadores: '1-4',
        tiempo: '40 min',
        edad: '10+',
        descripcion: 'Construye un bosque lleno de vida plantando árboles y atrayendo fauna local en un entorno relajante con arte botánico de primer nivel.',
        imagenes: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCy_3bZ8mYgyift_li0xCcw4UDDJub3hwtAhZ4zzv0Ko3vgV4VzVzrjhgf6D8LuRYF1eSDWaBoQTXJ2q_FkN9LkQJ4IXkrMazaLTJgWFy5ZKgd8ZRD5O-fkGiEvyMZGM_UnMfz7xV8wAz7JFJkfX2UlrmJuQSAZlNHUXMN2QuRKUZ4XgFFOh-d7Lrs3Vz_35Ei3qtw9ucIrfcvnmuAeKWDLM8d26jCLyEuktS3bpB2ZTTrg2WEILuwDGA'
        ]
    },
    {
        id: 4,
        nombre: 'Imperio del Sol',
        categoria: 'Estrategia',
        precio: 210.00,
        precioOferta: null,
        enOferta: false,
        jugadores: '2-4',
        tiempo: '90-120 min',
        edad: '14+',
        descripcion: 'Lidera civilizaciones andinas en pugna por el control de valles fértiles, gestión de recursos y construcción de templos ceremoniales.',
        imagenes: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC808DYg5qvDt_uvPT-8jJSBk3sigWNPpwSOoMEd37LP79dZmhfhnhFdpD_wLjkW_-MfwkzcFx0YzJQv2JLefUn2pikB3t9FOCUMZLBFPao63S8G1bZf3OMh3JSOjWI_JdVLH97m3iJ9sxsodJg8-ZLDhOGAREhNKnRWCSF-loNAMSOfwzJwCLRHr1qdVRQK4NuJEEiHfiuh1qyne09dtKXbiRl4BJ5XjWmnqBS4m8UnZt9jGFq7hwNvQ'
        ]
    }
];

export const Juegos = ({ onAgregarAlCarrito, onIrAlCheckout }) => {
    const [filtro, setFiltro] = useState('todos');
    const [busqueda, setBusqueda] = useState('');
    const [juegoModal, setJuegoModal] = useState(null);
    const [fotoActualIdx, setFotoActualIdx] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    const [agregadoToast, setAgregadoToast] = useState(false);

    const abrirModal = (juego) => {
        setJuegoModal(juego);
        setFotoActualIdx(0);
        setCantidad(1);
    };

    const juegosFiltrados = CATALOGO_JUEGOS.filter((j) => {
        const coincideFiltro =
            filtro === 'todos' ||
            (filtro === 'ofertas' && j.enOferta) ||
            j.categoria.toLowerCase() === filtro.toLowerCase();
        const coincideBusqueda = j.nombre.toLowerCase().includes(busqueda.toLowerCase());
        return coincideFiltro && coincideBusqueda;
    });

    const handleAgregar = (juego = juegoModal, cant = cantidad) => {
        onAgregarAlCarrito(juego, cant);
        setAgregadoToast(true);
        setTimeout(() => setAgregadoToast(false), 2000);
    };

    const handleComprarDirecto = () => {
        onAgregarAlCarrito(juegoModal, cantidad);
        setJuegoModal(null);
        onIrAlCheckout();
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
            {/* Cabecera & Buscador */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[var(--color-surface-variant)] pb-6">
                <div>
                    <span className="font-heading text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)]/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
                        Tienda Lúdica
                    </span>
                    <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-[var(--color-on-surface)]">
                        Juegos de Mesa
                    </h1>
                    <p className="text-sm text-[var(--color-on-surface-variant)] mt-1">
                        Los mejores títulos para llevar la experiencia del café a tu propia mesa.
                    </p>
                </div>

                {/* Barra de búsqueda */}
                <div className="relative w-full md:w-72">
                    <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" />
                    <input
                        type="text"
                        placeholder="Buscar por título..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="w-full bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] text-sm rounded-full py-2.5 pl-10 pr-4 outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                </div>
            </div>

            {/* Filtros de Categorías */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {['todos', 'ofertas', 'Estrategia', 'Party Game', 'Familiar'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFiltro(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${filtro === cat
                            ? 'bg-[var(--color-primary)] text-white shadow-md'
                            : 'bg-[var(--color-surface-container-low)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-variant)]'
                            }`}
                    >
                        {cat === 'todos' ? 'Todos los juegos' : cat === 'ofertas' ? '🔥 Ofertas' : cat}
                    </button>
                ))}
            </div>

            {/* ========================================================= */}
            {/* 🖥️ VERSIÓN EXCLUSIVA PC (hidden en móvil, flex en md:+)    */}
            {/* IDÉNTICA A TU CÓDIGO Y CAPTURA ORIGINAL                  */}
            {/* ========================================================= */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                {juegosFiltrados.map((juego) => {
                    const precioFinal = juego.precioOferta || juego.precio;
                    return (
                        <div
                            key={`pc-${juego.id}`}
                            onClick={() => abrirModal(juego)}
                            className="bg-[var(--color-surface-container-lowest)] rounded-3xl border border-[var(--color-surface-variant)] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                        >
                            <div className="relative aspect-square overflow-hidden bg-[var(--color-surface-variant)]/30">
                                <img
                                    src={juego.imagenes[0]}
                                    alt={juego.nombre}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {juego.enOferta && (
                                    <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                                        <Flame size={12} /> Oferta
                                    </span>
                                )}
                                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                                    <Users size={12} /> {juego.jugadores}
                                </span>
                            </div>

                            <div className="p-5 flex flex-col flex-grow justify-between gap-3">
                                <div>
                                    <span className="text-[11px] font-bold uppercase text-[var(--color-outline)] tracking-wider">
                                        {juego.categoria}
                                    </span>
                                    <h3 className="font-heading font-bold text-base text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 mt-0.5">
                                        {juego.nombre}
                                    </h3>
                                    <p className="text-xs text-[var(--color-on-surface-variant)] line-clamp-2 mt-1">
                                        {juego.descripcion}
                                    </p>
                                </div>

                                <div className="flex items-baseline justify-between pt-2 border-t border-[var(--color-surface-variant)]/60">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-heading font-extrabold text-lg text-[var(--color-primary)]">
                                            S/ {precioFinal.toFixed(2)}
                                        </span>
                                        {juego.enOferta && (
                                            <span className="text-xs text-gray-400 line-through">
                                                S/ {juego.precio.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs font-bold text-[var(--color-primary)] group-hover:underline">
                                        Ver ficha
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ========================================================= */}
            {/* 📱 VERSIÓN EXCLUSIVA MÓVIL (flex en móvil, hidden en md)  */}
            {/* ========================================================= */}
            <div className="flex flex-col gap-3 md:hidden">
                {juegosFiltrados.map((juego) => {
                    const precioFinal = juego.precioOferta || juego.precio;
                    return (
                        <div
                            key={`movil-${juego.id}`}
                            onClick={() => abrirModal(juego)}
                            className="bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-surface-variant)] p-2.5 flex items-center gap-3.5 shadow-xs active:scale-[0.99] transition-transform cursor-pointer"
                        >
                            {/* Miniatura compacta */}
                            <div className="relative w-22 h-22 rounded-xl overflow-hidden shrink-0 bg-[var(--color-surface-variant)]/30">
                                <img
                                    src={juego.imagenes[0]}
                                    alt={juego.nombre}
                                    className="w-full h-full object-cover"
                                />
                                {juego.enOferta && (
                                    <span className="absolute top-1.5 left-1.5 bg-[var(--color-primary)] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                                        Oferta
                                    </span>
                                )}
                            </div>

                            {/* Info resumida */}
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                <div>
                                    <div className="flex justify-between items-center text-[10px] text-gray-500 mb-0.5">
                                        <span className="font-bold uppercase text-[var(--color-outline)]">{juego.categoria}</span>
                                        <span className="flex items-center gap-1"><Users size={10} /> {juego.jugadores}</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-sm text-[var(--color-on-surface)] truncate">
                                        {juego.nombre}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between pt-1 mt-1 border-t border-[var(--color-surface-variant)]/50">
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="font-heading font-black text-base text-[var(--color-primary)]">
                                            S/ {precioFinal.toFixed(2)}
                                        </span>
                                        {juego.enOferta && (
                                            <span className="text-[10px] text-gray-400 line-through">
                                                S/ {juego.precio.toFixed(2)}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAgregar(juego, 1);
                                        }}
                                        className="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                                        title="Añadir al carrito"
                                    >
                                        <Plus size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* MODAL DETALLE DE PRODUCTO CON CARRUSEL */}
            {juegoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
                    <div
                        className="bg-[var(--color-surface-container-lowest)] rounded-3xl max-w-2xl w-full border border-[var(--color-surface-variant)] shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setJuegoModal(null)}
                            className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/80 dark:bg-black/60 rounded-full flex items-center justify-center text-[var(--color-on-surface)] hover:scale-105 transition-transform cursor-pointer shadow-sm"
                        >
                            <X size={18} />
                        </button>

                        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                            {/* Carrusel de Imágenes */}
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--color-surface-variant)]/30 border border-[var(--color-surface-variant)]">
                                <img
                                    src={juegoModal.imagenes[fotoActualIdx]}
                                    alt={`${juegoModal.nombre} vista ${fotoActualIdx + 1}`}
                                    className="w-full h-full object-cover transition-all duration-300"
                                />

                                {juegoModal.imagenes.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setFotoActualIdx((prev) => (prev === 0 ? juegoModal.imagenes.length - 1 : prev - 1))}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button
                                            onClick={() => setFotoActualIdx((prev) => (prev === juegoModal.imagenes.length - 1 ? 0 : prev + 1))}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </>
                                )}

                                {juegoModal.imagenes.length > 1 && (
                                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                                        {juegoModal.imagenes.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setFotoActualIdx(i)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${fotoActualIdx === i ? 'bg-[var(--color-primary)] scale-125' : 'bg-white/70'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Información y especificaciones */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold uppercase text-[var(--color-primary)] tracking-wider">
                                            {juegoModal.categoria}
                                        </span>
                                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[var(--color-on-surface)] mt-0.5">
                                            {juegoModal.nombre}
                                        </h2>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-heading text-2xl md:text-3xl font-black text-[var(--color-primary)] block">
                                            S/ {(juegoModal.precioOferta || juegoModal.precio).toFixed(2)}
                                        </span>
                                        {juegoModal.enOferta && (
                                            <span className="text-xs text-gray-400 line-through">
                                                S/ {juegoModal.precio.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[var(--color-surface-variant)] text-center">
                                    <div className="p-2 bg-[var(--color-surface-container-low)] rounded-xl">
                                        <Users size={16} className="mx-auto text-[var(--color-primary)] mb-1" />
                                        <span className="text-[11px] text-gray-500 block">Jugadores</span>
                                        <strong className="text-xs font-bold">{juegoModal.jugadores}</strong>
                                    </div>
                                    <div className="p-2 bg-[var(--color-surface-container-low)] rounded-xl">
                                        <Clock size={16} className="mx-auto text-[var(--color-primary)] mb-1" />
                                        <span className="text-[11px] text-gray-500 block">Tiempo</span>
                                        <strong className="text-xs font-bold">{juegoModal.tiempo}</strong>
                                    </div>
                                    <div className="p-2 bg-[var(--color-surface-container-low)] rounded-xl">
                                        <Sparkles size={16} className="mx-auto text-[var(--color-primary)] mb-1" />
                                        <span className="text-[11px] text-gray-500 block">Edad</span>
                                        <strong className="text-xs font-bold">{juegoModal.edad}</strong>
                                    </div>
                                </div>

                                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                                    {juegoModal.descripcion}
                                </p>

                                <div className="pt-3 flex flex-col sm:flex-row gap-3 items-center">
                                    <div className="flex items-center border border-[var(--color-outline-variant)] rounded-full p-1 bg-[var(--color-surface-container-low)] w-full sm:w-auto justify-between">
                                        <button
                                            onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                                            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg hover:bg-[var(--color-surface-variant)] cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 text-sm font-bold">{cantidad}</span>
                                        <button
                                            onClick={() => setCantidad((prev) => prev + 1)}
                                            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg hover:bg-[var(--color-surface-variant)] cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => handleAgregar()}
                                        className="w-full sm:flex-1 bg-[var(--color-surface-container-low)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10 py-3.5 px-6 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {agregadoToast ? (
                                            <>
                                                <Check size={16} className="text-green-600" /> ¡Añadido!
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart size={16} /> Añadir al Carrito
                                            </>
                                        )}
                                    </button>

                                    <button
                                        onClick={handleComprarDirecto}
                                        className="w-full sm:flex-1 bg-[var(--color-primary)] text-white hover:brightness-110 py-3.5 px-6 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center cursor-pointer"
                                    >
                                        Comprar Ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};