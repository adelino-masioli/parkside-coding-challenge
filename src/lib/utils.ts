import { clsx, type ClassValue } from "clsx"; // Import the clsx function and ClassValue type from clsx library
import { twMerge } from "tailwind-merge"; // Import the twMerge function from tailwind-merge library

// Define a function named 'cn' which takes multiple inputs of type ClassValue (a string, an array of strings, or an object) using rest parameters
export function cn(...inputs: ClassValue[]) {
  // Use clsx to merge the class names passed as arguments and then merge the resulting classes with Tailwind CSS classes using twMerge
  return twMerge(clsx(inputs));
}
