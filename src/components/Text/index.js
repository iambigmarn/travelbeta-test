import React from "react";
const variantClasses = {
  h1: "font-normal text-[9px]",
  h2: "font-bold sm:text-[21px] md:text-[27px] text-[40px]",
  h3: "sm:text-[28px] md:text-[30px] text-[32px]",
  h4: "sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "text-[20px]",
  h6: "text-[16px]",
  body1: "text-[14px]",
  body2: "text-[12px]",
  body3: "text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
