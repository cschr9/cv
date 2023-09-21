import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image?: string;
  subtitle?: string;
  timespan?: string;
};

const CVGridItem = ({ title, image, subtitle, timespan }: Props) => {
  return (
    <div className="flex justify-between xl:justify-start xl:flex-col bg-slate-50 dark:bg-slate-800 p-8 rounded-md space-y-4 bg-opacity-30 dark:bg-opacity-30 dark:hover:bg-opacity-50 hover:bg-opacity-50">
      <div className="flex items-center">
        {image && (
          <div className="bg-white rounded-md w-16 h-16 aspect-square p-1 flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              height={64}
              width={64}
              className=" object-contain min-h-[64px]"
            />
          </div>
        )}

        {subtitle && (
          <div className="flex flex-col ml-4 text-sm">{subtitle}</div>
        )}
      </div>
      <div className="flex flex-col">
        <span>{title}</span>
        {timespan && (
          <span className="text-xs text-muted-foreground">{timespan}</span>
        )}
      </div>
    </div>
  );
};

export default CVGridItem;
