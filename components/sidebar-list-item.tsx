import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  val: string;
  label: string;
  reverse?: boolean;
  iconFullsize?: boolean;
  bgColor?: string;
  linkTo?: string;
};

const SidebarListItem = ({
  icon,
  val,
  label,
  reverse,
  iconFullsize,
  bgColor,
  linkTo,
}: Props) => {
  return (
    <div className="flex text-sm items-center space-x-4">
      {iconFullsize ? (
        <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
          {icon}
        </div>
      ) : (
        <div
          className={cn(
            bgColor ? bgColor : "bg-slate-100 dark:bg-slate-800",
            "rounded-full p-2"
          )}
        >
          {icon}
        </div>
      )}
      <div
        className={cn(reverse ? "flex-col-reverse" : "flex flex-col", "flex")}
      >
        <span className="text-xs text-muted-foreground">{label}</span>
        <span>
          {linkTo ? (
            <Link
              href={linkTo}
              target={!linkTo.startsWith("@") ? "_blank" : "_top"}
              className="font-semibold"
            >
              {val}
            </Link>
          ) : (
            val
          )}
        </span>
      </div>
    </div>
  );
};

export default SidebarListItem;
