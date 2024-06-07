import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
import { fetchCustomizationList } from "../../store/feature/customization-options.slice";
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
const CustomizationOptionsComponent = () => {
  const dispatch = useAppDispatch();
  const customizationState = useAppSelector(
    (state) => state.customizationState
  );

  useEffect(() => {
    dispatch(fetchCustomizationList());
  }, []);
  return (
    <>
      {customizationState.isLoading ? null : (
        <>
          {/* <Toast ref={toast} />
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar> */}

          <DataTable
            value={customizationState.customizationList}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            className="datatable-responsive"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            emptyMessage="No Customization found."
            responsiveLayout="scroll"
          >
            <Column field="id" header="id"></Column>
            <Column field="optionName" header="Option Name"></Column>
            <Column field="customizationType" header="Customization Type"></Column>
            <Column field="id"></Column>
          </DataTable>
        </>
      )}
    </>
  );
};

export default CustomizationOptionsComponent;
