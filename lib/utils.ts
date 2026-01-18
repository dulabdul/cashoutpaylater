import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility untuk menggabungkan class tailwind dengan aman (resolve conflicts)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}