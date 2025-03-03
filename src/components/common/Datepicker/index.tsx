import React from "react";
import DatePicker from "react-datepicker";
import "/node_modules/react-datepicker/dist/react-datepicker.css";
import calendar from "src/assets/Icon/Calendar.svg";
import Image from "next/image";

interface DatePickerTypes {
  selected?: Date | null | undefined;
  onChange?: any; // need to fix this any--> ts
  labelText?: string;
  required?: boolean;
  fullWidth?: boolean;
  width?: string;
  className?: string;
  placeholder?: string;
  wrapperClass?: string;
  startDate?: Date;
  labelTextStyle?: string;
  imgCss?: string;
  value?: string | Date;
  name?: string;
}
export default function Datepicker({
  selected,
  onChange,
  labelText,
  required,
  fullWidth,
  className,
  placeholder,
  wrapperClass,
  startDate,
  width,
  labelTextStyle,
  imgCss,
  value,
  name,
}: DatePickerTypes) {
  return (
    <div className={`relative ${wrapperClass} flex flex-col `}>
      {labelText ? (
        <label className={`text-sm font-semibold ${labelTextStyle}`}>
          {labelText} {required && <span className="text-red">*</span>}
        </label>
      ) : null}
      <DatePicker
        selected={selected ? selected : startDate}
        onChange={onChange}
        placeholderText={placeholder}
        showMonthDropdown
        showYearDropdown
        startDate={startDate}
        dropdownMode="select"
        className={`border border-csLightSkyBlue rounded-md px-4 py-2 outline-none mt-2 text-sm
        ${width}
        ${fullWidth && "w-full"}
        ${className}`}
        dateFormat="dd-MM-yyyy"
        required
        maxDate={new Date()}
        popperPlacement="top"
        name={name}
      />
      <div className={`absolute right-2 bottom-1 ${imgCss}`}>
        <Image src={calendar} height={20} />
      </div>
    </div>
  );
}
