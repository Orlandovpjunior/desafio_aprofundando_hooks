import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { LayoutContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
}
