import { AiOutlineEdit } from "react-icons/ai";
import Error from "../Error";

interface PropTypes {
  labelText?: string;
  labelTextStyle?: string;
  id?: string;
  value?: string;
  valueStyle?: string;
  type?: "text" | "number" | "file" | "password" | "email";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => {} | void;
  placeHolder?: string;
  className?: string;
  required?: boolean;
  fullWidth?: boolean;
  width?: string;
  name?: string;
  maxLength?: number;
  wrapperClass?: string;
  error?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => {} | void;
  nonEditable?: boolean;
  subLabel?: string;
  focusError?: boolean;
}

export default function Input(props: PropTypes) {
  const {
    labelText,
    subLabel,
    labelTextStyle,
    id,
    value,
    type,
    onChange,
    placeHolder,
    className,
    required,
    fullWidth,
    name,
    maxLength,
    wrapperClass,
    error,
    onBlur,
    width,
    nonEditable = false,
    focusError = true,
  } = props;
  return (
    <>
      <div className={`${wrapperClass}`}>
        {labelText ? (
          <label
            htmlFor={id}
            className={`text-sm  font-semibold block ${labelTextStyle}`}
          >
            {labelText} <span className="text-csGray">{subLabel}</span>
            {required && <span className="text-[#FF3B3B]">*</span>}
          </label>
        ) : null}
        <input
          // autoComplete='off'
          id={id}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          placeholder={placeHolder}
          className={`
                px-4 py-2 relative 
                bg-white 
                text-sm  
                border ${
                  focusError ? "border-csLightSkyBlue " : "border-red-500"
                } 
                outline-none focus:outline-none 
                focus:shadow-md 
                mt-2
                rounded-md
                h-10
                ${width}
                ${fullWidth && "w-full"} 
                ${className}
                ${error ? "border-red" : null}
                ${nonEditable ? "bg-outlineGray cursor-not-allowed" : null} `}
          onBlur={onBlur}
          disabled={nonEditable}
        />

        {error && <Error>{error}</Error>}
      </div>
    </>
  );
}
