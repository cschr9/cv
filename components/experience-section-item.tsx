import React from "react";
import { cn, renderTimeSpan } from "@/lib/utils";
import Image from "next/image";

type Props = {
  data: ExperienceDTO;
};

const ExperienceSectionItem = ({ data }: Props) => {
  return (
    <div
      className={cn(
        data.current
          ? "bg-cyan-50  hover:bg-opacity-50 dark:bg-slate-700 dark:hover:bg-opacity-70 "
          : "bg-slate-50  hover:bg-opacity-50 dark:bg-slate-800 dark:hover:bg-opacity-70",
        "px-8 py-6 rounded-md flex items-center justify-between transition-colors duration-500 bg-opacity-30 dark:bg-opacity-50 overflow-hidden group"
      )}
    >
      <div className="flex space-x-4 items-center">
        <div className="flex h-12 p-1 rounded-lg bg-white items-center justify-center aspect-square">
          <Image src={data.logo} alt={data.company} width={64} height={64} />
        </div>
        <div className="flex flex-col group-hover:-translate-y-8 transition-all duration-200 ease-in">
          <div className="relative w-full group-hover:opacity-0 group-hover:hidden">
            <div className="text-muted-foreground font-light">
              {data.jobtitle}
            </div>
            <div className="font-medium">{data.company}</div>
          </div>
          <div className="h-0 opacity-0 group-hover:opacity-100 duration-500">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 text-xs text-right space-y-1 justify-center">
        <div>
          {data.current ? (
            <span className="bg-slate-50 dark:bg-slate-950 text-slate-500 rounded-md px-2 py-1">
              Current
            </span>
          ) : (
            <span>{renderTimeSpan(data.startdate, data.enddate)}</span>
          )}
        </div>
        <div className="text-muted-foreground">{data.location}</div>
      </div>
    </div>
  );
};

export default ExperienceSectionItem;
