import { ReactElement, useEffect } from "react";
import { CustomizationProductTypeEnum } from "../../../enums/customizationProduct.enum";
import { CustomizationProductOptions } from "./project-step3.component";
import { InputSwitch } from "primereact/inputswitch";
import { RadioButton } from "primereact/radiobutton";

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
        }
  }, [])
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
    [CustomizationProductTypeEnum.QUANTITY]: () => <div></div>,
    [CustomizationProductTypeEnum.SIZE]: () => <div></div>,
  };
  
  return renderers[customizationOption.type] ? renderers[customizationOption.type]() : null;

};

export default OptionRendererComponent;
