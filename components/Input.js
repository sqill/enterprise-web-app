import React from 'react'
import cx from "classnames";

export default function InputComponent({ field, form: { touched, errors }, title, IconClass, showError = false, ...props }) {
  const hasError = touched[field.name] && errors[field.name];
  const labelClassName = cx(
    "text-sm font-medium text-gray-900 block mb-2",
    { "text-red-700": hasError }
  );
  const inputClassName = cx(
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5",
    { "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500": hasError }
  );
  return  (
    <React.Fragment>
      {title && <label htmlFor={field.name} className={labelClassName}>{title}</label>}
      <div className="mt-1 relative">
        {IconClass && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconClass className="text-gray-400 text-lg" />
          </div>
        )}
        <input type="text" className={inputClassName} {...field} {...props} />
      </div>

      {hasError && showError && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>}
    </React.Fragment>
  );
}
