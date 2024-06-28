import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
import { useEffect, useRef, useState } from "react";
import { ProductCategoryInterface } from "../../interfaces/ProductCategory.interface";
import { Button } from "primereact/button";
import {
  addProductCategory,
  deleteProductCategory,
  fetchProductCategoryList,
  updateProductCategory,
} from "../../store/feature/project-category.slice";
import { Dropdown } from "primereact/dropdown";
import { fetchCustomizationList } from "../../store/feature/customization-options.slice";
import { CustomizationProductTypeEnum } from "../../enums/customizationProduct.enum";
import { Chips } from "primereact/chips";
import { FloatLabel } from "primereact/floatlabel";
const ProjectCategoryComponent = () => {
  const productCategoryState = useAppSelector(
    (state) => state.productCategoryState
  );
  const customizationState = useAppSelector(
    (state) => state.customizationState
  );
  const dispatch = useAppDispatch();
  const emptyProductCategory: ProductCategoryInterface = {
    id: "",
    category: "",
    customizationOptions: [{ customizationOptionId: "1", options: [] }],
  };
  const [deleteProductCategoryDialog, setDeleteProductCategoryDialog] =
    useState<boolean>(false);
  const [addEditDialog, setAddEditDialog] = useState<boolean>(false);
  const [productCategory, setProductCategory] =
    useState<ProductCategoryInterface>(emptyProductCategory);
  const toast = useRef<Toast>(null);
  useEffect(() => {
    dispatch(fetchProductCategoryList());
    dispatch(fetchCustomizationList());
  }, []);

  const confirmDeleteProductCategory = (rowData: ProductCategoryInterface) => {
    setProductCategory(rowData);
    setDeleteProductCategoryDialog(true);
  };
  const editProductCategory = (rowData: ProductCategoryInterface) => {
    setProductCategory(rowData);
    setAddEditDialog(true);
  };
  const actionBodyTemplate = (rowData: ProductCategoryInterface) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProductCategory(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="warning"
          onClick={() => confirmDeleteProductCategory(rowData)}
        />
      </>
    );
  };

  // Delete dialog
  const hideDeleteProductDialog = () => {
    setDeleteProductCategoryDialog(false);
  };

  const deleteProduct = () => {
    dispatch(deleteProductCategory(productCategory.id || ""));
    setDeleteProductCategoryDialog(false);
    setProductCategory(emptyProductCategory);
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "Customization Deleted",
      life: 3000,
    });
  };
  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        text
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="warning"
        text
        onClick={deleteProduct}
      />
    </>
  );

  // add edit dialog
  const hideAddEditDialog = () => {
    setAddEditDialog(false);
  };
  const saveCustomization = () => {
    if (productCategory.category.trim()) {
      if (productCategory.id) {
        dispatch(updateProductCategory(productCategory));
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "Customization Updated",
          life: 2000,
        });
      } else {
        dispatch(addProductCategory(productCategory));
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "Customization Updated",
          life: 2000,
        });
      }
      setAddEditDialog(false);
      setProductCategory(emptyProductCategory);
    }
  };
  const productDialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        text
        onClick={hideAddEditDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        text
        onClick={saveCustomization}
      />
    </>
  );

  const openNew = () => {
    setProductCategory(emptyProductCategory);
    setAddEditDialog(true);
  };
  const toolBarTemplate = (
    <div className="my-2">
      <Button
        label="New"
        icon="pi pi-plus"
        className=" mr-2"
        onClick={openNew}
      />
    </div>
  );
  return (
    <>
      {productCategoryState.isLoading ? null : (
        <>
          <Toast ref={toast} />
          <Toolbar
            className="mb-4"
            start={<h3>Product category</h3>}
            end={toolBarTemplate}
          ></Toolbar>

          <DataTable
            value={productCategoryState.productCategoryList}
            dataKey="id"
            className="datatable-responsive w-full"
            emptyMessage="No Customization found."
          >
            <Column field="id" header="id"></Column>
            <Column field="category" header="Category"></Column>
            {/* <Column
              field="customizationOptionId"
              header="Customization Option id"
            ></Column>
               <Column
              field="options"
              header="Options"
            ></Column> */}
            <Column
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={addEditDialog}
            style={{ width: "700px" }}
            header="Product category"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideAddEditDialog}
          >
            <div className="field">
              <label htmlFor="category">Category name</label>
              <InputText
                id="category"
                value={productCategory.category}
                onChange={(e) =>
                  setProductCategory({
                    ...productCategory,
                    category: e.target.value,
                  })
                }
                required
                autoFocus
                className=""
              />

              {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
            </div>
            <div className="field">
              <span className="font-bold ">Select customization</span>
              <div>
                {productCategory.customizationOptions.map((option, index) => {
                  return (
                    <>
                      <div className="flex mt-4 justify-content-between">
                        <Dropdown
                          value={option.customizationOptionId}
                          onChange={(e) => {
                            setProductCategory({
                              ...productCategory,
                              customizationOptions:
                                productCategory.customizationOptions.map(
                                  (cus, i) =>
                                    index == i
                                      ? {
                                          customizationOptionId: e.value,
                                          options: cus.options,
                                        }
                                      : cus
                                ),
                            });
                          }}
                          options={customizationState.customizationList}
                          optionLabel="optionName"
                          optionValue="id"
                          id="optionType"
                          placeholder="Select a Type"
                          className="w-4"
                        />
                        {customizationState?.customizationList?.find(
                          (cus) => cus.id === option?.customizationOptionId
                        )?.customizationType ===
                        CustomizationProductTypeEnum.RADIO ? (
                          <div className="w-6">
                            <FloatLabel>
                              <Chips
                                id="options"
                                value={option.options}
                                onChange={(e) =>
                                  setProductCategory({
                                    ...productCategory,
                                    customizationOptions:
                                      productCategory.customizationOptions.map(
                                        (cus, i) =>
                                          i == index
                                            ? {
                                                customizationOptionId:
                                                  option.customizationOptionId,
                                                options: [
                                                  ...(e.value as string[]),
                                                ],
                                              }
                                            : cus
                                      ),
                                  })
                                }
                              />
                              <label htmlFor="options">Options</label>
                            </FloatLabel>
                          </div>
                        ) : null}
                        <Button
                          icon="pi pi-times"
                          outlined
                          severity="danger"
                          aria-label="Remove"
                          onClick={() =>
                            setProductCategory({
                              ...productCategory,
                              customizationOptions:
                                productCategory.customizationOptions.filter(
                                  (cus, i) => i !== index
                                ),
                            })
                          }
                        />
                      </div>
                    </>
                  );
                })}

                <Button
                  className="mt-3"
                  icon="pi pi-plus"
                  outlined
                  aria-label="Add"
                  onClick={() =>{
                    setProductCategory({
                     ...productCategory,
                      customizationOptions: [
                       ...productCategory.customizationOptions,
                      {
                        customizationOptionId: '',
                        options: [],
                      }
                      ],
                    });
                  }}
                />
              </div>
              {/* <Dropdown
                value={productCategory.customizationOptionId}
                onChange={(e) => {  
                  setProductCategory({
                  ...productCategory,
                  customizationOptionId: e.value,
                })}}
                options={customizationState.customizationList}
                optionLabel="optionName"
                optionValue="id"
                id="optionType"
                placeholder="Select a Type"
                className="w-full"
              /> */}
            </div>
          </Dialog>
          <Dialog
            visible={deleteProductCategoryDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductDialogFooter}
            onHide={hideDeleteProductDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {productCategory && (
                <span>
                  Are you sure you want to delete{" "}
                  <b>{productCategory.category}</b>?
                </span>
              )}
            </div>
          </Dialog>
        </>
      )}
    </>
  );
};

export default ProjectCategoryComponent;
