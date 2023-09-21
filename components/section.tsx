import { cn } from "@/lib/utils";
import React from "react";

type Props = React.ComponentPropsWithRef<"div">;

const Section = ({ children, className, ...rest }: Props) => {
  return (
    <div className={cn("flex flex-col space-y-8", className)} {...rest}>
      {children}
    </div>
  );
};

export default Section;
