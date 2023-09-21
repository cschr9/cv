import React from "react";
import { GridItemType } from "./cv-masonry-grid";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Props = {
  item: GridItemType;
  display: "icons" | "text";
};

const CVMasonryGridItem = ({ item, display }: Props) => {
  return (
    <div className="bg-slate-50 bg-opacity-30 dark:bg-slate-700 dark:bg-opacity-30 dark:hover:bg-opacity-50 p-2 inline-flex rounded-md hover:bg-opacity-50 items-center justify-center">
      {item.logo && display === "icons" ? (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Image src={item.logo} width={32} height={32} alt={item.title} />
            </TooltipTrigger>
            <TooltipContent align="start" className="border-0">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div>
          <div>{item.title}</div>
        </div>
      )}
    </div>
  );
};

export default CVMasonryGridItem;
