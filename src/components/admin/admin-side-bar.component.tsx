import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";
const AdminSideBarComponent = () => {
  const sideBar: Array<{ label: string; route: string; icon: string, id: number }> = [
    { label: "Users", route: "user-list", icon: "" , id:1},
    // { label: "projects", route: "project-list", icon: "", id:2},
    { label: "product", route: "product-list", icon: "" , id:3},
    { label: "product Categories", route: "product-category", icon: "", id:4 },
    {
      label: "Customization Options",
      route: "customization-options",
      icon: "",
      id:5
    },
  ];
  return (
    <>
      <div className="overflow-y-auto card sidebar">
        <ul className="list-none p-0 m-0 overflow-hidden">
          {sideBar.map((option) => (
            <li key={option.id}>
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
