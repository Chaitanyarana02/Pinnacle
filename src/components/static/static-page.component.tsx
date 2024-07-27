import { Outlet } from "react-router-dom";
import Header from "../common/header/header";
import FooterComponent from "../common/Frames/FooterComponent";

const StaticPageComponent = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <FooterComponent />
    </>
  );
};
export default StaticPageComponent;