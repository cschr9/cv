"use client";
import React, { useEffect } from "react";
import { Check, Component, Filter, Type } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";
import CVMasonryGridItem from "./cv-masonry-grid-item";

export type GridItemType = {
  title: string;
  category: string;
  logo?: string;
};

type Props = {
  data: GridItemType[];
  hideDisplayOptions?: boolean;
  defaultDisplay: "icons" | "text";
};

const CVMasonryGrid = ({ data, hideDisplayOptions, defaultDisplay }: Props) => {
  const [filteredData, setFilteredData] = React.useState<GridItemType[]>(data);
  const [display, setDisplay] = React.useState<"icons" | "text">(
    defaultDisplay
  );
  const [search, setSearch] = React.useState<string>("");

  const categories = [...new Set(data.map((item) => item.category))];

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilterChange = (filter: string) => {
    if (!filter) {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter((item) => item.category === filter);
    setFilteredData(filtered);
  };

  const handleDisplayChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const display = e.currentTarget.value;

    if (display === "icons" || display === "text") setDisplay(display);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;
    setSearch(search);
    if (!search) {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 md:justify-between">
        <div className="flex space-x-2">
          <Input
            value={search}
            onChange={(e) => handleSearch(e)}
            className="bg-slate-900 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-10 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 flex items-center justify-center aspect-square rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-900 bg-opacity-10 dark:bg-slate-700 dark:bg-opacity-30">
              <Filter className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
              {categories.map((category, i) => {
                return (
                  <DropdownMenuItem
                    key={`${category}-${i}`}
                    onClick={(e) => handleFilterChange(category)}
                    className="flex justify-between gap-x-8"
                  >
                    {category}
                    {filteredData.find(
                      (item) => item.category === category
                    ) && <Check className="w-4 h-4" />}
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={(e) => handleFilterChange("")}>
                Show All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex space-x-2">
          {hideDisplayOptions ? (
            false
          ) : (
            <div className="flex flex-col">
              <div className="text-xs tracking-wide opacity-50">show as</div>
              <div className="flex space-x-4 items-center">
                <button
                  value={"icons"}
                  onClick={(e) => handleDisplayChange(e)}
                  className={cn(
                    display === "icons" ? "" : "opacity-50",
                    "flex items-center"
                  )}
                >
                  <Component className="h-4 w-4 mr-2" />
                  Icons
                </button>
                <Separator
                  orientation="vertical"
                  className="h-4  bg-slate-900 opacity-50"
                />
                <button
                  value={"text"}
                  onClick={(e) => handleDisplayChange(e)}
                  className={cn(
                    display === "text" ? "" : "opacity-50",
                    "flex items-center"
                  )}
                >
                  <Type className="h-4 w-4 mr-2" />
                  Text
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => {
            return (
              <CVMasonryGridItem
                key={`${item.title}-${i}`}
                display={display}
                item={item}
              />
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="text-md text-muted-foreground font-light">
              Sadly not in my skillset yet :(.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVMasonryGrid;
