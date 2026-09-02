import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Home } from './views/Home.jsx';
import { Nosotros } from './views/Nosotros.jsx';
import { EscapeRoom } from './views/EscapeRoom.jsx';
import { Juegos } from './views/Juegos.jsx';
import { Checkout } from './views/Checkout.jsx';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: 'Azul: Pabellón de Verano',
      categoria: 'Estrategia',
      precio: 165.00,
      precioOferta: 145.00,
      cantidad: 1,
      imagenes: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDrIbeQAGv8C9eNRsOXfrPGOqfqdxLV0nHJpZfILnxYaR4cr9aFUvUqEZpr13ZABO8Ge3CEj-Pnwgi25yyekNELwniKvuHKXvzZ400ymxWym_goF9YPcld-ZVjBatjAuMmC_n6-UKim8TgZL-Zrx4VoIdVhQwTL3r9sSVoMYQXO2yzA7IPeCLRFOOTKbICH3w3aBWkgjgyGLq8lkU5Y4_K0qSfAmfo-Q-BUU1djWtoFEh3-NWZpnD6Luw'
      ]
    }
  ]);

  const agregarAlCarrito = (juego, cantidad = 1) => {
    setCarrito((prev) => {
      const existe = prev.find((i) => i.id === juego.id);
      if (existe) {
        return prev.map((i) =>
          i.id === juego.id ? { ...i, cantidad: i.cantidad + cantidad } : i
        );
      }
      return [...prev, { ...juego, cantidad }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((i) => i.id !== id));
  };

  const cantidadTotalCarrito = carrito.reduce((acc, i) => acc + i.cantidad, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <Navbar
        seccionActiva={seccionActiva}
        setSeccionActiva={setSeccionActiva}
        cantidadCarrito={cantidadTotalCarrito}
      />
      <main className="flex-grow">
        {seccionActiva === 'inicio' && (
          <Home
            irANosotros={() => { setSeccionActiva('nosotros'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            irAJuegos={() => { setSeccionActiva('juegos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}
        {seccionActiva === 'nosotros' && <Nosotros />}
        {seccionActiva === 'escaperoom' && <EscapeRoom />}
        {seccionActiva === 'juegos' && (
          <Juegos
            onAgregarAlCarrito={agregarAlCarrito}
            onIrAlCheckout={() => { setSeccionActiva('checkout'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}
        {seccionActiva === 'checkout' && (
          <Checkout
            carrito={carrito}
            onEliminarItem={eliminarDelCarrito}
            onVolverTienda={() => { setSeccionActiva('juegos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}
      </main>
      <Footer setSeccionActiva={setSeccionActiva} />
    </div>
  );
}