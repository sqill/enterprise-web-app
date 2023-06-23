import React from 'react'
import cx from "classnames";

export default function CheckboxComponent({ field, form: { touched, errors }, title, IconClass, ...props }) {
  const hasError = touched[field.name] && errors[field.name];
  const labelClassName = cx(
    "text-sm font-medium text-gray-900 block mb-2",
    { "text-red-700": hasError }
  );
  const inputClassName = cx(
    "w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-greenSqill-500 ",
    { "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500": hasError }
  );
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex items-center h-5">
        <input id={field.name} type="checkbox" className={inputClassName} {...field} {...props} checked={field.value} />
      </div>
      <label htmlFor={field.name} className="ml-2 text-sm font-medium text-containerGray">{title}</label>

      {/* {hasError && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>} */}
    </div>
  );
}
