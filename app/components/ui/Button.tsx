type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "danger" | "warning" | "info" | "success" | "white" | "default";
  className?: string;
  size?: "sm" | "md" | "lg" | "xs";
  icon?: boolean;
  [key: string]: any; // for onClick, type, etc.
};

const variantClasses: Record<string, string> = {
  primary: "btn-primary",
  danger: "btn-danger",
  warning: "btn-warning",
  info: "btn-info",
  success: "btn-success",
  white: "btn-white",
  default: "btn-default",
};

const sizeClasses: Record<string, string> = {
  xs: "h-8 text-xs! rounded-[10px]!",
  sm: "h-10",
  md: "h-12",
  lg: "h-14",
};

const iconSizeClasses: Record<string, string> = {
  xs: "w-8 h-8 text-xs! rounded-[10px]!",
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};



export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  ...props
}: ButtonProps) {

  const sizeClass = icon ? iconSizeClasses[size] : sizeClasses[size];


  return (
    <button className={`btn ${variantClasses[variant]} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
