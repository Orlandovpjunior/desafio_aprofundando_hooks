import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ConfirmarPedido } from "./pages/ConfirmarPedido";
import { PedidoConfirmado } from "./pages/PedidoConfirmado";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmarPedido" element={<ConfirmarPedido/>} />
      <Route path="/pedidoConfirmado" element={<PedidoConfirmado/>} />
    </Routes>
  );
}