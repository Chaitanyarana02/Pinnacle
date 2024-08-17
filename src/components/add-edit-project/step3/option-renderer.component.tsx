import { ReactElement, useEffect } from "react";
import { CustomizationProductTypeEnum } from "../../../enums/customizationProduct.enum";
import { CustomizationProductOptions } from "./project-step3.component";
import { InputSwitch } from "primereact/inputswitch";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";

const OptionRendererComponent = ({
  value,
  customizationOption,
  dataKey,
  valueChanged
}: {
  value: {[key: string]:  string | boolean | number};
  customizationOption: CustomizationProductOptions;
  dataKey: string;
  valueChanged: (value: string | boolean | number) => void
}) => {
  useEffect(() => {
        // if(!Object.prototype.hasOwnProperty.call(value, dataKey) && customizationOption.type === CustomizationProductTypeEnum.RADIO) {
        //   valueChanged(customizationOption.options[0])
        // }else if(!Object.prototype.hasOwnProperty.call(value, dataKey) && customizationOption.type === CustomizationProductTypeEnum.QUANTITY) {
        //   valueChanged("1")
        // }else if(!Object.prototype.hasOwnProperty.call(value, dataKey) && customizationOption.type === CustomizationProductTypeEnum.SIZE) {
        //   valueChanged("1,1")
        // }
  }, []);
  const sizeValueChanged = (v: string, valueIndex: number) => {
    console.log(JSON.stringify(value[dataKey]));
  
    // Ensure that value[dataKey] is a string
    let valueStr = value[dataKey]?.toString() || "1,1";
    let valueArr = valueStr.split(',');
  
    if (valueArr.length !== 2) {
      valueArr = ["1", "1"];
      valueChanged(valueArr.join(','));
    } else {
      valueArr[valueIndex] = v;
      valueChanged(valueArr.join(','));
    }
  
    console.log(valueArr);
  };
  const renderers: {
    [key in CustomizationProductTypeEnum]: () => ReactElement;
  } = {
    [CustomizationProductTypeEnum.BOOLEAN]: () => <InputSwitch checked={value[dataKey] as boolean} onChange={(e) => {valueChanged(e.value)}} />,
    [CustomizationProductTypeEnum.STRING]: () => <div></div>,
    [CustomizationProductTypeEnum.RADIO]: () => {
  
      return <>
        {
            customizationOption.options.map((option, index) => (
                <div key={index} className="mb-2">
                  <RadioButton key={index} name={customizationOption.customizationOption} value={option} onChange={(e) => {valueChanged(e.target.value)}} checked={option === value[dataKey] as string} />
                  <label className="font-semibold ml-1">{option}</label>
                </div>
            ))
        }
    </> 
    },
    [CustomizationProductTypeEnum.QUANTITY]: () => <div className="w-13rem">
    <div
          className="font-bold w-max align-content-center m-2 p-3"
          style={{
            border: "2px solid #DDD",
            padding: "5px 15px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >

          <i
            className="pi pi-minus  border-1 border-circle p-1 cursor-pointer"
            style={{
              fontSize: "0.7rem",
              backgroundColor: "#F7F7F7",
              borderColor: '#F7F7F7'
            }}
            onClick={() => {
              if((value[dataKey] as number) > 1) {
                valueChanged(((parseInt(value[dataKey] as string, 10) || 0) - 1).toString())

              }
            }}
          ></i>
          <span className="m-2">{value[dataKey] || 0}</span>
          <i
            className="pi pi-plus  border-1 border-circle p-1 cursor-pointer"
            style={{
               backgroundColor: "#F7F7F7",
              borderColor: '#F7F7F7',
              fontSize: "0.7rem",
            }}
            onClick={() => {
              valueChanged(((parseInt(value[dataKey] as string, 10) || 0 ) + 1).toString())
            }}
          ></i>
        </div>
    </div>,
    [CustomizationProductTypeEnum.SIZE]: () => <div className="w-13rem">
       <InputText
      type="number"
      className="w-4 mr-2"
      min="1"
      value={value[dataKey]?.toString().split(',')[0] || '1'}
      onChange={(e) => sizeValueChanged(e.target.value, 0)}
      placeholder="Width"
    />
    <span className="font-bold">X</span>
    <InputText
      type="number"
      className="w-4 ml-2"
      min="1"
      value={value[dataKey]?.toString().split(',')[1] || '1'}
      onChange={(e) => sizeValueChanged(e.target.value, 1)}
      placeholder="Height"
    />
    </div>,
  };
  
  return renderers[customizationOption.type] ? renderers[customizationOption.type]() : null;

};

export default OptionRendererComponent;
