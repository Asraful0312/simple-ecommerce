import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("w-full mx-auto max-w-screen-xl px-5 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
