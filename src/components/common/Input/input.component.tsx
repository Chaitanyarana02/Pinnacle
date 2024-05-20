import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./input.module.css";

export type InputType = {
  label?: string;
  placeholderPlaceholder?: string;

  propWidth?: CSSProperties["width"];
};

const Input: FunctionComponent<InputType> = ({
  label,
  placeholderPlaceholder,
  propWidth,
}) => {
  const label7Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.input}>
      <div className={styles.label} style={label7Style}>
        {label}
      </div>
      <div className={styles.content}>
        {/* <img
          className={styles.startAdornmentIcon}
          alt=""
          src="/startadornment.svg"
        /> */}
        <input
          className={styles.placeholder}
          placeholder={placeholderPlaceholder}
          type="text"
        />
        {/* <img
          className={styles.endAdornmentIcon}
          alt=""
          src="/startadornment.svg"
        />
        <img className={styles.selectarrowIcon} alt="" src="/selectarrow.svg" /> */}
      </div>
      <div className={styles.helptext}>HelpText</div>
    </div>
  );
};

export default Input;
