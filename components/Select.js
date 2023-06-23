import React from 'react'
import cx from "classnames";

export default function SelectComponent({ field, form: { touched, errors }, options, IconClass, ...props }) {
  const hasError = touched[field.name] && errors[field.name];
  const inputClassName = cx(
    "bg-gray-50 border border-gray-300 text-textGray sm:text-sm rounded-full focus:ring-greenSqill-500 focus:border-greenSqill-500 block w-full pl-10 p-2.5",
    { "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500": hasError }
  );

  return (
    <React.Fragment>
      <div className="mt-1 relative">
        {/* {IconClass && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconClass className="text-gray-400 text-lg" />
          </div>
        )} */}
        <select className={inputClassName} {...field} {...props}>
          <option value="" disabled default>Choose {props.placeholder}</option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* {hasError && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>} */}
    </React.Fragment>
  );
}
