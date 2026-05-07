import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & ComponentPropsWithoutRef<"a">)
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
  );

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent",
  ghost:
    "text-neutral-700 hover:text-accent hover:bg-neutral-100 focus-visible:ring-neutral-400",
};

const base =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonBaseProps & { href: string } & ComponentPropsWithoutRef<"a">;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
