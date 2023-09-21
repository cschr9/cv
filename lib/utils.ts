import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const renderTimeSpan = (startdate: string, enddate: string) => {
    if (startdate && enddate) {
      const startDate = new Date(startdate).toLocaleDateString("de-DE", {
        month: "short",
        year: "numeric",
      });
      const endDate = new Date(enddate).toLocaleDateString("de-DE", {
        month: "short",
        year: "numeric",
      });
      return `${startDate} - ${endDate}`;
    }
    return "";
  };