import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ConfirmarPedido } from "./ConfirmarPedido";
import { PedidoConfirmado } from "./PedidoConfirmado";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmarPedido" element={<ConfirmarPedido/>} />
      <Route path="/pedidoConfirmado" element={<PedidoConfirmado/>} />
    </Routes>
  );
}