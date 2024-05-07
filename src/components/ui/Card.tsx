import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "flex border-2 border-neutral-700/30 bg-neutral-900 px-4 py-2 gap-2 rounded-lg items-center justify-center w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
