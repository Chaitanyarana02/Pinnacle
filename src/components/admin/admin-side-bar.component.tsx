import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";
const AdminSideBarComponent = () => {
  const sideBar: Array<{ label: string; route: string; icon: string }> = [
    { label: "Users", route: "user-list", icon: "" },
    // { label: "projects", route: "project-list", icon: "" },
    { label: "product", route: "product-list", icon: "" },
    { label: "product Categories", route: "product-category", icon: "" },
    {
      label: "Customization Options",
      route: "customization-options",
      icon: "",
    },
  ];
  return (
    <>
      <div className="overflow-y-auto card sidebar">
        <ul className="list-none p-0 m-0 overflow-hidden">
          {sideBar.map((option) => (
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                <Link to={option.route} style={{textDecoration: 'none'}} className="text-700">
                  <i className={`pi ${option.icon} mr-2`}></i>
                  <span className="font-medium">{option.label}</span>
                  <Ripple />
                </Link>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default AdminSideBarComponent;
