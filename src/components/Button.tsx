import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-10 w-10",
  },
};

export function Button({
  children,
  isLoading,
  type = "button",
  variant = "base",
  className,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      {...rest}
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center rounded-lg text-white bg-green-100 cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed p-4",
        variants.button[variant],
        className,
      ])}
    >
      {children}
    </button>
  );
}
