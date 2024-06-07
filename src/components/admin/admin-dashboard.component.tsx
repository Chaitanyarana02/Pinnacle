import { Outlet } from "react-router-dom";
import AdminSideBarComponent from "./admin-side-bar.component";

const AdminDashboardComponent = () => {
  return (
    <>
      <AdminSideBarComponent />
      <div className="" style={{marginLeft: "250px"}}>
        <Outlet />
      </div>
    </>
  );
};

export default AdminDashboardComponent;
