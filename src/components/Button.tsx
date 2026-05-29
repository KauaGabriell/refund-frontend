import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12 p-0",
    iconSmall: "h-8 w-8 p-0",
  },
};

export function Button({
  children,
  isLoading,
  disabled,
  type = "button",
  variant = "base",
  className,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      {...rest}
      disabled={disabled || isLoading}
      className={classMerge([
        "flex items-center justify-center rounded-lg text-white bg-green-100 cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 p-4",
        variants.button[variant],
        isLoading && "cursor-progress",
        className,
      ])}
    >
      {children}
    </button>
  );
}
