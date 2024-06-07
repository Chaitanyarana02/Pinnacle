import { Outlet } from "react-router-dom";
import AdminSideBarComponent from "./admin-side-bar.component";

const AdminDashboardComponent = () => {
  return (
    <>
      <AdminSideBarComponent />
      <div className="flex" style={{marginLeft: "400px"}}>
        <Outlet />
      </div>
    </>
  );
};

export default AdminDashboardComponent;
