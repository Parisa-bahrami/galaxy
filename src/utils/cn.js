import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge to conditionally apply and merge Tailwind CSS classes.
 * @param inputs - Class values to merge and conditionally apply.
 * @returns A string of merged and safe Tailwind CSS classes.
 */
export function cn(...inputs) {
  const clsxClasses = clsx(inputs); // Conditionally join classes with clsx
  return twMerge(clsxClasses); // Merge and deduplicate Tailwind classes
}
