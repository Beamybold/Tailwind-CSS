import React from "react";
import classNames from "classnames";

function Button(props) {
  const { variant = "primary", size = "medium", children, ...rest } = props;

  const baseStyles = "font-semibold rounded-md px-4 py-2 transition-colors duration-200";

  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-white text-green-600 border border-green-600 hover:bg-green-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-500 text-white hover:bg-green-600",
  };

  const sizeStyles = {
    large: "text-lg px-6 py-3",
    medium: "text-base px-4 py-2",
    small: "text-sm px-3 py-1",
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size]
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
