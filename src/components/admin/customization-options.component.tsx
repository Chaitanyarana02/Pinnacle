import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
import { deleteCustomization, fetchCustomizationList } from "../../store/feature/customization-options.slice";
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
import { Dropdown } from 'primereact/dropdown';
import { CustomizationProduct } from "../../interfaces/customizationProduct.interface";
import { CustomizationProductTypeEnum } from "../../enums/customizationProduct.enum";
import { AdminService } from "../../services/admin.service";
const CustomizationOptionsComponent = () => {
  const dispatch = useAppDispatch();
  const customizationState = useAppSelector(
    (state) => state.customizationState
  );
  const emptyCustomization: CustomizationProduct = {
    id: '',
    customizationType: CustomizationProductTypeEnum.BOOLEAN,
    optionName: ''
  };
  const [deleteCustomizationDialog, setDeleteCustomizationDialog] = useState<boolean>(false);
  const [addEditDialog, setAddEditDialog] = useState<boolean>(false);
  const [customization, setCustomization] = useState<CustomizationProduct>(emptyCustomization);
  const customizationTypeOptions = AdminService.getCustomizationOptionsList();
  const toast = useRef<Toast>(null);
  useEffect(() => {
    dispatch(fetchCustomizationList());
  }, []);


  const confirmDeleteCustomization = (rowData: CustomizationProduct) => {
    setCustomization(rowData);
    setDeleteCustomizationDialog(true);
  }
  const editCustomization = (rowData: CustomizationProduct) => {
    setCustomization(rowData);
    setAddEditDialog(true);

  }
  const actionBodyTemplate = (rowData: CustomizationProduct) => {
    return (
      <>
        <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editCustomization(rowData)} />
        <Button icon="pi pi-trash" rounded outlined severity="warning" onClick={() => confirmDeleteCustomization(rowData)} />
      </>
    );
  };


  // Delete dialog
  const hideDeleteProductDialog = () => {
    setDeleteCustomizationDialog(false);
  };


  const deleteProduct = () => {
    dispatch(deleteCustomization(customization.id))
    setDeleteCustomizationDialog(false);
    setCustomization(emptyCustomization);
    toast.current?.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Customization Deleted',
      life: 3000
    });
  };
  const deleteProductDialogFooter = (
    <>
      <Button label="No" icon="pi pi-times" text onClick={hideDeleteProductDialog} />
      <Button label="Yes" icon="pi pi-check" severity="warning" text onClick={deleteProduct} />
    </>
  );

  // add edit dialog
  const hideAddEditDialog = () => {
    setAddEditDialog(false)
  }
  const saveCustomization = () => {

  }
  const productDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" text onClick={hideAddEditDialog} />
      <Button label="Save" icon="pi pi-check" text onClick={saveCustomization} />
    </>
  );



  const openNew = () => {
    setCustomization(emptyCustomization);
    setAddEditDialog(true);
  };
  const toolBarTemplate = (
    <div className="my-2">
      <Button label="New" icon="pi pi-plus" className=" mr-2" onClick={openNew} />
    </div>
  );
  return (
    <>
      {customizationState.isLoading ? null : (
        <>
          <Toast ref={toast} />
          <Toolbar
            className="mb-4"
            start={<h3> Customization List</h3>}
            end={toolBarTemplate}
          ></Toolbar>

          <DataTable
            value={customizationState.customizationList}
            dataKey="id"
            className="datatable-responsive w-full"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            emptyMessage="No Customization found."
          >
            <Column field="id" header="id"></Column>
            <Column field="optionName" header="Option Name"></Column>
            <Column field="customizationType" header="Customization Type"></Column>
            <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
          </DataTable>

          <Dialog visible={addEditDialog} style={{ width: '450px' }} header="Customization Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideAddEditDialog}>
            <div className="field">
              <label htmlFor="optionName">Option Name</label>
              <InputText
                id="optionName"
                value={customization.optionName}
                onChange={(e) => setCustomization({...customization , optionName: e.target.value})}
                required
                autoFocus
                className=""
              />


              {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
            </div>
            <div className="field">
              <label htmlFor="optionType">Option Type</label>
              <Dropdown value={customization.customizationType} onChange={(e) => { }} options={customizationTypeOptions} optionLabel="label"
                optionValue="value"
                id="optionType"
                
                placeholder="Select a Type" className="w-full" />
            </div>
          </Dialog>
          <Dialog visible={deleteCustomizationDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
            <div className="flex align-items-center justify-content-center">
              <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
              {customization && (
                <span>
                  Are you sure you want to delete <b>{customization.optionName}</b>?
                </span>
              )}
            </div>
          </Dialog>
        </>
      )}
    </>
  );
};

export default CustomizationOptionsComponent;
