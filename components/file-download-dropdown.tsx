"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsFiletypePdf, BsFiletypeDocx, BsFiletypeDoc } from "react-icons/bs";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  data: DownloadItemDTO[];
};

const FileDownloadDropdown = ({ data }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-slate-900 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-10 text-left justify-start dark:text-white w-full"
          )}
        >
          Download this CV
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Choose Format</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.map((item) => (
          <DropdownMenuItem key={item._key}>
            <a
              className="flex justify-between items-center space-x-16"
              href={item.fileUrl}
              download={item.title}
            >
              <div className="flex space-x-2 items-center justify-between">
                {item.type === "pdf" && (
                  <BsFiletypePdf className={"w-4 h-4 mr-2"} />
                )}
                {item.type === "docx" && (
                  <BsFiletypeDocx className={"w-4 h-4 mr-2"} />
                )}
                {item.type === "doc" && (
                  <BsFiletypeDoc className={"w-4 h-4 mr-2"} />
                )}

                {item.title}
              </div>

              <span className="text-xs opacity-75">[{item.type}]</span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FileDownloadDropdown;
