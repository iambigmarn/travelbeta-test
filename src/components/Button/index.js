import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  RoundedBorder1: "rounded-radius161",
};
const variants = {
  FillAmber500: "bg-amber_500 text-white_A700",
  OutlineWhiteA700: "border-2 border-solid border-white_A700 text-white_A700",
  OutlineWhiteA70002: "bg-amber_500 shadow-bs text-white_A700",
  FillWhiteA700: "bg-white_A700 text-indigo_900",
  FillGray51: "bg-gray_51 text-gray_900",
  OutlineGray900: "border border-gray_900 border-solid text-gray_900",
  FillBluegray101: "bg-bluegray_101 text-gray_900",
};
const sizes = {
  sm: "p-[4px]",
  md: "p-[10px] sm:p-[5px] md:p-[6px]",
  lg: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  xl: "md:p-[15px] p-[23px] sm:px-[15px] sm:py-[12px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4", "RoundedBorder1"]),
  variant: PropTypes.oneOf([
    "FillAmber500",
    "OutlineWhiteA700",
    "OutlineWhiteA70002",
    "FillWhiteA700",
    "FillGray51",
    "OutlineGray900",
    "FillBluegray101",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillAmber500",
  size: "lg",
};

export { Button };
