import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Contacto } from './pages/Contacto'
import { Merch } from './pages/Merch'
import { Sotano } from './pages/Sotano'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/sotano" element={<Sotano />} />
      </Routes>
    </BrowserRouter>
  );
}


