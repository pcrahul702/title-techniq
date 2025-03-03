import { useState } from "react";

interface sortInter {
  name: string;
  value: boolean;
  label: string;
  onChange?: any;
}
interface props {
  onClick?: any;
  name?: string;
  value?: string;
  label?: string;
  wrapperClass?: string;
  className?: string;
  id?: string;
}

const Checkbox = ({
  label,
  onClick,
  name,
  wrapperClass,
  value,
  className,
  id,
}: props) => {
  return (
    <div className={`text-base font-semibold  text-csBlue  ${wrapperClass}`}>
      <div className="flex gap-4 items-center">
        <div className="flex items-center justify-center h-4 w-4 2xl:h-6 2xl:w-6 border border-csBlue rounded-full">
          <input
            id={id}
            type="Radio"
            name={name}
            value={value}
            onClick={onClick}
            className="appearance-none checked:h-2 checked:w-2 2xl:checked:h-3 2xl:checked:w-3 checked:bg-csSkyBlue checked:rounded-full "
          />
        </div>
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

export default Checkbox;

{
  /* <div className="flex gap-4">
              <input
                id="1"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-csBlue checked:bg-csSkyBlue checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="1">Higher ROI</label>
            </div>
            <div className="flex gap-4">
              <input
                id="2"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-csBlue checked:bg-csSkyBlue checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="2">Latest Invoices</label>
            </div>
            <div className="flex gap-4">
              <input
                id="3"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-csBlue checked:bg-csSkyBlue checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="3">Company Name A - Z</label>
            </div>

            <div className="flex gap-4">
              <input
                id="4"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-csBlue checked:bg-csSkyBlue checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="4">Company Name Z - A</label>
            </div>
            <div className="flex gap-4">
              <input
                id="5"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-csBlue checked:bg-csSkyBlue checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="5">Seller Name A - Z</label>
            </div>
            <div className="flex gap-4">
              <input
                id="6"
                type="checkbox"
                name="sort"
                className="appearance-none h-4 w-4 rounded-full border border-csBlue checked:bg-csSkyBlue checked:border-4 checked:border-white checked:border-double "
              />
              <label htmlFor="6">Seller Name Z - A</label>
            </div> */
}
