import React from 'react'
import cx from "classnames";

export default function InputComponent({ field, form: { touched, errors }, title, IconClass, showError = false, ...props }) {
  const hasError = touched[field.name] && errors[field.name];
  const labelClassName = cx(
    "text-sm font-light text-grayText block mb-2",
    { "text-red-700": hasError }
  );
  const inputClassName = cx(
    "bg-gray-50 border border-gray-300 border-1 text-gray-900 sm:text-sm rounded-full focus:ring-greenSqill-500 focus:border-greenSqill-500 block w-full pl-10 p-2.5",
    { "bg-red-50 border border-red-500 border-1 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500": hasError }
  );
  return (
    <React.Fragment>
      {title && <label htmlFor={field.name} className={labelClassName}>{title}</label>}
      <div className="mt-1 relative">
        <input type="text" className={inputClassName} {...field} {...props} />
      </div>

      {hasError && showError && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>}
    </React.Fragment>
  );
}
