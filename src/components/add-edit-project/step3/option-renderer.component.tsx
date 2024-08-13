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
  value: {[key: string]:  string | boolean};
  customizationOption: CustomizationProductOptions;
  dataKey: string;
  valueChanged: (value: string | boolean) => void
}) => {
  useEffect(() => {
        if(!Object.prototype.hasOwnProperty.call(value, dataKey) && customizationOption.type === CustomizationProductTypeEnum.RADIO) {
          valueChanged(customizationOption.options[0])
        }else if(!Object.prototype.hasOwnProperty.call(value, dataKey) && customizationOption.type === CustomizationProductTypeEnum.QUANTITY) {
          valueChanged("0")
        }else if(!Object.prototype.hasOwnProperty.call(value, dataKey) && customizationOption.type === CustomizationProductTypeEnum.SIZE) {
          valueChanged("1,1")
        }
  }, []);
  const sizeValueChanged = (v: string, valueIndex: number) => {
    const valueArr = (value[dataKey] as string)?.split(',');
    valueArr[valueIndex] = v.toString();
    valueChanged(valueArr.join(','));
  }
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
    <span
          className="font-bold w-max align-content-center m-2"
          style={{
            border: "1px solid #DDD",
            padding: "5px 15px",
            backgroundColor: "white",
          }}
        >

          <i
            className="pi pi-minus"
            style={{
              fontSize: "0.7rem",
            }}
            onClick={() => {
              valueChanged((parseInt(value[dataKey] as string, 10) || 0 - 1).toString())
            }}
          ></i>
          <span className="m-2">{value[dataKey] || 0}</span>
          <i
            className="pi pi-plus"
            style={{
              fontSize: "0.7rem",
            }}
            onClick={() => {
              valueChanged((parseInt(value[dataKey] as string, 10) || 0 + 1).toString())
            }}
          ></i>
        </span>
    </div>,
    [CustomizationProductTypeEnum.SIZE]: () => <div className="w-13rem">
        <InputText 
        type="number"
        className="w-4 mr-2"
        value={(value[dataKey] as string)?.split(',')[0]}
        onChange={(e) => {
          sizeValueChanged(e.target.value , 0)
                      }}
                      placeholder="Width"/>
        <span className="font-bold">X</span>
        <InputText
        className="w-4 ml-2"
        type="number"
        value={(value[dataKey] as string)?.split(',')[1]}

        onChange={(e) => {
          sizeValueChanged(e.target.value , 1)
        }}
        placeholder="Width"/>
    </div>,
  };
  
  return renderers[customizationOption.type] ? renderers[customizationOption.type]() : null;

};

export default OptionRendererComponent;
