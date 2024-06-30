import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
import { ProductList } from "../../interfaces/ProductList.interface";
import {
  addProduct,
  deleteProduct,
  fetchProductList,
  updateProduct,
} from "../../store/feature/product-list.slice";
import { fetchCustomizationList } from "../../store/feature/customization-options.slice";
import { fetchProductCategoryList } from "../../store/feature/project-category.slice";
import { ProductCategoryInterface } from "../../interfaces/ProductCategory.interface";
import { CustomizationProductTypeEnum } from "../../enums/customizationProduct.enum";

const ProductListAdminComponent = () => {
  const dispatch = useAppDispatch();
  const productListState = useAppSelector((state) => state.productListState);
  const productCategoryListState = useAppSelector(
    (state) => state.productCategoryState
  );
  const customizationListState = useAppSelector(
    (state) => state.customizationState
  );
  const emptyProduct: ProductList = {
    id: "",
    name: "",
    categoryId: "",
    price: [],
  };
  const [deleteProductDialog, setDeleteProductDialog] =
    useState<boolean>(false);
  const [addEditDialog, setAddEditDialog] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductList>(emptyProduct);
  const toast = useRef<Toast>(null);
  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchProductCategoryList());
    dispatch(fetchCustomizationList());
  }, []);

  const confirmDeleteProduct = (rowData: ProductList) => {
    setProduct(rowData);
    setDeleteProductDialog(true);
  };
  const editProduct = (rowData: ProductList) => {
    setProduct(rowData);
    setAddEditDialog(true);
  };
  const actionBodyTemplate = (rowData: ProductList) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
    );
  };

  // Delete dialog
  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const deleteProductFromList = () => {
    dispatch(deleteProduct(product.id));
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
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
        onClick={deleteProductFromList}
      />
    </>
  );

  // add edit dialog
  const hideAddEditDialog = () => {
    setAddEditDialog(false);
  };
  const saveProduct = () => {
    if (product.name.trim()) {
      if (product.id) {
        dispatch(updateProduct(product));
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 2000,
        });
      } else {
        dispatch(addProduct(product));
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 2000,
        });
      }
      setAddEditDialog(false);
      setProduct(emptyProduct);
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
      <Button label="Save" icon="pi pi-check" text onClick={saveProduct} />
    </>
  );

  const openNew = () => {
    setProduct(emptyProduct);
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

  function getVariants(): { price: number; sku: string[] }[] {
    let sets: string[][] = [[]];
    const options: { [key: string]: string[] } = {};
    const customization = productCategoryListState.productCategoryList.find(
      (cat) => cat.id === product.categoryId
    );
    if (customization) {
      customization.customizationOptions.forEach((option) => {
        const cus = customizationListState.customizationList.find(
          (c) => c.id === option.customizationOptionId
        );
        if (cus) {
          options[cus.optionName] =
            cus.customizationType === CustomizationProductTypeEnum.RADIO
              ? option.options
              : [cus.optionName, ''];
        }
      });
      console.log(options);

      Object.keys(options).forEach((key) => {
        const new_sets: unknown[] = [];
        options[key].forEach((v) => {
          new_sets.push(Array.from(sets, (set) => [...set, v]));
        });
        sets = new_sets.flatMap((set) => set) as string[][];
      });
    }

    const variants: { price: number; sku: string[] }[] = sets.map((set) => ({
      price: 0,
      sku: set.filter((v) => v),
    })).filter(v => v.sku.length);
    console.log(variants);
    
    return variants
  }
  return (
    <>
      {productListState.isLoading ? null : (
        <>
          <Toast ref={toast} />
          <Toolbar
            className="mb-4"
            start={<h3> Product List</h3>}
            end={toolBarTemplate}
          ></Toolbar>

          <DataTable
            value={productListState.productList}
            dataKey="id"
            className="datatable-responsive w-full"
            emptyMessage="No Customization found."
          >
            <Column field="id" header="id"></Column>
            <Column field="name" header="Product Name"></Column>
            <Column field="categoryId" header="Category"></Column>
            <Column
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={addEditDialog}
            style={{ width: "550px" }}
            header="Product"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideAddEditDialog}
          >
            <div className="flex justify-content-between">
              <div className="w-6">
                <label htmlFor="name">Product Name</label>
                <InputText
                  id="name"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                  required
                  autoFocus
                />
                {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
              </div>
              <div className="w-5">
                <label htmlFor="optionType">Option Type</label>
                <Dropdown
                  value={product.categoryId}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      categoryId: e.value,
                    });
                  }}
                  options={productCategoryListState.productCategoryList}
                  optionLabel="category"
                  optionValue="id"
                  id="optionType"
                  placeholder="Select a Type"
                />
              </div>
            </div>
            <div className="mt-3">
              <h4>
                Product Variants Price
              </h4>
              {getVariants()?.map((v) => (
                <>
                  <div className="flex justify-content-between mt-5 ">
                    <div>
                      {v.sku.map((vv, i) => (
                        <span>
                          &nbsp;{vv}{" "}
                          {i == v.sku.length - 1 ? null : <>&bull;</>}
                        </span>
                      ))}
                    </div>
                    <div className="w-3">
                        <InputText
                          id="name"
                          // value={v.price}
                          placeholder="5"
                          required
                          autoFocus
                        />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </Dialog>
          <Dialog
            visible={deleteProductDialog}
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
              {product && (
                <span>
                  Are you sure you want to delete <b>{product.name}</b>?
                </span>
              )}
            </div>
          </Dialog>
        </>
      )}
    </>
  );
};

export default ProductListAdminComponent;
