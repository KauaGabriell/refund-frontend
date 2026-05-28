type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      {...rest}
      disabled={isLoading}
      className="flex items-center justify-center rounded-lg text-white bg-green-100 cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed h-12 p-4"
    >
      {children}
    </button>
  );
}
