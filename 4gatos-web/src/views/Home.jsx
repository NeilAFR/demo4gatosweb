import React from 'react';
import {
    MapPin,
    Clock,
    Users,
    ArrowRight,
    Flame,
    HeartHandshake,
    Compass
} from 'lucide-react';

export const Home = ({ irANosotros }) => {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-20">
            {/* Hero Section */}
            <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col items-center justify-center pt-16 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-35 blur-[2px] scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkuMpFcSKSjJJXR_wG7MJeXYMrLkzOFQWR5ZGys1TqPyGc4RGUrqSpH8xxkPAZl3YOYnfSzpLa81NLJ0TneGPvUe1G-oiXPS5ZJE-R3iQahbucyHZbsir4Xfln-UK4VSsnW4BbERogUyb3NbO3ICVc-b2Fzf1r5oRI35pWAvs3xCnIUeqhAVl8ANZKXdThzidHpP038tnJ2FXcD4eROSNzOb196jTbOw00n79L1mZrw3xQMbTvUQPoAQ"
                        alt="Ambiente 4 Gatos"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/90 via-[var(--color-background)]/60 to-[var(--color-background)] z-10" />
                </div>

                <div className="relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
                    <span className="font-[var(--font-display)] text-[var(--color-primary)] tracking-[0.2em] uppercase text-xs md:text-sm font-bold bg-[var(--color-primary)]/10 px-4 py-2 rounded-full">
                        Bienvenidos a 4 Gatos
                    </span>
                    <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-7xl lg:text-[80px] md:leading-[90px] font-black tracking-tight text-[var(--color-on-surface)]">
                        Donde el café<br />y el <span className="text-[var(--color-primary)] italic">juego</span><br />se encuentran.
                    </h1>
                    <p className="text-base md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto opacity-90 leading-relaxed px-4">
                        Tu espacio acogedor para disfrutar de los mejores juegos de mesa, acompañado de un excelente café de especialidad.
                    </p>

                    {/* Botonera Principal con Ubícanos */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 w-full sm:w-auto px-4">
                        <a
                            href="#juegos"
                            className="w-full sm:w-auto bg-[var(--color-primary)] text-white text-xs md:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wider text-center cursor-pointer"
                        >
                            Explorar Juegos
                        </a>
                        <button
                            className="w-full sm:w-auto bg-[var(--color-surface)] text-[var(--color-primary)] border-2 border-[var(--color-primary)]/30 text-xs md:text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[var(--color-primary)]/5 transition-all uppercase tracking-wider cursor-pointer"
                        >
                            Ver Menú
                        </button>
                        <a
                            href="#ubicacion"
                            className="w-full sm:w-auto bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] text-xs md:text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[var(--color-surface-variant)] transition-all uppercase tracking-wider text-center cursor-pointer flex items-center justify-center gap-2"
                        >
                            <MapPin size={16} className="text-[var(--color-primary)]" />
                            Ubícanos
                        </a>
                    </div>
                </div>

                {/* Elementos decorativos */}
                <div className="relative z-20 w-full flex justify-center mt-12 h-36 md:h-0">
                    <div className="absolute left-6 md:left-[8%] top-0 md:-top-48 w-32 md:w-60 h-32 md:h-60 rounded-3xl overflow-hidden shadow-2xl -rotate-6 border-4 md:border-8 border-[var(--color-surface)]">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfi4kdN7jCkYCFzjYl3dziqFWI4PZJPEKL7DaDzLXj2GFoGCx5fvGH4lSu5khr5XwxhOFp_eu6wyZ6k5t1gZ_2yhEy_-_sZPfyZB2EvqbYLdoLZfCZ7hGj8kITsK7nwWR07f6lGeCSZbL5wsCu4qYSA63UZa8hwtM5MjjxIY6Jsx4pbxmDD8h2tOYg5J9QRyj-PPgS4ABwd5GZmUXy0vW1Z5m4wDh-761M-CMz67RNbMO_WONLv8kPoQ" alt="Juegos de mesa" />
                    </div>
                    <div className="absolute right-6 md:right-[8%] top-4 md:-top-36 w-36 md:w-64 h-36 md:h-64 rounded-full overflow-hidden shadow-2xl rotate-6 md:rotate-12 border-4 md:border-8 border-[var(--color-surface)]">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaCZdtx96flhSz-hdOfrHy95FXY_DDZAxxIhAr3mzh7tMMf3Bn4YuNhJtaxmZCxdE3R9wuYpaeZBstW4lWK5nIKz0BxD1AzvbLjROLwaxAxwfXTloJ7e-isaseO8y60RR_lo4e7E92qnijZY2h-kymgSTkZWU65TeYsHGv94fnZWXX8KgMPowVb_lIsQdw42qMY-UDmSF82ONQENbqNpY_PyLIZSgvgtGT1jUWHVW5ToHesXR45GDaMA" alt="Taza de café" />
                    </div>
                </div>
            </section>

            {/* Catálogo de Juegos */}
            <section id="juegos" className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="font-[var(--font-display)] text-2xl md:text-4xl font-extrabold text-[var(--color-on-surface)]">Novedades en Juegos</h2>
                        <p className="text-sm text-[var(--color-on-surface-variant)] mt-1">Títulos recomendados de nuestra colección lúdica.</p>
                    </div>
                    <span className="hidden md:flex items-center gap-1.5 text-[var(--color-primary)] font-bold text-sm">
                        Ver catálogo completo <ArrowRight size={16} />
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 min-h-[320px] md:min-h-[380px] bg-[var(--color-surface-container-low)] rounded-3xl overflow-hidden shadow-xs relative group flex flex-col justify-end p-6 md:p-8">
                        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC808DYg5qvDt_uvPT-8jJSBk3sigWNPpwSOoMEd37LP79dZmhfhnhFdpD_wLjkW_-MfwkzcFx0YzJQv2JLefUn2pikB3t9FOCUMZLBFPao63S8G1bZf3OMh3JSOjWI_JdVLH97m3iJ9sxsodJg8-ZLDhOGAREhNKnRWCSF-loNAMSOfwzJwCLRHr1qdVRQK4NuJEEiHfiuh1qyne09dtKXbiRl4BJ5XjWmnqBS4m8UnZt9jGFq7hwNvQ" alt="Imperio del Sol" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
                        <div className="relative z-20 space-y-2">
                            <div className="flex gap-2 mb-2">
                                <span className="bg-[var(--color-primary)] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Estrategia</span>
                                <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                                    <Users size={14} /> 2-4 Jugadores
                                </span>
                            </div>
                            <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-white">Imperio del Sol</h3>
                            <p className="text-gray-200 text-sm max-w-xl">Lidera tu civilización hacia la gloria en este juego de mesa épico de control de áreas y gestión de recursos.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col gap-6">
                        <div className="flex-1 bg-[var(--color-surface-container-lowest)] rounded-3xl border border-[var(--color-surface-variant)] overflow-hidden shadow-xs p-4 flex flex-col justify-between">
                            <div className="h-36 rounded-2xl overflow-hidden relative mb-4">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxlmQSCLcJmfbnTzZOORe0UImX3shkzZeA0sq6bihbHc5lgWGZzR-SjBv0kaKE5lE4mRdwV3DKtfSNeG2D1RTEyG5ETuajhcfU-lSxD2qtBp6LLTvRaRTHvzD7m0IVaG3kpmd3vk1OC4l37uAkKNl24XRxwhF92bqrLMD0lq2RT9yrhN-jjOzAQiiKoH5nRaB_uqoxNHLtnKqsNVVTuvILM0HjnGSlcMgAqVTFZK3jWGiK0DCCDGrVVw" alt="Gatos Explosivos" />
                                <span className="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                                    <Flame size={12} /> Nuevo
                                </span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[var(--color-on-surface)]">Gatos Explosivos</h4>
                                <p className="text-xs text-[var(--color-on-surface-variant)] mt-1">Cartas rápidas, traición y diversión para grupos de amigos.</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-2 border-t border-[var(--color-surface-variant)]/60 text-xs font-bold text-[var(--color-primary)]">
                                <span>Party Game</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>

                        <div className="flex-1 bg-[var(--color-surface-container-lowest)] rounded-3xl border border-[var(--color-surface-variant)] overflow-hidden shadow-xs p-4 flex flex-col justify-between">
                            <div className="h-36 rounded-2xl overflow-hidden relative mb-4">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy_3bZ8mYgyift_li0xCcw4UDDJub3hwtAhZ4zzv0Ko3vgV4VzVzrjhgf6D8LuRYF1eSDWaBoQTXJ2q_FkN9LkQJ4IXkrMazaLTJgWFy5ZKgd8ZRD5O-fkGiEvyMZGM_UnMfz7xV8wAz7JFJkfX2UlrmJuQSAZlNHUXMN2QuRKUZ4XgFFOh-d7Lrs3Vz_35Ei3qtw9ucIrfcvnmuAeKWDLM8d26jCLyEuktS3bpB2ZTTrg2WEILuwDGA" alt="Bosque Tranquilo" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[var(--color-on-surface)]">Bosque Tranquilo</h4>
                                <p className="text-xs text-[var(--color-on-surface-variant)] mt-1">Construye un ecosistema armónico en este reto estratégico.</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-2 border-t border-[var(--color-surface-variant)]/60 text-xs font-bold text-[var(--color-primary)]">
                                <span>Familiar</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner de acceso a Nosotros */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">
                <div className="bg-[var(--color-surface-container-low)] rounded-3xl p-8 md:p-10 border border-[var(--color-surface-variant)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-on-surface)]">¿Primera vez en 4 Gatos?</h3>
                        <p className="text-sm text-[var(--color-on-surface-variant)] max-w-xl">
                            Conoce nuestro origen, el espacio creado para desconectar de las pantallas y reencontrarte frente al tablero.
                        </p>
                    </div>
                    <button
                        onClick={irANosotros}
                        className="bg-[var(--color-surface-container-lowest)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer shrink-0 flex items-center gap-2"
                    >
                        <Compass size={16} />
                        Conoce nuestra historia
                    </button>
                </div>
            </section>

            {/* Ubicación y Mapa Limpio (Sin elementos superpuestos que tapen el pin del gato) */}
            <section id="ubicacion" className="max-w-[1200px] mx-auto px-4 md:px-8 w-full scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Horarios y dirección */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-extrabold text-[var(--color-on-surface)]">
                                Visítanos
                            </h2>
                            <p className="text-sm text-[var(--color-on-surface-variant)] mt-1">
                                Pasa una tarde lúdica con café recién tostado.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-[var(--color-on-surface)]">Dirección</h4>
                                    <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">
                                        Calle de los Juegos 123, Barrio Lúdico
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                                    <Clock size={20} className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-[var(--color-on-surface)]">Horarios</h4>
                                    <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">
                                        Mar - Jue: 16:00 - 23:00<br />
                                        Vie - Dom: 14:00 - 01:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta del Mapa limpia con enlace directo a GMaps */}
                    <a
                        href="https://maps.app.goo.gl/EEAsk5r9F3XCMGLaA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:col-span-2 h-72 md:h-80 rounded-3xl overflow-hidden border border-[var(--color-surface-variant)] shadow-sm relative group block cursor-pointer"
                        title="Abrir ubicación de 4 Gatos en Google Maps"
                    >
                        <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf9a5ooY-7D5PYapCvFBtB_zmNiLcArTqe-IX2k3ifu2NkuHgvzNJmhN57UZSBNJirYti_HN7IlGvcHE_7KAI9_ba7-AOlwF7H6v4BPUnAo9P2CeEd5vvPcC_kAtfEUhsk8gbbEG1SWjBNqmakHZlkTJpmbS_w0mMUAmKH4hyU2CcsUShgL4Bh9Ovtwj2aF_kCCBuw2cQLcmJP6s5isziUAZCfblUGv1KCPDSrONAVq02LTfFlIH30uA"
                            alt="Ubicación 4 Gatos"
                        />
                    </a>

                </div>
            </section>
        </div>
    );
};