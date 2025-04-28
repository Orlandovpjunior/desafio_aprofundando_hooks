import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Checkout } from "./pages/chekout/checkout";
import { PedidoConfirmado } from "./pages/pedidoConfirmado/PedidoConfirmado";
import DefaultLayout from "./layout/DefaultLayout";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pedidoConfirmado" element={<PedidoConfirmado />} />
      </Route>
    </Routes>
  );
}