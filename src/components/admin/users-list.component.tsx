import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
import { fetchAllUsers } from "../../store/feature/users.slice";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { UserList } from "../../interfaces/users.interface";

const UsersListComponent = () => {
  const dispatch = useAppDispatch();
  const userListState = useAppSelector((state) => state.userListState);
  const toast = useRef<Toast>(null);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const userActionTemplate = (rowData: UserList) => {
    return rowData.isPassWordGenerated ? null : (
      <>
        <Button label="Accept"></Button>
        <Button label="Reject" severity="warning"></Button>
      </>
    );
  };
  return (
    <>
      {userListState.isLoading ? null : (
        <>
          <Toast ref={toast} />
          <Toolbar className="mb-4" start={<h3> User's List</h3>}></Toolbar>

          <DataTable
            value={userListState.users}
            dataKey="id"
            className="datatable-responsive w-full"
            emptyMessage="No Customization found."
          >
            <Column field="id" header="id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="profession" header="Profession"></Column>
            <Column field="phoneNo" header="Phone No"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="companyName" header="Company Name"></Column>
            <Column field="companyWebsite" header="Company Website"></Column>
            <Column field="companyAddress" header="Company Address"></Column>

            <Column
              body={userActionTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
          </DataTable>
        </>
      )}
    </>
  );
};

export default UsersListComponent;
