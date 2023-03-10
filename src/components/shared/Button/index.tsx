interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
